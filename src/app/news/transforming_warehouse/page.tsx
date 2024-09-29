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
                        <h1 className="font-light text-white text-3xl laptop:text-[40px] laptop:leading-none laptop:max-w-[560px] mt-3 tracking-tight">
                            Reaching New Heights: How URBX is Transforming Warehouse Operations Through Vertical
                            Innovation
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
                                    This week, we invite you to explore a pivotal moment in architectural history: the
                                    invention of the elevator by Elisha Graves Otis. This groundbreaking innovation not
                                    only revolutionized building design but also offers intriguing parallels to the
                                    modern landscape of warehouse operations.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    Prior to Otis’s invention, buildings were limited to a mere five stories,
                                    constraining the potential for vertical expansion in urban environments. Imagine
                                    bustling city streets with modest skylines, where the dream of vertical living
                                    seemed unattainable. The introduction of the elevator empowered architects to
                                    envision towering skyscrapers that pierced the clouds, fundamentally transforming
                                    urban planning dynamics. This newfound ability to ascend allowed cities to maximize
                                    valuable real estate, paving the way for the iconic skylines we admire today.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    As we turn our attention to the present, we recognize a similar challenge in the
                                    warehousing sector. Traditional warehouses typically reach heights of only 40 feet,
                                    a limitation that stifles operational efficiency and inflates real estate costs in
                                    an increasingly competitive market. Just as buildings once struggled to stack high
                                    without proper elevators, modern warehouses face significant obstacles when
                                    attempting to store goods at greater heights. Over-stacking pallets can pose serious
                                    safety risks for employees and lead to time-consuming retrieval processes that
                                    hinder productivity.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    With urban real estate prices on the rise, the need for vertical scalability in
                                    warehousing has never been more urgent. At URBX, we draw inspiration from Otis’s
                                    legacy, striving to transform warehouse operations in much the same way he
                                    transformed architecture. Our advanced robotic systems are engineered to reach
                                    impressive heights of up to 125 feet, enabling the development of taller warehouses
                                    in densely populated areas where space is at a premium.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    URBX envisions a future where vertical space is fully optimized, allowing for
                                    efficient storage and swift, safe retrieval of goods. By embracing vertical
                                    integration, URBX aims to redefine the warehousing landscape, converting
                                    inefficiencies into streamlined operations that enhance overall productivity. Our
                                    innovative solutions focus not only on increasing height but also on optimizing
                                    workflows, reducing operational inefficiencies, and maximizing the utility of every
                                    square foot of your facility.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    Looking ahead, URBX is committed to leading the charge in this new era of
                                    warehousing. We envision a landscape where businesses can leverage vertical
                                    scalability to meet the evolving demands of a rapidly changing market. Join us on
                                    this journey as we reimagine the possibilities of warehouse operations, unlocking
                                    new opportunities for growth and efficiency that benefit all businesses.
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
                                    The URBX system provides a transformative approach to warehouse operations through
                                    its advanced vertical integration capabilities, significantly enhancing storage
                                    efficiency and operational throughput. By enabling warehouses to reach heights of up
                                    to 125 feet, URBX maximizes vertical space that is often overlooked in traditional
                                    designs. This increased height allows businesses to store a greater volume of goods
                                    within a smaller footprint, effectively optimizing the utilization of available real
                                    estate.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    In addition to maximizing storage capacity, the URBX system enhances operational
                                    throughput by facilitating rapid retrieval of stored items. With its dual-grid
                                    AI-driven technology, the system ensures that inventory can be accessed quickly and
                                    efficiently, reducing wait times and improving order fulfillment rates. This
                                    efficiency not only streamlines material handling processes but also minimizes labor
                                    costs associated with manual retrieval methods.
                                </p>
                                <p className="text-standard-4 mt-3">
                                    The remarkable scalability of the URBX system allows it to seamlessly integrate into
                                    virtually any existing warehouse configuration, fully optimizing facility
                                    footprints. By maximizing vertical space and enhancing storage capacity, the URBX
                                    system ensures that warehouses utilize the full capability of their facility's
                                    footprint. This flexibility not only makes efficient use of available resources but
                                    also allows businesses to adapt to changing demands and operational needs. As a
                                    result, companies can achieve significant improvements in both efficiency and
                                    productivity.
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
