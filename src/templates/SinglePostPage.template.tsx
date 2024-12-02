import Container from '@/components/Container';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ImageWithGrid, { ImageWithGridProps } from '@/components/news/ImageWithGrid/ImageWithGrid.component';
import QuoteComment, { QuoteCommentProps } from '@/components/news/QuoteComment/QuoteComment.component';
import Seperator from '@/components/Separator/Separator.component';
import { ibm_mono } from '@/styles/fonts';
import { MediaContent } from '@/types';
import Image, { StaticImageData } from 'next/image';

export interface SinglePostPageProps {
    label: string;
    title: string;
    media: MediaContent;
    intro?: {
        label: string;
        title: string;
        description: string;
    };
    outro?: {
        title: string;
        description: string;
        image: StaticImageData | string;
    };
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
    intro,
    outro,
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
                            className="font-light text-white text-3xl laptop:text-[40px] laptop:leading-none laptop:max-w-[760px] mt-3 tracking-tight"
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
            {intro && (
                <Container>
                    <div className="mt-8 tablet:mt-12 laptop:mt-16">
                        <span
                            className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                            style={ibm_mono.style}
                        >
                            {intro.label}
                        </span>
                        <h2 className="font-light text-white text-3xl laptop:text-[40px] laptop:leading-[52px] mt-3 tracking-tight">
                            {intro.title}
                        </h2>
                        <p className="text-standard-4 mt-3">{intro.description}</p>
                    </div>
                </Container>
            )}
            <ImageWithGrid {...imageWithGridContent} />
            {quoteCommentContent && <QuoteComment {...quoteCommentContent} />}
            {imageWithGridAfterContent && <ImageWithGrid {...imageWithGridAfterContent} />}
            {outro && (
                <Container>
                    <div className="mt-8 tablet:mt-12 laptop:mt-16">
                        <h2 className="font-light text-white text-3xl laptop:text-[40px] laptop:leading-[52px] mt-3 tracking-tight">
                            {outro.title}
                        </h2>
                        <p className="text-standard-4 mt-3">{outro.description}</p>
                        <div className="mx-auto w-full h-auto mt-[60px]">
                            <Image src={outro.image} alt={title} width={1120} height={700} />
                        </div>
                    </div>
                </Container>
            )}
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
