import Container from '@/components/Container';
import UrbxLogo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

import FadedLine from '@/assets/faded_line.png';

export default function Footer() {
    return (
        <footer className="py-[60px]">
            <Container>
                <div className="text-white">
                    <div className="flex flex-col tablet:flex-row gap-4 text-white tablet:justify-between tablet:items-center">
                        <div>
                            <Image src={UrbxLogo} alt="Urbx Logo" width={123} height={30} />
                        </div>
                        <div>
                            <nav>
                                <ul className="flex gap-[60px]">
                                    <li>
                                        <Link
                                            href="/robotics"
                                            className="text-standard-5 hover:text-standard-4 text-base font-light"
                                        >
                                            Robotics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/system"
                                            className="text-standard-5 hover:text-standard-4 text-base font-light"
                                        >
                                            System
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/ai-software"
                                            className="text-standard-5 hover:text-standard-4 text-base font-light"
                                        >
                                            Ai Software
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about-us"
                                            className="text-standard-5 hover:text-standard-4 text-base font-light"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/partners"
                                            className="text-standard-5 hover:text-standard-4 text-base font-light"
                                        >
                                            Partners
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/news"
                                            className="text-standard-5 hover:text-standard-4 text-base font-light"
                                        >
                                            News
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <p className="mt-5 text-sm">
                            Email: <a href="mailto:sales@urbx.com">sales@urbx.com </a>
                        </p>
                    </div>
                </div>
            </Container>
            <div>
                <Image src={FadedLine} alt="Faded Line" className="mx-auto pt-8 pb-5" />
            </div>
            <Container>
                <div className="flex flex-col tablet:flex-row gap-10 justify-between text-standard-4">
                    <div className="flex gap-6 laptop:gap-10">
                        <p className="text-sm">© URBX 2024</p>
                        <Link href="#" className="text-sm uppercase">
                            Terms of Use
                        </Link>
                        <Link href="#" className="text-sm uppercase">
                            Data Protection Policy
                        </Link>
                    </div>
                    <div className="flex gap-6 laptop:gap-10">
                        <Link href="https://twitter.com/urbx_inc" className="text-sm">
                            X (twitter)
                        </Link>
                        <Link href="https://instagram.com/urbx_inc" className="text-sm">
                            Instagram
                        </Link>
                        <Link href="https://www.linkedin.com/company/urbx/" className="text-sm">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
