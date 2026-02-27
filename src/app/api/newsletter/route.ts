import { NextResponse } from 'next/server';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as { email?: string };
        const email = body?.email?.trim().toLowerCase() ?? '';

        if (!EMAIL_PATTERN.test(email)) {
            return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
        }

        const webhookUrl = process.env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL;
        if (!webhookUrl) {
            return NextResponse.json({ error: 'Newsletter webhook is not configured.' }, { status: 500 });
        }

        const payload = {
            email,
            source: 'coming-soon-footer',
            submittedAt: new Date().toISOString(),
        };

        const parseResponse = async (response: Response) => {
            const responseText = await response.text();
            let responseJson: Record<string, unknown> | null = null;
            try {
                responseJson = responseText ? (JSON.parse(responseText) as Record<string, unknown>) : null;
            } catch {
                responseJson = null;
            }
            return { responseText, responseJson };
        };

        // First try: JSON body
        let response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            cache: 'no-store',
        });

        let { responseText, responseJson } = await parseResponse(response);

        // Fallback: x-www-form-urlencoded for Apps Script setups using e.parameter
        const looksLikeBadRequest =
            responseJson?.error === 'bad_request' ||
            responseJson?.ok === false ||
            responseJson?.success === false;

        if ((response.ok && looksLikeBadRequest) || !response.ok) {
            const formBody = new URLSearchParams(payload).toString();
            response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                body: formBody,
                cache: 'no-store',
            });
            ({ responseText, responseJson } = await parseResponse(response));
        }

        if (!response.ok) {
            console.error('Google Sheets webhook http error', {
                status: response.status,
                body: responseText,
            });
            return NextResponse.json({ error: 'Failed to write to Google Sheets.' }, { status: 502 });
        }

        // Apps Script often returns HTTP 200 even when logical failure occurs.
        if (responseJson && (responseJson.ok === false || responseJson.success === false || responseJson.error)) {
            console.error('Google Sheets webhook logical error', responseJson);
            return NextResponse.json(
                { error: typeof responseJson.error === 'string' ? responseJson.error : 'Google Sheets rejected data.' },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Newsletter API error', error);
        return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 });
    }
}
