import { NextRequest, NextResponse } from 'next/server';

/**
 * INSPIRON TECH - WhatsApp Hub Webhook (Plural Route)
 * Feature: Whale Detection & Lead Qualification
 */

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'GoInspiron2025';

// GET handler for Meta verification
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');
        return new NextResponse(challenge, {
            status: 200,
            headers: { 'Content-Type': 'text/plain' }
        });
    }
    return new NextResponse('Forbidden', { status: 403 });
}

// POST handler for Whale Detection & Handshake
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('Incoming webhook:', JSON.stringify(body, null, 2));

        const value = body.entry?.[0]?.changes?.[0]?.value;
        const message = value?.messages?.[0];
        const contact = value?.contacts?.[0];

        if (message && contact) {
            const leadPhone = contact.wa_id;
            const leadName = contact.profile.name || 'Valued Client';
            const leadText = message.text?.body?.toLowerCase() || "";

            console.log(`[INSPIRON SENTRY] Message from ${leadName} (${leadPhone}): ${leadText}`);

            // 1. Whale Detection Logic
            const isWhale = leadText.includes("audit") || leadText.includes("crore");

            if (isWhale) {
                console.log(`[WHALE DETECTED] Initiating Handshake for ${leadName}`);
                await sendTemplateResponse(leadPhone, leadName);
            }
        }

        return new NextResponse('EVENT_RECEIVED', { status: 200 });
    } catch (error) {
        console.error('WEBHOOK_ERROR:', error);
        return new NextResponse('Internal Error', { status: 500 });
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
                name: "welcome_message_english",
                language: { code: "en" },
                components: [{
                    type: "body",
                    parameters: [{ type: "text", text: name }]
                }]
            }
        }),
    });

    const result = await response.json();
    console.log(`[HANDSHAKE_STATUS] API Response:`, JSON.stringify(result));
    return result;
}
