import Image from 'next/image';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import { MediaContent } from '@/types';

export type ImageWithGridProps = MediaContent & {
    label?: string;
    title: string | JSX.Element;
    content: string | JSX.Element;
    mediaAlt?: string;
};

export default function ImageWithGridProps({
    label,
    title,
    content,
    image,
    videoSrc,
    mediaAlt = 'Section media',
}: ImageWithGridProps) {
    return (
        <section className="py-10 laptop:py-20">
            <Container>
                <div className="flex flex-col tablet:flex-row gap-8 desktop:gap-[120px] justify-between items-center">
                    <div>
                        {label && (
                            <span
                                className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                                style={ibm_mono.style}
                            >
                                {label}
                            </span>
                        )}
                        <h3 className="mt-3 text-2xl tablet:text-[32px] leading-tight laptop:max-w-[456px]">{title}</h3>
                        <div
                            className="text-standard-4 mt-3 blog-content"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>
                    <div className="w-full relative tablet:w-[330px] laptop:w-[456px] rounded-[20px] overflow-hidden shrink-0">
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
                            image && <Image src={image} alt={mediaAlt} width={500} height={500} />
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
