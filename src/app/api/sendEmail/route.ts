// /app/api/sendEmail/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set your SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
    const data = await req.json();
    const { firstName, lastName, phoneNumber, emailAddress, businessType, businessName, businessAddress } = data;

    const msg = {
        to: 'sales@urbx.com',
        from: 'sales@urbx.com',
        subject: 'New Contact Us Form Submission',
        text: `
                First Name: ${firstName}
                Last Name: ${lastName}
                Phone Number: ${phoneNumber}
                Email Address: ${emailAddress}
                Business Type: ${businessType}
                Business Name: ${businessName}
                Business Address: ${businessAddress}
    `,
    };

    try {
        await sgMail.send(msg);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
