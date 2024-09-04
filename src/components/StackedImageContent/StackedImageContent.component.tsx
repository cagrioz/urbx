'use client';
import React, { ReactNode } from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';

export interface StackedImageContentProps {
    subtitle: string;
    description: ReactNode;
    image: StaticImageData;
}

function StackedImageContent({ subtitle, description, image }: StackedImageContentProps) {
    return (
        <section className="bg-black">
            <Container>
                <p
                    className="text-standard-4 text-sm font-medium uppercase text-center tracking-widest"
                    style={ibm_mono.style}
                >
                    {subtitle}
                </p>
                <p className="mt-10 text-white text-[32px] leading-10 max-w-[886px] text-center mx-auto tracking-[-0.5px] font-light">
                    {description}
                </p>
                <div className="mx-auto w-full h-auto mt-[60px]">
                    <Image src={image} alt={subtitle} />
                </div>
            </Container>
        </section>
    );
}

export default StackedImageContent;
