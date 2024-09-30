import Navigation from '@/components/Navigation';
import { ibm_mono } from '@/styles/fonts';
import Container from '@/components/Container';

import CoverImg from '../../../../public/news/transforming_warehouse/skyhigh.png';
import Content1Img from '../../../../public/news/transforming_warehouse/skyhigh.png';

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
                        <h1 className="font-light text-white text-3xl laptop:text-[40px] laptop:leading-none mt-3 tracking-tight">
                            Elevating Fulfillment: URBX Draws Inspiration from Otis to Revolutionize Warehousing
                        </h1>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <Image src={CoverImg} alt="Cover" />
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
                                Industry insight
                            </span>
                            <h3 className="mt-3 text-2xl tablet:text-[32px] leading-tight laptop:max-w-[456px]">
                                Industry Insight and URBX Innovation{' '}
                            </h3>
                            <div className="mt-6 laptop:mt-10">
                                <p className="text-standard-4 mt-3">
                                    This week, we dive into a defining moment in architectural history: Elisha Graves Otis’s game-changing invention of the elevator. It didn’t just change how we build—it reimagined what was possible, and we see the same revolution happening today in warehouses.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    Before Otis’s innovation, buildings were capped at five stories, limiting the vertical growth of cities. Picture city streets with modest skylines, where the thought of towering skyscrapers was nothing but a distant dream. Otis’s elevator changed that forever. It allowed architects to reach for the sky, creating the iconic skylines we know today, and making vertical living a reality.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    Fast forward to the present, and warehouses are facing a similar hurdle. Traditional warehouse heights cap out at around 40 feet, putting a ceiling on efficiency and driving up real estate costs in a world where space is scarce. Like buildings before elevators, warehouses struggle to rise higher without the right technology. Over-stacking leads to safety risks and slows down the entire operation.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    As property costs soar in urban areas, the need to scale vertically in warehousing has never been more urgent. That’s where URBX steps in. Taking a page from Otis’s playbook, we’re rethinking warehouse design with robotic systems that reach up to 125 feet, enabling taller, smarter warehouses in the tightest spaces.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    URBX envisions a future where vertical space isn’t wasted. We’re building systems that make storage efficient and retrieval fast and safe. By embracing vertical integration, we’re streamlining operations, cutting inefficiencies, and making every square foot of your facility work harder.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    Looking ahead, URBX is leading the charge in this next era of warehousing. We see a future where businesses tap into the power of vertical scalability, ready to meet the demands of a fast-moving market. Join us as we reimagine what’s possible in warehouse operations, and unlock new heights of growth and efficiency.
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
                                <source src="/news/demo/featured2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>{' '}
                        </div>
                    </div>
                </Container>
            </section>
            <section className="pt-10">
                <Container>
                    <div className="flex flex-col tablet:flex-row gap-8 desktop:gap-[120px] justify-between items-center">
                        <div>
                            <div className="mt-6 laptop:mt-10">
                                <h4 className="text-xl tablet:text-2xl"> Benefits of Vertical Integration</h4>
                                <p className="text-standard-4 mt-3">
                                    URBX transforms how warehouses operate by harnessing the full potential of vertical integration, pushing the limits of storage efficiency and performance. Imagine warehouses that don’t just take up space but rise—up to 125 feet high—making every inch count. This vertical approach allows you to store more in a smaller footprint, making the most of real estate and unlocking valuable storage potential often left untapped.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    But it’s not just about space. With URBX’s smart dual-grid technology, retrieving items becomes lightning fast and incredibly efficient. Think of it as on-demand access to your inventory, drastically cutting down wait times and supercharging fulfillment speed. This streamlined approach not only reduces reliance on manual labor but also drives down costs, all while improving throughput.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    URBX's system seamlessly integrates into any warehouse setup, adapting to your unique space and needs. By expanding upward rather than outward, you're not just increasing storage—you're amplifying your operational flexibility. With URBX, you’re equipped to scale effortlessly, meet new demands, and enhance productivity—all within the same footprint.
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
                                <source src="/news/demo/featurednews.mp4" type="video/mp4" />
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
