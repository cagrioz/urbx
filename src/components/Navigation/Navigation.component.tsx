import Container from '@/components/Container';
import UrbxLogo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

type NavigationItem = {
    text: string;
    href: string;
};

const navigationItems: NavigationItem[] = [
    {
        text: 'Enterprise',
        href: '#',
    },
    {
        text: 'AI Software',
        href: '#',
    },
    {
        text: 'News',
        href: '#',
    },
    {
        text: 'About Us',
        href: '#',
    },
];

export default function Navigation() {
    return (
        <header className="z-10 relative">
            <Container>
                <div className="flex bg-black py-5 px-10 rounded-[20px] justify-between items-center">
                    <div>
                        <Image src={UrbxLogo} alt="Urbx Logo" width={123} height={30} />
                    </div>
                    <nav className="flex space-x-4">
                        {navigationItems.map((item) => (
                            <li key={item.text}>
                                <Link
                                    href={item.href}
                                    className="text-standard-5 hover:text-standard-4 text-base font-light"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </nav>
                    <div>
                        <Link
                            href="#"
                            className="bg-white text-black font-semibold py-[14px] px-6 rounded-[31px] text-sm"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
