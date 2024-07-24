import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Urbx',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>{children}</body>
        </html>
    );
}
