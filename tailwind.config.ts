import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: '#000000',
                comingSoon: {
                    hero: '#000000',
                    footer: '#060606',
                    muted: '#888B96',
                    input: 'rgba(255, 255, 255, 0.09)',
                    border: '#0D2C35',
                    link: '#888B96',
                },
                standard: {
                    1: '#111222',
                    2: '#394365',
                    3: '#535B75',
                    4: '#969FBC',
                    5: '#CAD0DD',
                    6: '#DCE0EA',
                    7: '#F2F4F9',
                },
                accent: '#39C7FE',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'footer-gradient': 'radial-gradient(ellipse at bottom center, #000F14 0%, #060606 100%)',
            },
            fontFamily: {
                'ibm-mono': ['"IBM Plex Mono"', 'monospace'],
                'general-sans': ['General Sans', 'sans-serif'],
            },
            fontSize: {
                'hero-title': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'hero-title-mobile': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'hero-subtitle': ['20px', { lineHeight: '1.4', letterSpacing: '-3.12%' }],
                'footer-label': ['12px', { lineHeight: '1.4', letterSpacing: '-3.12%' }],
                'footer-link': ['14px', { lineHeight: '1.4', letterSpacing: '-3.12%' }],
                'footer-small': ['10px', { lineHeight: '1.4', letterSpacing: '-3.12%' }],
            },
            spacing: {
                'footer-gap': '80px',
                'section-gap': '152px',
            },
            screens: {
                mobile: '375px',
                tablet: '768px',
                laptop: '1024px',
                desktop: '1440px',
            },
        },
    },

    plugins: [],
};
export default config;
