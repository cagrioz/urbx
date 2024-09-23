import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
    const data = await req.json();
    const {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        countryCode,
        businessType,
        businessName,
        businessAddress,
        businessState,
        businessZipCode,
        country,
        numberOfLocations,
        tosAccepted,
    } = data;

    const subject = businessName
        ? `${businessName} - New Enterprise Inquiry`
        : `${firstName} ${lastName} - New Enterprise Inquiry`;

    const msg = {
        to: 'sales@urbx.com',
        from: 'sales@urbx.com',
        subject,
        text: `
                First Name: ${firstName}
                Last Name: ${lastName}
                Phone Number: ${phoneNumber}
                Email Address: ${emailAddress}
                Country Code: ${countryCode}
                Business Type: ${businessType}
                Business Name: ${businessName}
                Business Address: ${businessAddress}
                Business State: ${businessState}
                Business Zip Code: ${businessZipCode}
                Country: ${country}
                Number of Locations: ${numberOfLocations}
                Terms of Service Accepted: ${tosAccepted}
    `,
    };

    try {
        await sgMail.send(msg);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        if ((error as any).response) {
            console.error((error as any)?.response?.body);
        }
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
