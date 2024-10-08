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
                black: '#000000', // Overwrite the default black color
                standard: {
                    1: '#111222',
                    2: '#394365',
                    3: '#535B75',
                    4: '#969FBC',
                    5: '#CAD0DD',
                    6: '#DCE0EA',
                    7: '#F2F4F9',
                },
                accent: '#00A5E2',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                'ibm-mono': ['"IBM Plex Mono"', 'monospace'],
                'general-sans': 'General Sans, sans-serif',
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
