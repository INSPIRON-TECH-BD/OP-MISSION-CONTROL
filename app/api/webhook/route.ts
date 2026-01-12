/**
 * INSPIRON TECH - WhatsApp Hub Webhook
 * Feature: Whale Detection & Lead Qualification
 * Objective: BDT 9,000,000 Scaling Phase
 */

import { NextRequest, NextResponse } from 'next/server';

/**
 * Meta Webhook Verification (GET)
 * Used by Meta to verify the endpoint ownership.
 */
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    // WHATSAPP_VERIFY_TOKEN should be set in environment variables
    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'INSPIRON_TECH_STRIKE_2026';

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');
        return new NextResponse(challenge, { status: 200 });
    } else {
        return new NextResponse('Forbidden', { status: 403 });
    }
}

/**
 * WhatsApp Message Handler (POST)
 * Processes incoming leads and applies "n-Law" filtering.
 */
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Verification that this is a WhatsApp message
        if (body.object === 'whatsapp_business_account') {
            const entry = body.entry?.[0];
            const changes = entry?.changes?.[0];
            const value = changes?.value;
            const message = value?.messages?.[0];
            const contact = value?.contacts?.[0];

            if (message && contact) {
                const leadText = message.text?.body?.toLowerCase() || '';
                const wa_id = contact.wa_id;
                const name = contact.profile?.name || 'Unknown Operator';

                console.log(`INCOMING_LEAD: ${name} (${wa_id}) | Payload: ${leadText}`);

                // LEAD QUALIFICATION LOGIC (The "n-Law" Filter)
                let tier = 'TIER_3_MICRO';

                // Qualification Criteria: 50Cr+ turnover or scale indicators
                const whaleKeywords = ['above 50cr', '50cr', '20+ ponds', '100cr', 'industrial scale'];
                const smeKeywords = ['10-50cr', '5-10 ponds', 'automated tracking'];

                if (whaleKeywords.some(keyword => leadText.includes(keyword))) {
                    tier = 'TIER_1_WHALE';
                } else if (smeKeywords.some(keyword => leadText.includes(keyword))) {
                    tier = 'TIER_2_SME';
                }

                await processLead({ name, wa_id, text: leadText }, tier);
            }

            return NextResponse.json({ status: 'success' });
        } else {
            return NextResponse.json({ status: 'not_found' }, { status: 404 });
        }
    } catch (error) {
        console.error('WEBHOOK_ERROR:', error);
        return NextResponse.json({ status: 'error' }, { status: 500 });
    }
}

/**
 * Process Lead based on Tier
 * High-priority triggers for TIER_1_WHALE
 */
async function processLead(lead: { name: string, wa_id: string, text: string }, tier: string) {
    const timestamp = new Date().toISOString();
    const PHONE_ID = '917810161405498';
    const url = `https://graph.facebook.com/v21.0/${PHONE_ID}/messages`;

    if (tier === 'TIER_1_WHALE') {
        console.log(`[${timestamp}] CRITICAL_WHALE_DETECTED: ${lead.name} (${lead.wa_id})`);
    } else if (tier === 'TIER_2_SME') {
        console.log(`[${timestamp}] SME_LEAD_LOGGED: ${lead.name} (${lead.wa_id})`);
    } else {
        console.log(`[${timestamp}] MICRO_LEAD_LOGGED: ${lead.name} (${lead.wa_id})`);
    }

    // Only trigger the welcome template for NEW leads
    if (lead.text === 'start' || lead.text === 'technical audit') {
        const payload = {
            messaging_product: "whatsapp",
            to: lead.wa_id,
            type: "template",
            template: {
                name: "welcome_message_english",
                language: { code: "en" },
                components: [{
                    type: "body",
                    parameters: [{ type: "text", text: lead.name }]
                }]
            }
        };

        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`
                },
                body: JSON.stringify(payload)
            });
            console.log(`TEMPLATE_SENT: welcome_message_english to ${lead.wa_id}`);
        } catch (error) {
            console.error('TEMPLATE_ERROR:', error);
        }
    }
}
