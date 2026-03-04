'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavigationDropdown from '@/assets/version2/navigation_dropdown.svg';
import UrbxLogo from '@/assets/version2/urbx_v2_logo.svg';

type NextGenNavigationLink = {
    label: string;
    href: string;
};

type NextGenSolutionLink = NextGenNavigationLink;

const nextGenSolutionLinks: NextGenSolutionLink[] = [
    { label: 'TOTES', href: '/next-gen/solutions/totes' },
    { label: 'CASES', href: '/next-gen/solutions/cases' },
    { label: 'STORAGE', href: '/next-gen/solutions/storage' },
];

const nextGenTopLevelLinks: NextGenNavigationLink[] = [
    { label: 'NEON', href: '/next-gen/neon' },
    { label: 'COMPANY', href: '/company' },
    { label: 'NEWS', href: '/next-gen/news' },
    { label: 'CAREER', href: '/next-gen/career' },
];

interface NextGenNavigationProps {
    className?: string;
    homeHref?: string;
    requestDemoHref?: string;
}

export default function NextGenNavigation({
    className,
    homeHref = '/next-gen',
    requestDemoHref = '/contact-us',
}: NextGenNavigationProps) {
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
                <Link href={homeHref} aria-label="URBX Next generation homepage">
                    <Image src={UrbxLogo} alt="URBX" width={123} height={30} className="h-[18px] w-auto object-contain" />
                </Link>

                <div className="flex items-center gap-8">
                    <nav className="hidden laptop:block" aria-label="Next generation primary navigation">
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

                                <div className="absolute left-0 top-full z-30 hidden pt-2 group-hover/solutions:block group-focus-within/solutions:block">
                                    <div className="relative w-[93px] overflow-hidden [box-shadow:inset_0_1px_0_rgba(255,255,255,0.95)]">
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute inset-x-0 top-0 h-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0)_100%)]"
                                        />
                                        <ul className="relative w-[93px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(147,147,147,0.09)_100%)] backdrop-blur-[3px]">
                                            {nextGenSolutionLinks.map((solutionLink) => (
                                                <li key={solutionLink.label}>
                                                    <Link
                                                        href={solutionLink.href}
                                                        className="flex h-9 items-center px-[10px] font-ibm-mono text-[12px] font-normal leading-5 text-[#DADADA] transition-colors hover:bg-white/5 hover:text-white"
                                                    >
                                                        <span>{solutionLink.label}</span>
                                                        {isActiveLink(solutionLink.href) ? (
                                                            <span
                                                                aria-hidden="true"
                                                                className="ml-1.5 h-[8px] w-[8px] rounded-full bg-[#00A5E2]"
                                                            />
                                                        ) : null}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {nextGenTopLevelLinks.map((link) => {
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
                        className="hidden h-10 w-[138px] items-center justify-center rounded-[8px] border border-white/35 bg-white/[0.11] px-[16px] font-ibm-mono text-[12px] font-semibold leading-5 tracking-[0.02em] text-[#F3F4F9] transition-colors hover:bg-white/[0.18] laptop:inline-flex"
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

            {isMobileMenuOpen ? (
                <div className="absolute inset-x-0 top-full mt-2 z-30 laptop:hidden">
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

                                {isMobileSolutionsOpen ? (
                                    <ul className="space-y-1 pb-2">
                                        {nextGenSolutionLinks.map((solutionLink) => (
                                            <li key={solutionLink.label}>
                                                <Link
                                                    href={solutionLink.href}
                                                    className="flex h-9 items-center rounded-[8px] px-3 font-ibm-mono text-[12px] font-normal leading-5 text-[#DADADA] transition-colors hover:bg-white/[0.05] hover:text-white"
                                                >
                                                    <span>{solutionLink.label}</span>
                                                    {isActiveLink(solutionLink.href) ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="ml-1.5 h-[8px] w-[8px] rounded-full bg-[#00A5E2]"
                                                        />
                                                    ) : null}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}

                                <ul className="mt-1 space-y-1 border-t border-white/10 pt-2">
                                    {nextGenTopLevelLinks.map((link) => {
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
            ) : null}
        </header>
    );
}
