import Navigation from '@/components/Navigation';
import { ibm_mono } from '@/styles/fonts';
import Container from '@/components/Container';

import Content1Img from '../../../../public/news/demo/content_1.jpg';

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
                            September 2024 <span className="font-semibold">DEMO</span> Latest Innovations and Insights&nbsp;
                        </h1>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <video
                            className="w-full h-auto max-w-full max-h-full rounded-lg"
                            muted
                            autoPlay
                            playsInline
                            loop
                        >
                            <source src="/news/demo/featured.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
                                DEMO
                            </span>
                            <h3 className="mt-3 text-2xl tablet:text-[32px] leading-tight laptop:max-w-[456px]">
                                URBX&apos;s Inaugural DEMO Reveals Exciting New Features and Capabilities&nbsp;
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
                                    highlighting the company&apos;s commitment to delivering a revolutionary system
                                    designed to enhance efficiency and transform warehouse operations.
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
                                    efficient picking operations. The DEMO effectively showcased the system&apos;s
                                    capability to store and retrieve numerous totes within a multi-level racking system
                                    at high speeds, all through a fully automated process. This event marked a
                                    significant milestone, highlighting the advancements of the URBX system to a select
                                    group of attendees and underscoring the notable progress and growth achieved by
                                    URBX.
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
                                &quot;At ISD, we&apos;ve always been at the forefront of warehouse automation. The URBX
                                system aligns perfectly with our mission to provide our clients with the most efficient
                                and innovative solutions. This technology&apos;s ability to complete 50-line orders in
                                under 3 minutes is not just impressive – it&apos;s revolutionary.&quot;
                            </blockquote>
                            <div className="flex items-center justify-between mt-11">
                                <div className="flex items-center gap-5">
                                    <div className="w-11 h-11 rounded-[10px] overflow-hidden">
                                        <Image src={ISDCommentAvatar} alt="ISD Comment Avatar" />
                                    </div>
                                    <div>
                                        <p className="text-xl">Tony Margot</p>
                                        <span className="text-base text-standard-4"> VP of Sales, ISD</span>
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
                                Importance
                            </span>
                            <h3 className="mt-3 text-2xl tablet:text-[32px] leading-tight laptop:max-w-[456px]">
                                Redefining Robotics&nbsp;
                            </h3>
                            <div className="mt-6 laptop:mt-10">
                                <h4 className="text-xl tablet:text-2xl">Benefits</h4>
                                <p className="text-standard-4 mt-3">
                                    The recent DEMO represented a significant milestone for URBX, setting the stage for new industry standards in automated storage and retrieval solutions. This demonstration not only showcased the system&apos;s high-performance capabilities but also highlighted the unique features that distinguish URBX&apos;s solutions in the marketplace. The TowerBot demonstrated its efficiency by providing instant access to totes within a multi-level racking system, thereby eliminating the need for manual retrieval and digging. Meanwhile, the GridBot proved its ability to store and deliver goods with precision to designated locations, such as future pick stations. The success of this DEMO is pivotal for URBX, as it underscores the substantial benefits that the system brings to current warehouse operations. It reinforces the potential of URBX’s large-scale automated storage and retrieval systems to excel in high-density and high-throughput applications.
                                </p>
                            </div>
                            <div className="mt-6 laptop:mt-10">
                                <h4 className="text-xl tablet:text-2xl">Key Takeaways</h4>
                                <p className="text-standard-4 mt-3">
                                    URBX successfully showcased its advanced robotic technology to a select group of attendees. This demonstration marks a significant milestone, setting the stage for future innovations. The event highlighted the unique advantages of URBX’s dual-grid system, including its considerable scalability, high-density storage capabilities, and efficient, reliable tote storage and retrieval for high-throughput applications.
                                </p>
                            </div>
                        </div>
                        <div className="w-full tablet:w-[330px] laptop:w-[456px] rounded-[20px] overflow-hidden shrink-0">
                            <video
                                className="w-full h-auto max-w-full max-h-full rounded-lg"
                                muted
                                autoPlay
                                playsInline
                                loop
                            >
                                <source src="/news/demo/content_2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </Container>
            </section>
            <Seperator />
            <CTA
                title={
                    <>
                        Get ready bring Urbx to <br />
                        <span className="font-semibold">your Warehouse</span>&nbsp;
                    </>
                }
                ctaVariant="dark"
                cta={{ href: '/contact-us', text: 'Contact Us' }}
            />
            <Footer />
        </>
    );
}
