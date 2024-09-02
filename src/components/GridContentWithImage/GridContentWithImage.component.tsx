'use client';
import React from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';

export interface GridContentWithImageProps {
    title: string;
    superTitle: string;
    description: string;
    image: StaticImageData;
}

function GridContentWithImage({ title, superTitle, description, image }: GridContentWithImageProps) {
    return (
        <section>
            <Container>
                <div className="flex justify-between gap-6">
                    <h3 className="text-white text-[40px] leading-[52px] relative inline-block mb-[60px]">
                        {title}
                        <span className="text-standard-4 text-sm absolute top-0 left-full pl-3" style={ibm_mono.style}>
                            {superTitle}
                        </span>
                    </h3>
                    <p className="text-white text-base max-w-[648px] whitespace-pre-line">{description}</p>
                </div>
                <div className="mt-10">
                    <Image src={image} alt={title} />
                </div>
            </Container>
        </section>
    );
}

export default GridContentWithImage;
