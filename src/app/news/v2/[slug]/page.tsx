import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { ibm_mono } from '@/styles/fonts';
import Container from '@/components/Container';
import Seperator from '@/components/Separator/Separator.component';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import Content1Img from '../../../../../public/news/demo/content_1.jpg';

import ISDCommentCover from '@/assets/isd_comment_cover.jpg';
import ISDCommentAvatar from '@/assets/isd_comment_avatar.jpg';
import ISDCommentLogo from '@/assets/isd_comment_logo.png';
import ImageGridContent from '@/components/news/ImageGridContent';
import QuoteComment from '@/components/news/QuoteComment';

export default async function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // Load posts metadata from the JSON file
    const postsFilePath = path.join(process.cwd(), 'src', 'posts.json');
    const postsObj = JSON.parse(fs.readFileSync(postsFilePath, 'utf-8'));

    const allPost = [...postsObj.posts, postsObj.featured];

    // Find the post that matches the slug
    const post = allPost.find((post: { slug: string }) => post.slug === slug);

    // If the post doesn't exist, return 404
    if (!post) {
        return notFound();
    }

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
                            September 2024 <span className="font-semibold">DEMO</span> Latest Innovations and
                            Insights&nbsp;
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
            <ImageGridContent
                label="DEMO"
                title="URBX's Inaugural DEMO Reveals Exciting New Features and Capabilities"
                image={Content1Img.src}
                content={`
                        <div>
                            <h4>About the DEMO</h4>
                            <p>
                                In September 2024, URBX hosted its inaugural DEMO, presenting the latest advancements in
                                robotic technology. This event showcased the unique features and benefits of their
                                innovations within the automated warehouse sector. Over 30 attendees received an
                                exclusive look at URBX’s groundbreaking technology, including the new GridBot, TowerBot,
                                and conveyor system, demonstrated within a compact 10-foot racking system. This DEMO
                                represents a significant milestone for URBX, highlighting the company&apos;s commitment
                                to delivering a revolutionary system designed to enhance efficiency and transform
                                warehouse operations.
                            </p>
                        </div>
                        <div>
                            <h4>Key Components</h4>
                            <p>
                                The DEMO featured an advanced system incorporating the latest GridBot, two TowerBots,
                                and a conveyor system, all engineered for optimal performance. The system demonstrated
                                at the event was designed for efficient operation with two TowerBots and one GridBot. On
                                the left side of the setup, a conveyor mechanism was utilized, where one TowerBot
                                retrieved multiple totes from storage and transported them to the conveyor system for
                                further processing. On the right side, the racking system included a GridBot interacting
                                with a separate TowerBot. In this configuration, the TowerBot collected multiple totes
                                from storage and delivered them to a designated buffer zone. From there, the GridBot
                                handled the totes, ensuring precise and efficient picking operations. The DEMO
                                effectively showcased the system&apos;s capability to store and retrieve numerous totes
                                within a multi-level racking system at high speeds, all through a fully automated
                                process. This event marked a significant milestone, highlighting the advancements of the
                                URBX system to a select group of attendees and underscoring the notable progress and
                                growth achieved by URBX.
                            </p>
                        </div>
                    `}
            />
            <QuoteComment
                comment="At ISD, we've always been at the forefront of warehouse automation. The URBX system aligns perfectly with our mission to provide our clients with the most efficient and innovative solutions. This technology's ability to complete 50-line orders in under 3 minutes is not just impressive – it's revolutionary."
                authorName="Tony Margot"
                authorRole="VP of Sales, ISD"
                image={ISDCommentCover.src}
                companyLogo={ISDCommentLogo.src}
            />
            <ImageGridContent
                label="Importance"
                title="Redefining Robotics"
                videoSrc="/news/demo/content_2.mp4"
                content={`
                        <div>
                            <h4>Benefits</h4>
                            <p>
                                    The recent DEMO represented a significant milestone for URBX, setting the stage for
                                    new industry standards in automated storage and retrieval solutions. This
                                    demonstration not only showcased the system's high-performance capabilities but
                                    also highlighted the unique features that distinguish URBX's solutions in the
                                    marketplace. The TowerBot demonstrated its efficiency by providing instant access to
                                    totes within a multi-level racking system, thereby eliminating the need for manual
                                    retrieval and digging. Meanwhile, the GridBot proved its ability to store and
                                    deliver goods with precision to designated locations, such as future pick stations.
                                    The success of this DEMO is pivotal for URBX, as it underscores the substantial
                                    benefits that the system brings to current warehouse operations. It reinforces the
                                    potential of URBX's large-scale automated storage and retrieval systems to excel in
                                    high-density and high-throughput applications.
                            </p>
                        </div>
                        <div>
                            <h4>Key Takeaways</h4>
                            <p>
                                URBX successfully showcased its advanced robotic technology to a select group of attendees. This demonstration marks a significant milestone, setting the stage for future innovations. The event highlighted the unique advantages of URBX’s dual-grid system, including its considerable scalability, high-density storage capabilities, and efficient, reliable tote storage and retrieval for high-throughput applications.
                            </p>
                        </div>
                    `}
            />
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
