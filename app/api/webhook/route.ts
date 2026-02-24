import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    console.log('[v0] Webhook received:', JSON.stringify(data, null, 2));

    // Get the external webhook URL from environment variable
    const externalWebhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || process.env.WEBHOOK_URL;

    if (externalWebhookUrl && externalWebhookUrl !== 'http://localhost:3001/webhook') {
      try {
        const externalResponse = await fetch(externalWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!externalResponse.ok) {
          console.error('[v0] External webhook failed:', externalResponse.statusText);
        }
      } catch (error) {
        console.error('[v0] Error forwarding to external webhook:', error);
        // Still return success to client since we received the data
      }
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Solicitud recibida correctamente',
        timestamp: new Date().toISOString(),
        referenceId: `REF-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Webhook error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error al procesar la solicitud',
      },
      { status: 400 }
    );
  }
}
