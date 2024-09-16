'use client';
import React, { ReactNode } from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';

export interface StackedImageContentBProps {
    title: string;
    description: ReactNode;
    image: StaticImageData;
}

function StackedImageContentB({ title, description, image }: StackedImageContentBProps) {
    return (
        <section>
            <Container>
                <h3 className="text-white text-[40px] leading-tight text-center">{title}</h3>
                <p className="mt-4 text-white text-base max-w-[644px] text-center mx-auto">{description}</p>
                <div className="mx-auto w-full h-auto mt-[60px]">
                    <Image src={image} alt={title} />
                </div>
            </Container>
        </section>
    );
}

export default StackedImageContentB;
