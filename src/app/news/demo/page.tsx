import Navigation from '@/components/Navigation';
import { ibm_mono } from '@/styles/fonts';
import Container from '@/components/Container';

import ISDPartnerHero from '../../../../public/news/demo/featured.jpg';

import Content1Img from '../../../../public/news/demo/content_1.jpg';
import Content2Img from '../../../../public/news/demo/content_2.jpg';

import ISDCommentCover from '@/assets/isd_comment_cover.jpg';
import ISDCommentAvatar from '@/assets/isd_comment_avatar.jpg';
import ISDCommentLogo from '@/assets/isd_comment_logo.png';

import Image from 'next/image';
import Seperator from '@/components/Separator';

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
            <div className="mb-12 tablet:mb-16 laptop:mb-20">
                <Navigation />
            </div>
            <section>
                <Container>
                    <div className="mb-8 laptop:mb-[60px]">
                        <span
                            className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                            style={ibm_mono.style}
                        >
                            latest urbx news
                        </span>
                        <h1 className="font-light text-white text-3xl laptop:text-[40px] laptop:leading-none laptop:max-w-[560px] mt-3 tracking-tight">
                            September 2024 <span className="font-semibold">DEMO</span> Latest Innovations and Insights{' '}
                        </h1>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <Image src={ISDPartnerHero} alt="ISD Partner Hero" />
                    </div>
                </Container>
            </section>
            <section className="py-10 laptop:py-20">
                <Container>
                    <div className="flex flex-col tablet:flex-row gap-8 desktop:gap-[120px] justify-between items-center">
                        <div>
                            <span
                                className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                                style={ibm_mono.style}
                            >
                                PARTNERSHIP
                            </span>
                            <h3 className="mt-3 text-2xl tablet:text-[32px] leading-tight laptop:max-w-[456px]">
                                URBX's Inaugural DEMO Reveals Exciting New Features and Capabilities{' '}
                            </h3>
                            <div className="mt-6 laptop:mt-10">
                                <h4 className="text-xl tablet:text-2xl">About the DEMO</h4>
                                <p className="text-standard-4 mt-3">
                                    In September 2024, URBX hosted its inaugural DEMO, presenting the latest
                                    advancements in robotic technology. This event showcased the unique features and
                                    benefits of their innovations within the automated warehouse sector. Over 30
                                    attendees received an exclusive look at URBX’s groundbreaking technology, including
                                    the new GridBot, TowerBot, and conveyor system, demonstrated within a compact
                                    25-foot racking system. This DEMO represents a significant milestone for URBX,
                                    highlighting the company's commitment to delivering a revolutionary system designed
                                    to enhance efficiency and transform warehouse operations.
                                </p>
                            </div>
                            <div className="mt-8 laptop:mt-[60px]">
                                <h4 className="text-xl tablet:text-2xl">Key Components</h4>
                                <p className="text-standard-4 mt-3">
                                    The DEMO featured an advanced system incorporating the latest GridBot, two
                                    TowerBots, and a conveyor system, all engineered for optimal performance. The system
                                    demonstrated at the event was designed for efficient operation with two TowerBots
                                    and one GridBot. On the left side of the setup, a conveyor mechanism was utilized,
                                    where one TowerBot retrieved multiple totes from storage and transported them to the
                                    conveyor system for further processing. On the right side, the racking system
                                    included a GridBot interacting with a separate TowerBot. In this configuration, the
                                    TowerBot collected multiple totes from storage and delivered them to a designated
                                    buffer zone. From there, the GridBot handled the totes, ensuring precise and
                                    efficient picking operations. The DEMO effectively showcased the system's capability
                                    to store and retrieve numerous totes within a multi-level racking system at high
                                    speeds, all through a fully automated process. This event marked a significant
                                    milestone, highlighting the advancements of the URBX system to a select group of
                                    attendees and underscoring the notable progress and growth achieved by URBX.
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
                        <div className="w-full tablet:w-[330px] laptop:w-[456px] rounded-[20px] overflow-hidden shrink-0">
                            <Image src={Content1Img} alt="ISD Content Image 1" />
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className="flex flex-col tablet:flex-row py-10 px-8 desktop:py-[90px] desktop:px-[102px] gap-8 desktop:gap-[120px] justify-between laptop:items-center border border-dashed border-standard-3 rounded-[10px]">
                        <div className="tablet:w-[240px] desktop:w-[360px] shrink-0 rounded-[10px] overflow-hidden">
                            <Image src={ISDCommentCover} alt="ISD Comment Cover" />
                        </div>
                        <div>
                            <blockquote className="text-xl laptop:text-2xl">
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
            <section className="pt-10 laptop:pt-20">
                <Container>
                    <div className="flex flex-col tablet:flex-row gap-8 desktop:gap-[120px] justify-between items-center">
                        <div>
                            <span
                                className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                                style={ibm_mono.style}
                            >
                                PARTNERSHIP
                            </span>
                            <h3 className="mt-3 text-2xl tablet:text-[32px] leading-tight laptop:max-w-[456px]">
                                Redefining Robotics{' '}
                            </h3>
                            <div className="mt-6 laptop:mt-10">
                                <h4 className="text-xl tablet:text-2xl">Benefits</h4>
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
                            <div className="mt-6 laptop:mt-10">
                                <h4 className="text-xl tablet:text-2xl">In Summary</h4>
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
                        <div className="w-full tablet:w-[330px] laptop:w-[456px] rounded-[20px] overflow-hidden shrink-0">
                            <Image src={Content2Img} alt="ISD Content Image 1" />
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
