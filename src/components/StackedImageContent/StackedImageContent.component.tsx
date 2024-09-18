'use client';
import React, { ReactNode } from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';

type StackedImageContentProps = {
    subtitle: string;
    description: ReactNode;
} & ({ image: StaticImageData; video?: never } | { video: string; image?: never });

function StackedImageContent({ subtitle, description, image, video }: StackedImageContentProps) {
    return (
        <section>
            <Container>
                <p
                    className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase text-center tracking-widest"
                    style={ibm_mono.style}
                >
                    {subtitle}
                </p>
                <p className="mt-10 text-white text-2xl laptop:text-[32px] laptop:leading-10 max-w-[886px] text-center mx-auto tracking-[-0.5px] font-light">
                    {description}
                </p>
                <div className="mx-auto w-full h-auto mt-[60px]">
                    {image ? (
                        <Image src={image} alt={subtitle} />
                    ) : (
                        <video className="w-full h-auto" autoPlay playsInline loop muted>
                            <source src={video as string} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </Container>
        </section>
    );
}

export default StackedImageContent;
