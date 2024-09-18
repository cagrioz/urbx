import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

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
            <head>
                {/* Google Tag Manager Script */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-X6JX2CF5PP"
                    strategy="afterInteractive" // Loads script after the page becomes interactive
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-X6JX2CF5PP');
                    `}
                </Script>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" type="image/png" href="/favicon_black.png" media="(prefers-color-scheme: dark)" />
                <link rel="icon" type="image/png" href="/favicon_white.png" media="(prefers-color-scheme: light)" />
            </head>
            <body>{children}</body>
        </html>
    );
}
