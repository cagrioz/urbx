import Container from '@/components/Container';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ImageWithGrid, { ImageWithGridProps } from '@/components/news/ImageWithGrid/ImageWithGrid.component';
import QuoteComment, { QuoteCommentProps } from '@/components/news/QuoteComment/QuoteComment.component';
import Seperator from '@/components/Separator/Separator.component';
import { ibm_mono } from '@/styles/fonts';
import { MediaContent } from '@/types';
import Image from 'next/image';

export interface SinglePostPageProps {
    label: string;
    title: string;
    media: MediaContent;
    imageWithGridContent: ImageWithGridProps;
    quoteCommentContent?: QuoteCommentProps;
    imageWithGridAfterContent?: ImageWithGridProps;
}

export default function SinglePostPage({
    label,
    title,
    media,
    imageWithGridContent,
    quoteCommentContent,
    imageWithGridAfterContent,
}: SinglePostPageProps) {
    const { videoSrc, image } = media;

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
                            {label}
                        </span>
                        <h1
                            className="font-light text-white text-3xl laptop:text-[40px] laptop:leading-none laptop:max-w-[560px] mt-3 tracking-tight"
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        ></h1>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        {videoSrc ? (
                            <video
                                className="w-full h-auto max-w-full max-h-full rounded-lg"
                                muted
                                autoPlay
                                playsInline
                                loop
                            >
                                <source src={videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            image && <Image src={image} alt={title} width={1120} height={700} />
                        )}
                    </div>
                </Container>
            </section>
            <ImageWithGrid {...imageWithGridContent} />
            {quoteCommentContent && <QuoteComment {...quoteCommentContent} />}
            {imageWithGridAfterContent && <ImageWithGrid {...imageWithGridAfterContent} />}
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
