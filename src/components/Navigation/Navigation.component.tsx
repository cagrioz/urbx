'use client';
import Container from '@/components/Container';
import UrbxLogo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

import { IoMenuOutline } from 'react-icons/io5';
import { useState } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

type NavigationItem = {
    text: string;
    href: string;
};

const navigationItems: NavigationItem[] = [
    {
        text: 'Robotics',
        href: '/robotics',
    },
    {
        text: 'AI Software',
        href: '/ai-software',
    },
    {
        text: 'About Us',
        href: '/about-us',
    },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="z-10 relative pt-5">
            <Container>
                <div className="flex bg-black py-5 px-5 laptop:px-10 rounded-[20px] justify-between items-center">
                    <Link href="/">
                        <Image src={UrbxLogo} alt="Urbx Logo" width={123} height={30} />
                    </Link>
                    <nav className="hidden tablet:block">
                        <ul className="list-none tablet:flex gap-x-2 laptop:gap-x-4">
                            {navigationItems.map((item) => (
                                <li key={item.text}>
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            'text-standard-5 hover:text-standard-4 text-base font-light px-[22px] py-2.5 rounded-full',
                                            {
                                                border: pathname === item.href,
                                            }
                                        )}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            <li className="relative">
                                <Link
                                    href="#"
                                    className="opacity-70 text-standard-5 hover:text-standard-4 text-base font-light px-[22px] py-2.5 rounded-full"
                                >
                                    News
                                    <span className="absolute -top-3 -right-5 bg-red-500 text-white font-semibold rounded-2xl py-1.5 px-2 inline-block text-[9px] leading-none">
                                        Soon
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="hidden tablet:block">
                        <Link
                            href="/contact-us"
                            className="inline-block bg-accent text-white font-semibold py-[14px] px-6 rounded-[31px] text-sm"
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="tablet:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <IoMenuOutline className="text-white text-5xl" />
                    </div>
                </div>
                <div
                    className={classNames('absolute inset-x-8 -bottom-12 rounded-[20px] tablet:hidden bg-black/80', {
                        hidden: !isMenuOpen,
                    })}
                >
                    <nav className="flex gap-x-2 laptop:gap-x-4 justify-center -ml-4">
                        {navigationItems.map((item) => (
                            <li key={item.text}>
                                <Link
                                    href={item.href}
                                    className="text-standard-5 hover:text-standard-4 text-base font-light py-2 inline-block"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    );
}
