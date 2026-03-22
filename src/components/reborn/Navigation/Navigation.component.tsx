'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavigationDropdown from '@/assets/version2/navigation_dropdown.svg';
import UrbxLogo from '@/assets/version2/urbx_v2_logo.svg';

type NavigationLink = {
    label: string;
    href: string;
};

type SolutionLink = NavigationLink;

const solutionLinks: SolutionLink[] = [
    { label: 'TOTES', href: '/solutions/totes' },
    { label: 'CASES', href: '/solutions/cases' },
    { label: 'STORAGE', href: '/solutions/storage' },
];

const topLevelLinks: NavigationLink[] = [
    { label: 'NEON', href: '/neon' },
    { label: 'COMPANY', href: '/company' },
    { label: 'NEWS', href: '/next-gen/news' },
    { label: 'CAREER', href: '/next-gen/career' },
];

interface NavigationProps {
    className?: string;
    homeHref?: string;
    requestDemoHref?: string;
}

export default function Navigation({
    className,
    homeHref = '/next-gen',
    requestDemoHref = '/contact-us',
}: NavigationProps) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

    const isActiveLink = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMobileSolutionsOpen(false);
    }, [pathname]);

    return (
        <header className={classNames('relative z-20 w-full', className)}>
            <div className="mx-auto flex h-10 w-full max-w-[1340px] items-center justify-between px-5 tablet:px-10 desktop:px-0">
                <Link href={homeHref} aria-label="URBX homepage">
                    <Image src={UrbxLogo} alt="URBX" width={123} height={30} className="h-[18px] w-auto object-contain" />
                </Link>

                <div className="flex items-center gap-8">
                    <nav className="hidden laptop:block" aria-label="Primary navigation">
                        <ul className="flex items-center gap-8">
                            <li className="group/solutions relative">
                                <button
                                    type="button"
                                    aria-haspopup="menu"
                                    className="flex h-5 items-center gap-1 font-ibm-mono text-[12px] font-semibold leading-5 text-[#F3F4F9] transition-colors hover:text-white"
                                >
                                    SOLUTIONS
                                    <Image
                                        src={NavigationDropdown}
                                        alt=""
                                        aria-hidden="true"
                                        width={12}
                                        height={10}
                                        className="h-[10px] w-[12px] shrink-0"
                                    />
                                </button>
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-0 top-full h-px origin-left scale-x-0 bg-white/80 opacity-0 transition-all duration-150 group-hover/solutions:scale-x-100 group-hover/solutions:opacity-100 group-focus-within/solutions:scale-x-100 group-focus-within/solutions:opacity-100"
                                />

                                <div className="absolute left-0 top-full z-30 pointer-events-none -translate-y-1 pt-2 opacity-0 transition-all delay-100 duration-250 ease-out group-hover/solutions:pointer-events-auto group-hover/solutions:translate-y-0 group-hover/solutions:opacity-100 group-focus-within/solutions:pointer-events-auto group-focus-within/solutions:translate-y-0 group-focus-within/solutions:opacity-100">
                                    <div className="relative w-[93px] overflow-hidden [box-shadow:inset_0_1px_0_rgba(255,255,255,0.95)]">
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute inset-x-0 top-0 h-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0)_100%)]"
                                        />
                                        <ul className="relative w-[93px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(147,147,147,0.09)_100%)] backdrop-blur-[3px]">
                                            {solutionLinks.map((solutionLink, index) => (
                                                <li key={solutionLink.label}>
                                                    <Link
                                                        href={solutionLink.href}
                                                        className={classNames(
                                                            'flex h-9 translate-y-1 items-center px-[10px] font-ibm-mono text-[12px] font-normal leading-5 text-[#DADADA] opacity-0 transition-all duration-200 ease-out hover:bg-white/5 hover:text-white group-hover/solutions:translate-y-0 group-hover/solutions:opacity-100 group-focus-within/solutions:translate-y-0 group-focus-within/solutions:opacity-100',
                                                            {
                                                                'group-hover/solutions:delay-150 group-focus-within/solutions:delay-150': index === 0,
                                                                'group-hover/solutions:delay-200 group-focus-within/solutions:delay-200': index === 1,
                                                                'group-hover/solutions:delay-[250ms] group-focus-within/solutions:delay-[250ms]':
                                                                    index === 2,
                                                            }
                                                        )}
                                                    >
                                                        <span>{solutionLink.label}</span>
                                                        {isActiveLink(solutionLink.href) && (
                                                            <span
                                                                aria-hidden="true"
                                                                className="ml-1.5 h-[8px] w-[8px] rounded-full bg-[#00A5E2]"
                                                            />
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {topLevelLinks.map((link) => {
                                const isActive = isActiveLink(link.href);

                                return (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={classNames(
                                                'inline-flex items-center gap-1 font-ibm-mono text-[12px] font-semibold leading-5 transition-colors',
                                                isActive ? 'text-[#00A5E2] hover:text-[#00A5E2]' : 'text-[#F3F4F9] hover:text-white'
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <Link
                        href={requestDemoHref}
                        className="gradient-outline-btn hidden h-10 w-[138px] items-center justify-center rounded-[8px] bg-white/[0.11] px-[16px] font-ibm-mono text-[12px] font-semibold leading-5 tracking-[0.02em] text-[#F3F4F9] transition-colors hover:bg-white/[0.18] laptop:inline-flex"
                    >
                        REQUEST DEMO
                    </Link>

                    <button
                        type="button"
                        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMobileMenuOpen}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/35 bg-white/[0.11] text-[#F3F4F9] transition-colors hover:bg-white/[0.18] laptop:hidden"
                        onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
                    >
                        {isMobileMenuOpen ? (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <path
                                    d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <path
                                    d="M3.75 5.25H14.25M3.75 9H14.25M3.75 12.75H14.25"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute inset-x-0 top-full z-30 mt-2 laptop:hidden">
                    <div className="mx-auto w-full max-w-[1340px] px-5 tablet:px-10">
                        <div className="overflow-hidden rounded-[12px] border border-white/20 bg-[rgba(11,15,20,0.92)] backdrop-blur-[10px]">
                            <div className="px-3 py-2">
                                <button
                                    type="button"
                                    aria-expanded={isMobileSolutionsOpen}
                                    onClick={() => setIsMobileSolutionsOpen((previousState) => !previousState)}
                                    className="flex h-10 w-full items-center justify-between rounded-[8px] px-3 font-ibm-mono text-[12px] font-semibold leading-5 text-[#F3F4F9] transition-colors hover:bg-white/[0.05]"
                                >
                                    <span>SOLUTIONS</span>
                                    <Image
                                        src={NavigationDropdown}
                                        alt=""
                                        aria-hidden="true"
                                        width={12}
                                        height={10}
                                        className={classNames('h-[10px] w-[12px] shrink-0 transition-transform', {
                                            'rotate-180': isMobileSolutionsOpen,
                                        })}
                                    />
                                </button>

                                {isMobileSolutionsOpen && (
                                    <ul className="space-y-1 pb-2">
                                        {solutionLinks.map((solutionLink) => (
                                            <li key={solutionLink.label}>
                                                <Link
                                                    href={solutionLink.href}
                                                    className="flex h-9 items-center rounded-[8px] px-3 font-ibm-mono text-[12px] font-normal leading-5 text-[#DADADA] transition-colors hover:bg-white/[0.05] hover:text-white"
                                                >
                                                    <span>{solutionLink.label}</span>
                                                    {isActiveLink(solutionLink.href) && (
                                                        <span
                                                            aria-hidden="true"
                                                            className="ml-1.5 h-[8px] w-[8px] rounded-full bg-[#00A5E2]"
                                                        />
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <ul className="mt-1 space-y-1 border-t border-white/10 pt-2">
                                    {topLevelLinks.map((link) => {
                                        const isActive = isActiveLink(link.href);

                                        return (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    aria-current={isActive ? 'page' : undefined}
                                                    className={classNames(
                                                        'flex h-10 items-center rounded-[8px] px-3 font-ibm-mono text-[12px] font-semibold leading-5 transition-colors',
                                                        isActive
                                                            ? 'bg-white/[0.03] text-[#00A5E2] hover:text-[#00A5E2]'
                                                            : 'text-[#F3F4F9] hover:bg-white/[0.05] hover:text-white'
                                                    )}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <Link
                                    href={requestDemoHref}
                                    className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-[8px] border border-white/35 bg-white/[0.11] px-[16px] font-ibm-mono text-[12px] font-semibold leading-5 tracking-[0.02em] text-[#F3F4F9] transition-colors hover:bg-white/[0.18]"
                                >
                                    REQUEST DEMO
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
