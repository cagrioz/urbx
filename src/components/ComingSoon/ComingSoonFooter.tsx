import Image from 'next/image';
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
    return (
        <div className="flex flex-col gap-3">
            <label className="font-ibm-mono text-[12px] text-comingSoon-muted tracking-[-0.0312em] leading-[1.4]">
                Newsletter
            </label>
            <div className="flex items-center gap-2.5 bg-[rgba(255,255,255,0.09)] rounded-lg py-[6px] px-[10px] w-full max-w-[337px] h-[43px]">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 bg-transparent text-white/60 text-[12px] font-ibm-mono placeholder:text-white/60 outline-none border-none leading-[1.4] tracking-[-0.0312em]"
                />
                <button
                    type="submit"
                    className="px-4 py-1.5 bg-white text-black font-ibm-mono text-[12px] rounded-md hover:bg-white/90 transition-colors tracking-[-0.0312em] leading-[1.4] font-normal"
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>
    );
}

function FooterLinkItem({ link }: { link: FooterLink }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-comingSoon-border first:border-t first:border-comingSoon-border">
            <a
                href={link.href}
                className="font-ibm-mono text-[14px] text-comingSoon-link hover:text-white transition-colors tracking-[-0.0312em] leading-[1.4]"
            >
                {link.label}
            </a>
            {link.isComingSoon && (
                <span className="font-ibm-mono text-[12px] text-white tracking-[-0.0312em] leading-[1.4]">
                    Coming Soon
                </span>
            )}
            {link.isExternal && (
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                >
                    <path
                        d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </div>
    );
}

function FooterLinksSection({ section }: { section: FooterSection }) {
    return (
        <div className="flex flex-col w-full">
            <h3 className="font-general-sans text-[20px] text-white mb-4 font-normal">{section.title}</h3>
            <div className="flex flex-col">
                {section.links.map((link) => (
                    <FooterLinkItem key={link.label} link={link} />
                ))}
            </div>
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
                                width={120}
                                height={100}
                                className="w-[100px] tablet:w-[120px] h-auto opacity-80"
                            />
                        </div>
                    </div>

                    {/* Right column - System then Company stacked vertically */}
                    <div className="flex flex-col gap-12 w-full tablet:w-[573px] flex-shrink-0">
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
