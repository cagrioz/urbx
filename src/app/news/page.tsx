import fs from 'fs';
import path from 'path';
import CTA from '@/components/CTA';
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';
import { ibm_mono } from '@/styles/fonts';
import { Post } from '@/types';
import Footer from '@/components/Footer';
import GridPost from '@/components/news/GridPost';
import FeaturedPost from '@/components/news/FeaturedPost';
import { featuredPostContent, getAllPosts } from '@/posts';

export default function PostsPage() {
    // Sort posts by date (newest first)
    const sortedPosts = getAllPosts().sort(
        (a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

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
                    <div className="mb-10 laptop:mb-[60px] grid grid-cols-1">
                        <FeaturedPost {...featuredPostContent} />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {sortedPosts.map((post) => (
                            <GridPost
                                key={post.title}
                                title={post.title}
                                description={
                                    post.imageWithGridContent.content.toString() +
                                    post?.quoteCommentContent?.comment.toString() +
                                    post?.imageWithGridAfterContent?.content.toString()
                                }
                                image={post.cover}
                                slug={post.slug}
                            />
                        ))}
                    </div>
                </Container>
            </section>
            <CTA
                title={
                    <>
                        Want to become a <br />
                        <span className="font-semibold">Partner?</span>
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
