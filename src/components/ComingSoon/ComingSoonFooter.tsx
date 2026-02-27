'use client';

import Image from 'next/image';
import { type FormEvent, useState } from 'react';
import footerLogo from '@/assets/version2/footer_logo.png';
import footerMark from '@/assets/version2/footer_mark.png';

interface FooterLink {
    label: string;
    href: string;
    isComingSoon?: boolean;
    isExternal?: boolean;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const systemLinks: FooterLink[] = [
    { label: 'The Grid', href: '#', isComingSoon: true },
    { label: 'Neon OS', href: '#', isComingSoon: true },
    { label: 'Workstations', href: '#', isComingSoon: true },
];

const companyLinks: FooterLink[] = [
    { label: 'About Us', href: '#', isExternal: true },
    { label: 'Career', href: '#', isExternal: true },
    { label: 'Newsroom', href: '#', isExternal: true },
];

const footerSections: FooterSection[] = [
    { title: 'System', links: systemLinks },
    { title: 'Company', links: companyLinks },
];

function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFeedback(null);

        const normalizedEmail = email.trim().toLowerCase();
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

        if (!isValidEmail) {
            setFeedback({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: normalizedEmail }),
            });

            if (!response.ok) {
                throw new Error('Newsletter subscription failed');
            }

            setEmail('');
            setFeedback({ type: 'success', message: 'You are subscribed.' });
        } catch {
            setFeedback({ type: 'error', message: 'Subscription failed. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label
                htmlFor="coming-soon-newsletter-email"
                className="font-ibm-mono text-[12px] text-comingSoon-muted tracking-[-0.0312em] leading-[1.4]"
            >
                Newsletter
            </label>
            <div className="flex items-center gap-2.5 bg-[rgba(255,255,255,0.09)] rounded-lg py-[6px] px-[10px] w-full max-w-[337px] h-[43px]">
                <input
                    id="coming-soon-newsletter-email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={isSubmitting}
                    required
                    className="flex-1 bg-transparent text-white/60 text-[12px] font-ibm-mono placeholder:text-white/60 outline-none border-none leading-[1.4] tracking-[-0.0312em]"
                />
                <button
                    type="submit"
                    disabled={isSubmitting || email.trim().length === 0}
                    className="px-4 py-1.5 bg-white text-black font-ibm-mono text-[12px] rounded-md hover:bg-white/90 transition-colors tracking-[-0.0312em] leading-[1.4] font-normal disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'SENDING' : 'SUBSCRIBE'}
                </button>
            </div>
            {feedback && (
                <p
                    className={`font-ibm-mono text-[10px] tracking-[-0.0312em] leading-[1.4] ${
                        feedback.type === 'success' ? 'text-white' : 'text-red-300'
                    }`}
                >
                    {feedback.message}
                </p>
            )}
        </form>
    );
}

function FooterLinkItem({
    link,
    sectionTitle,
    isFirstRow,
}: {
    link: FooterLink;
    sectionTitle?: string;
    isFirstRow?: boolean;
}) {
    return (
        <div className="grid grid-cols-[140px_minmax(0,1fr)_auto] items-center gap-x-6">
            <div className="py-3">
                {sectionTitle ? (
                    <h3 className="font-general-sans text-[24px] text-white font-medium leading-[110%] tracking-[-0.01em]">
                        {sectionTitle}
                    </h3>
                ) : (
                    <span />
                )}
            </div>

            {link.isComingSoon ? (
                <div
                    className={`col-span-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 py-3 border-comingSoon-border/80 border-dashed border-b ${
                        isFirstRow ? 'border-t' : ''
                    }`}
                    aria-disabled="true"
                >
                    <span className="font-ibm-mono text-[12px] text-comingSoon-muted tracking-[-0.0312em] leading-[1.4]">
                        {link.label}
                    </span>
                    <span className="font-ibm-mono text-[12px] font-normal text-white tracking-[-0.0312em] leading-[140%] whitespace-nowrap text-right">
                        Coming Soon
                    </span>
                </div>
            ) : (
                <a
                    href={link.href}
                    className={`group col-span-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 py-3 border-comingSoon-border/80 border-dashed border-b transition-colors ${
                        isFirstRow ? 'border-t' : ''
                    }`}
                >
                    <span className="font-ibm-mono text-[12px] text-comingSoon-muted group-hover:text-white transition-colors tracking-[-0.0312em] leading-[1.4]">
                        {link.label}
                    </span>
                    <span className="flex h-4 w-4 items-center justify-center text-white">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 13L13 3M13 3H8M13 3V8"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </a>
            )}
        </div>
    );
}

function FooterLinksSection({ section }: { section: FooterSection }) {
    return (
        <div className="flex flex-col w-full">
            {section.links.map((link, index) => (
                <FooterLinkItem
                    key={link.label}
                    link={link}
                    sectionTitle={index === 0 ? section.title : undefined}
                    isFirstRow={index === 0}
                />
            ))}
        </div>
    );
}

export default function ComingSoonFooter() {
    return (
        <footer
            className="relative w-full rounded-t-lg rounded-b-lg"
            style={{
                background: 'radial-gradient(ellipse at bottom center, #000F14 0%, #060606 100%)',
            }}
        >
            <div className="w-full max-w-[1344px] mx-auto px-6 tablet:px-12 desktop:px-[48px] pt-12 tablet:pt-16 pb-6">
                {/* Upper section - Two column layout */}
                <div className="flex flex-col tablet:flex-row gap-12 tablet:justify-between">
                    {/* Left column - Logo, newsletter, description, mark */}
                    <div className="flex flex-col gap-6 flex-shrink-0 w-full tablet:w-[337px]">
                        <Image
                            src={footerLogo}
                            alt="URBX"
                            width={120}
                            height={24}
                            className="h-[18px] w-auto object-contain object-left"
                        />

                        <NewsletterForm />

                        <p className="font-ibm-mono text-[12px] text-comingSoon-muted tracking-[-0.0312em] leading-[1.4]">
                            Redefining urban fulfillment through high-density
                            <br />
                            automation and intelligent orchestration.
                        </p>

                        <div className="mt-2">
                            <Image
                                src={footerMark}
                                alt="URBX Mark"
                                width={134}
                                height={134}
                                sizes="(min-width: 1440px) 134px, (min-width: 768px) 120px, 100px"
                                className="w-[100px] tablet:w-[120px] desktop:w-[134px] h-auto"
                            />
                        </div>
                    </div>

                    {/* Right column - System then Company stacked vertically */}
                    <div className="flex flex-col gap-10 w-full tablet:w-[573px] flex-shrink-0">
                        {footerSections.map((section) => (
                            <FooterLinksSection key={section.title} section={section} />
                        ))}
                    </div>
                </div>

                {/* Bottom section - Copyright and legal */}
                <div className="flex flex-col tablet:flex-row justify-between items-start tablet:items-center mt-12 tablet:mt-16 pt-6">
                    <p className="font-ibm-mono text-[10px] text-comingSoon-muted tracking-[-0.0312em] leading-[1.4]">
                        © 2026 Urbx Logistics. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 tablet:mt-0">
                        <a
                            href="#"
                            className="font-ibm-mono text-[10px] text-comingSoon-muted hover:text-white transition-colors underline tracking-[-0.0312em] leading-[1.4]"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="font-ibm-mono text-[10px] text-comingSoon-muted hover:text-white transition-colors underline tracking-[-0.0312em] leading-[1.4]"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
