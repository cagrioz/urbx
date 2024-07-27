import Container from '@/components/Container';
import UrbxLogo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

import FadedLine from '@/assets/faded_line.png';

export default function Footer() {
    return (
        <footer className="bg-black py-[60px]">
            <Container>
                <div className="text-white">
                    <div className="flex text-white justify-between items-center">
                        <div>
                            <Image src={UrbxLogo} alt="Urbx Logo" width={123} height={30} />
                        </div>
                        <div>
                            <nav>
                                <ul className="flex gap-[60px]">
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-standard-5 hover:text-standard-4 text-base font-light"
                                        >
                                            Enterprise
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-standard-5 hover:text-standard-4 text-base font-light"
                                        >
                                            News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-standard-5 hover:text-standard-4 text-base font-light"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <p className="mt-5 text-sm">Email: sales@urbx.com</p>
                    </div>
                </div>
            </Container>
            <div>
                <Image src={FadedLine} alt="Faded Line" className="mx-auto pt-8 pb-5" />
            </div>
            <Container>
                <div className="flex justify-between text-standard-4">
                    <div className="flex gap-10">
                        <p className="text-sm">© URBX 2024</p>
                        <Link href="#" className="text-sm uppercase">
                            Terms of Use
                        </Link>
                        <Link href="#" className="text-sm uppercase">
                            Data Protection Policy
                        </Link>
                    </div>
                    <div className="flex gap-10">
                        <Link href="#" className="text-sm">
                            X (twitter)
                        </Link>
                        <Link href="#" className="text-sm">
                            Instagram
                        </Link>
                        <Link href="#" className="text-sm">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
