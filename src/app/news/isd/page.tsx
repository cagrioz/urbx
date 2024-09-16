import Navigation from '@/components/Navigation';
import { ibm_mono } from '@/styles/fonts';
import Container from '@/components/Container';

import ISDPartnerHero from '@/assets/isd_partner_hero.jpg';
import ISDContentImg1 from '@/assets/isd_content_1.jpg';
import ISDContentImg2 from '@/assets/isd_content_2.jpg';

import ISDCommentCover from '@/assets/isd_comment_cover.jpg';
import ISDCommentAvatar from '@/assets/isd_comment_avatar.jpg';
import ISDCommentLogo from '@/assets/isd_comment_logo.png';

import Image from 'next/image';
import Seperator from '@/components/Separator';

import fs from 'fs';
import path from 'path';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Partners() {
    /*
    // Simulate fetching current post
    const currentPost = 'test3';

    // Fetch all other content files dynamically
    const contentDir = path.join(process.cwd(), 'src', 'contents', 'news');
    const contentFiles = fs.readdirSync(contentDir);

    // Select 2 random posts excluding the current one
    const randomPosts = contentFiles
        .filter((file) => file !== `${currentPost}.ts`)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

    const posts = randomPosts.map((post) => {
        const content = require(`@/contents/news/${post}`);
        return {
            ...content.default,
            slug: post.replace('.ts', ''),
        };
    });

    */

    return (
        <>
            <div>
                <Navigation />
            </div>
            <section className="pt-20">
                <Container>
                    <div className="mb-[60px]">
                        <span
                            className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                            style={ibm_mono.style}
                        >
                            latest urbx news
                        </span>
                        <h1 className="font-light text-white text-[40px] leading-none laptop:max-w-[547px] mt-3">
                            URBX and ISD: Transforming Tomorrow's Warehouse{' '}
                            <span className="font-semibold">Solutions</span>
                        </h1>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <Image src={ISDPartnerHero} alt="ISD Partner Hero" />
                    </div>
                </Container>
            </section>
            <section className="py-20">
                <Container>
                    <div className="flex gap-[120px] justify-between items-center">
                        <div>
                            <span
                                className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                                style={ibm_mono.style}
                            >
                                PARTNERSHIP
                            </span>
                            <h3 className="mt-3 text-[32px] leading-tight laptop:max-w-[456px]">
                                URBX Partners with ISD to Revolutionize Warehouse Automation
                            </h3>
                            <div className="mt-10">
                                <h4 className="text-2xl">About the Partnership</h4>
                                <p className="text-standard-4 mt-3">
                                    URBX has entered into a strategic partnership with Integrated System Design (ISD),
                                    appointing ISD as an authorized integrator of URBX’s cutting-edge robotic solutions.
                                    These solutions are designed for high-density, high-throughput goods-to-person
                                    automated storage and retrieval systems, enhancing operational efficiency and
                                    productivity across various industries
                                </p>
                            </div>
                            <div className="mt-[60px]">
                                <h4 className="text-2xl">About ISD</h4>
                                <p className="text-standard-4 mt-3">
                                    ISD, based in Wixom, MI, specializes in providing scalable automated solutions for
                                    warehouse, manufacturing, distribution, retail, and wholesale applications. Offering
                                    a comprehensive range of services, including consulting, system design, integration,
                                    industrial controls, and customer support, ISD tailors innovative solutions to meet
                                    specific client needs. Their approach significantly reduces operational cost while
                                    developing scalable plans to address evolving industry challenges. 
                                </p>
                                <p className="text-standard-4 mt-4">
                                    ISD’s extensive expertise includes handling, storing, picking pieces (eaches),
                                    cases, pallets, build lines, and specialized or custom handling solutions. Their
                                    product and service offerings encompass automatic storage and retrieval systems
                                    (ASRS), conveyors, robotics, batch stations, shuttles, pick-to-light systems,
                                    A-Frames, carousels, vertical lift modules (VLMs), controls, and software (inventory
                                    management systems - WCS, WMS, MES, ERP). ISD provides unparalleled solutions
                                    tailored to meet the unique needs of their clients
                                </p>
                            </div>
                        </div>
                        <div className="w-[456px] rounded-[20px] overflow-hidden shrink-0">
                            <Image src={ISDContentImg1} alt="ISD Content Image 1" />
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className="flex desktop:gap-[120px] justify-between items-center border border-dashed border-standard-3 rounded-[10px] py-[90px] px-[102px]">
                        <div className="desktop:w-[360px] shrink-0 rounded-[10px] overflow-hidden">
                            <Image src={ISDCommentCover} alt="ISD Comment Cover" />
                        </div>
                        <div>
                            <blockquote className="text-2xl">
                                "At ISD, we've always been at the forefront of warehouse automation. The URBX system
                                aligns perfectly with our mission to provide our clients with the most efficient and
                                innovative solutions. This technology's ability to complete 50-line orders in under 3
                                minutes is not just impressive – it's revolutionary."
                            </blockquote>
                            <div className="flex items-center justify-between mt-11">
                                <div className="flex items-center gap-5">
                                    <div className="w-11 h-11 rounded-[10px] overflow-hidden">
                                        <Image src={ISDCommentAvatar} alt="ISD Comment Avatar" />
                                    </div>
                                    <div>
                                        <p className="text-xl">Tony Margot</p>
                                        <span className="text-base text-standard-4"> VP of Sales, TISD</span>
                                    </div>
                                </div>
                                <div className="h-[45px]">
                                    <Image
                                        src={ISDCommentLogo}
                                        alt="ISD Comment Logo"
                                        className="max-h-[45px] max-w-[130px] object-contain object-right"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="py-20 pb-0">
                <Container>
                    <div className="flex gap-[120px] justify-between items-center">
                        <div>
                            <span
                                className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                                style={ibm_mono.style}
                            >
                                PARTNERSHIP
                            </span>
                            <h3 className="mt-3 text-[32px] leading-tight laptop:max-w-[456px]">
                                Redefining Robotics{' '}
                            </h3>
                            <div className="mt-10">
                                <h4 className="text-2xl">Benefits</h4>
                                <p className="text-standard-4 mt-3">
                                    This partnership envisions a prosperous future by combining URBX’s high-density,
                                    high-throughput robotic goods-to-person system with ISD’s specialized expertise in
                                    optimizing warehouse fulfillment and material handling. By integrating these
                                    advanced technologies and expert methodologies, the collaboration aims to redefine
                                    efficiency standards in the industry. This alliance is expected to bring
                                    transformative improvements in operational performance, enabling both companies to
                                    meet the evolving needs of their clients while setting new benchmarks in warehouse
                                    automation and fulfillment process.
                                </p>
                            </div>
                            <div className="mt-[60px]">
                                <h4 className="text-2xl">In Summary</h4>
                                <p className="text-standard-4 mt-3">
                                    URBX has announced a strategic partnership with Integrated Systems Design (ISD) to
                                    integrate advanced robotic solutions for high-density, high-throughput automated
                                    storage and retrieval systems. ISD, headquartered in Wixom, MI, specializes in
                                    scalable automation solutions that significantly reduce operational costs while
                                    meeting specific client needs. This collaboration, which combines URBX’s
                                    cutting-edge robotic technology with ISD’s material handling expertise is poised to
                                    transform warehouse operations. URBX CEO Lincoln Cavalieri highlights the
                                    transformative potential of this partnership, noting that it is poised to
                                    significantly enhance efficiency and foster innovation within the automated
                                    warehouse industry. He underscores how the collaboration aims to introduce
                                    groundbreaking advancements, streamline operations, and set new benchmarks for
                                    performance, ultimately reshaping industry standards and driving future growth.
                                </p>
                            </div>
                        </div>
                        <div className="w-[456px] rounded-[20px] overflow-hidden shrink-0">
                            <Image src={ISDContentImg2} alt="ISD Content Image 1" />
                        </div>
                    </div>
                </Container>
            </section>
            <Seperator />
            <CTA
                title={
                    <>
                        Get ready bring Urbx to <br />
                        <span className="font-semibold">your Warehouse</span>{' '}
                    </>
                }
                ctaVariant="dark"
                cta={{ href: '/contact-us', text: 'Contact Us' }}
            />
            <Footer />
        </>
    );
}
