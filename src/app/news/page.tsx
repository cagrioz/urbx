import Footer from '@/components/Footer';

import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image from 'next/image';

import DemoFeatured from '../../../public/news/demo/featured.jpg';

import Link from 'next/link';
import CTA from '@/components/CTA';

export default function News() {
    return (
        <>
            <div className="mb-12 tablet:mb-16 laptop:mb-20">
                <Navigation />
            </div>
            <section className="mb-16 laptop:mb-20">
                <Container>
                    <div className="mb-10 laptop:mb-[60px]">
                        <span
                            className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                            style={ibm_mono.style}
                        >
                            All news
                        </span>
                        <h1 className="font-light text-white text-[40px] leading-none laptop:max-w-[560px] mt-3 tracking-tight">
                            Urbx News
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 tablet:grid-cols-2 bg-standard-7 rounded-[20px] items-center">
                        <div className="rounded-[20px] overflow-hidden h-full">
                            <Image src={DemoFeatured} alt="Demo" className="object-cover h-full laptop:min-h-[480px]" />
                        </div>
                        <div className="p-8 laptop:p-10">
                            <span className="text-standard-4 text-sm" style={ibm_mono.style}>
                                NEWS . 8 min
                            </span>
                            <h3 className="text-black text-3xl laptop:text-[40px] laptop:leading-[52px] mt-6">
                                September 2024 <span className="font-semibold">Demo</span> Latest Innovations and
                                Insights
                            </h3>
                            <p className="text-standard-4 text-base mt-3">
                                In September 2024, URBX hosted its inaugural DEMO, presenting the latest advancements in
                                robotic technology. This event showcased the unique features and benefits of their
                                innovations within the automated warehouse sector.
                            </p>
                            <Link
                                href="/news/demo"
                                className="underline text-accent text-sm mt-6 inline-block"
                                style={ibm_mono.style}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
            <CTA
                title={
                    <>
                        Want to become a <br />
                        <span className="font-semibold">Partners?</span>
                    </>
                }
                ctaVariant="primary"
                cta={{
                    text: 'Contact Us',
                    href: '/contact-us',
                }}
            />
            <Footer />
        </>
    );
}
