import type { Metadata } from 'next';
import './globals.css';

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
