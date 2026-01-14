/**
 * INSPIRON TECH - WhatsApp Hub Webhook
 * Feature: Whale Detection & Institutional Handshake
 * Status: Mission-Critical Final Polish
 */

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'INSPIRON_TECH_STRIKE_2026';

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        return new NextResponse(challenge, { status: 200 });
    } else {
        return new NextResponse('Forbidden', { status: 403 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();

        const value = payload.entry?.[0]?.changes?.[0]?.value;
        const message = value?.messages?.[0];
        const contact = value?.contacts?.[0];

        if (message && contact) {
            const leadPhone = contact.wa_id;
            const leadName = contact.profile.name || 'Valued Client';
            const leadText = message.text?.body?.toLowerCase() || "";

            console.log(`[INSPIRON SENTRY] Lead Identified: ${leadName} (${leadPhone})`);

            // Whale Detection Logic
            const isWhale = leadText.includes("audit") || leadText.includes("crore");

            if (isWhale) {
                console.log(`[WHALE DETECTED] Triggering Handshake for ${leadName}`);
                await sendTemplateResponse(leadPhone, leadName);
            }
        }

        return new NextResponse("EVENT_RECEIVED", { status: 200 });
    } catch (error) {
        console.error('WEBHOOK_ERROR:', error);
        return new NextResponse("INTERNAL_ERROR", { status: 500 });
    }
}

async function sendTemplateResponse(to: string, name: string) {
    const phoneId = process.env.PHONE_NUMBER_ID || '917810161405498';
    const url = `https://graph.facebook.com/v21.0/${phoneId}/messages`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to: to,
            type: "template",
            template: {
                name: "welcome_message__english", // CORRECTED: DOUBLE UNDERSCORE
                language: { code: "en" },
                components: [{
                    type: "body",
                    parameters: [
                        {
                            type: "text",
                            parameter_name: "customer_name", // CORRECTED: RESOLVES ERROR #100
                            text: name
                        }
                    ]
                }]
            }
        }),
    });

    const data = await response.json();
    console.log(`[HANDSHAKE_STATUS] Result for ${to}:`, JSON.stringify(data));
    return data;
}
