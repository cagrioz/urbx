import Image from 'next/image';
import CompanyHeroImage from '@/assets/version2/company_hero.png';
import FacebookIcon from '@/assets/version2/facebook_icon.png';
import InstagramIcon from '@/assets/version2/instagram_icon.png';
import LinkedinIcon from '@/assets/version2/linkedin_icon.png';
import XIcon from '@/assets/version2/x_icon.png';
import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenNavigation from '@/components/NextGenNavigation';

const companyParagraphs = [
    'URBX was founded with a clear mission: to transform order fulfillment through intelligent robotic technology and solutions that deliver meaningful improvements in operational excellence, agility, cost efficiency, and user satisfaction.',
    'Where legacy systems hit a ceiling, URBX goes higher. Our adaptive vertical network is modular by design, scalable by nature, and built to handle a wide variety of SKUs, formats, and the throughput demands of the modern warehouse.',
    "We didn't set out to improve the status quo. We set out to replace it.",
];

const socialLinks = [
    { label: 'Facebook', href: '#', icon: FacebookIcon },
    { label: 'Instagram', href: '#', icon: InstagramIcon },
    { label: 'X', href: '#', icon: XIcon },
    { label: 'LinkedIn', href: '#', icon: LinkedinIcon },
];

export default function NextGenCompanyPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
                <section className="relative isolate overflow-hidden bg-black">
                    <NextGenNavigation className="absolute inset-x-0 top-0 pt-3 tablet:pt-[14px] desktop:pt-6" />

                    <div className="mx-auto w-full max-w-[1340px] px-5 pb-12 pt-[92px] tablet:px-10 tablet:pb-14 tablet:pt-[106px] desktop:px-0 desktop:pb-16 desktop:pt-[102px]">
                        <div className="grid items-start gap-10 laptop:grid-cols-[minmax(0,1fr)_487px] laptop:gap-x-12 desktop:gap-x-[56px]">
                            <div className="relative h-[420px] overflow-hidden tablet:h-[560px] laptop:h-[720px] desktop:h-[760px]">
                                <Image
                                    src={CompanyHeroImage}
                                    alt="URBX company journey image"
                                    priority
                                    fill
                                    sizes="(min-width: 1024px) 60vw, 100vw"
                                    className="object-cover object-left"
                                />
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 right-0 w-[30%] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.9)_100%)]"
                                />
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[140px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.95)_100%)] tablet:h-[180px]"
                                />
                            </div>

                            <div className="w-full max-w-[487px]">
                                <h1 className="hero-title-radial font-general-sans text-[32px] font-normal leading-[1] tracking-[-0.01em]">
                                    Our Journey
                                </h1>

                                <div className="mt-4 space-y-8">
                                    {companyParagraphs.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="font-ibm-mono text-[16px] font-normal leading-[1.45] tracking-[-0.0312em] text-white tablet:text-[18px] desktop:text-[20px]"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-14 tablet:mt-16 desktop:mt-20">
                                    <h2 className="hero-title-radial font-general-sans text-[32px] font-normal leading-[1] tracking-[-0.01em]">
                                        Social Media
                                    </h2>

                                    <div className="mt-4 flex items-center gap-2.5">
                                        {socialLinks.map(({ label, href, icon }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                aria-label={label}
                                                className="inline-flex h-6 w-6 items-center justify-center transition-opacity hover:opacity-80"
                                            >
                                                <Image src={icon} alt="" aria-hidden="true" width={24} height={24} className="h-6 w-6 object-contain" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <ComingSoonFooter />
        </>
    );
}
