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

// Uncommented code for server-side rendering (SSR)
export async function getStaticProps() {
    // Simulate fetching current post
    const currentPost = 'test3';

    // Dynamically fetch all other content files from a specific directory
    // Note: Ensure you're fetching data correctly from 'src/contents/news'
    const contentDir = path.join(process.cwd(), 'src', 'contents', 'news');
    const contentFiles = await fs.readdir(contentDir);

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

    return {
        props: { posts }, // Pass the fetched posts as props to the component
    };
}

export default function Partners({ posts }) {
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
                            Latest URBX News
                        </span>
                        <h1 className="font-light text-white text-3xl laptop:text-[40px] laptop:leading-none laptop:max-w-[560px] mt-3 tracking-tight">
                            September 2024 <span className="font-semibold">DEMO</span> Latest Innovations and Insights{' '}
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
                                PARTNERSHIP
                            </span>
                            <h3 className="mt-3 text-2xl tablet:text-[32px] leading-tight laptop:max-w-[456px]">
                                URBX&apos;s Inaugural DEMO Reveals Exciting New Features and Capabilities{' '}
                            </h3>
                            <div className="mt-6 laptop:mt-10">
                                <h4 className="text-xl tablet:text-2xl">About the DEMO</h4>
                                <p className="text-standard-4 mt-3">
                                    In September 2024, URBX hosted its inaugural DEMO, presenting the latest
                                    advancements in robotic technology. This event showcased the unique features and
                                    benefits of their innovations within the automated warehouse sector. Over 30
                                    attendees received an exclusive look at URBX’s groundbreaking technology, including
                                    the new GridBot, TowerBot, and conveyor system, demonstrated within a compact
                                    15-foot system. This DEMO represents a significant milestone for URBX,
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
            {/* Additional sections for content */}
            <Seperator />
            <CTA
                title={
                    <>
                        Get ready to bring Urbx to <br />
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
