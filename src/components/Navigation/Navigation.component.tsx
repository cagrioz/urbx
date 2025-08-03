'use client';
import Container from '@/components/Container';
import UrbxLogo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

import { IoCloseSharp, IoMenuOutline } from 'react-icons/io5';
import { useState } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { ibm_mono } from '@/styles/fonts';
import ButtonLink from '../ButtonLink';

type NavigationItem = {
    text: string;
    href: string;
    tag?: string;
};

const navigationItems: NavigationItem[] = [
    {
        text: 'Robotics',
        href: '/robotics',
    },
    {
        text: 'System',
        href: '/system',
        tag: 'New',
    },
    {
        text: 'AI Software',
        href: '/ai-software',
    },
    {
        text: 'About Us',
        href: '/about-us',
    },
    {
        text: 'Partners',
        href: '/partners',
    },
    {
        text: 'News',
        href: '/news',
    },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <>
            <div
                className={classNames('fixed z-[9999] px-10 inset-0 tablet:hidden bg-black', {
                    hidden: !isMenuOpen,
                })}
            >
                <div className="flex items-center w-full justify-between py-[30px]">
                    <Link href="/">
                        <Image src={UrbxLogo} alt="Urbx Logo" width={123} height={30} />
                    </Link>
                    <div className="cursor-pointer pl-4 py-1" onClick={closeMenu}>
                        <IoCloseSharp className="text-white text-5xl" />
                    </div>
                </div>
                <nav>
                    <ul className="list-none flex flex-col gap-1">
                        {navigationItems.map((item) => (
                            <li key={item.text} className="relative">
                                <Link
                                    style={ibm_mono.style}
                                    href={item.href}
                                    className="uppercase text-standard-5 hover:text-standard-4 text-sm font-light py-3 inline-block"
                                >
                                    {item.text}
                                </Link>
                                {item.tag && (
                                    <span
                                        style={ibm_mono.style}
                                        className="-mt-2.5 uppercase absolute leading-3 top-0 right-0 ml py-1 px-3 bg-accent text-white text-[10px] font-medium rounded-full"
                                    >
                                        {item.tag}
                                    </span>
                                )}
                            </li>
                        ))}

                        <ButtonLink
                            href="/contact-us"
                            className="mt-12 uppercase text-center text-sm"
                            variant="primary"
                        >
                            Contact Us
                        </ButtonLink>
                    </ul>
                </nav>
            </div>
            <header className="z-10 relative pt-5">
                <Container>
                    <div className="flex bg-black py-4 px-4 laptop:px-10 rounded-[20px] justify-between items-center">
                        <Link href="/">
                            <Image src={UrbxLogo} alt="Urbx Logo" width={123} height={30} />
                        </Link>
                        <nav className="hidden laptop:block">
                            <ul className="list-none laptop:flex gap-1 laptop:gap-4">
                                {navigationItems.map((item) => (
                                    <li key={item.text} className="relative">
                                        <Link
                                            style={ibm_mono.style}
                                            href={item.href}
                                            className={classNames(
                                                'inline-block uppercase text-standard-5 hover:text-standard-4 text-sm font-light px-4 laptop:px-[14px] desktop:px-[22px] py-2.5 rounded-full',
                                                {
                                                    border: pathname === item.href,
                                                }
                                            )}
                                        >
                                            {item.text}
                                        </Link>
                                        {item.tag && (
                                            <span
                                                style={ibm_mono.style}
                                                className="-mt-2.5 uppercase absolute leading-3 top-0 right-0 ml py-1 px-3 bg-accent text-white text-[10px] font-medium rounded-full"
                                            >
                                                {item.tag}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="hidden laptop:block">
                            <ButtonLink
                                href="/contact-us"
                                className="uppercase text-center text-sm py-[14px]"
                                variant="primary"
                            >
                                Contact Us
                            </ButtonLink>
                        </div>
                        <div className="laptop:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <IoMenuOutline className="text-white text-5xl" />
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
}
