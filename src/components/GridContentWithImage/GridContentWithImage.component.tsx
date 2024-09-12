'use client';
import React from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';

export type GridContentWithImageProps = {
    title: string;
    superTitle: string;
    description: string;
} & ({ image: StaticImageData; video?: never } | { video: string; image?: never });

function GridContentWithImage({ title, superTitle, description, image, video }: GridContentWithImageProps) {
    return (
        <section>
            <Container>
                <div className="flex flex-col tablet:flex-row justify-between gap-6">
                    <h3 className="text-white text-[40px] leading-[52px] relative inline-block tablet:mb-[60px] w-fit">
                        {title}
                        <span className="text-standard-4 text-sm absolute -top-2 -right-6 pl-3" style={ibm_mono.style}>
                            {superTitle}
                        </span>
                    </h3>
                    <p className="text-white text-base max-w-[648px] whitespace-pre-line">{description}</p>
                </div>
                <div className="mt-10">
                    {image ? (
                        <Image src={image} alt={title} />
                    ) : (
                        <video className="w-full h-auto" autoPlay loop muted>
                            <source src={video as string} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </Container>
        </section>
    );
}

export default GridContentWithImage;
