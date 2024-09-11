'use client';
import React, { ReactNode } from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';

type BenefitDetail = {
    image: StaticImageData;
    title: string;
};

export interface BenefitShowcaseProps {
    subtitle: string;
    title: ReactNode;
    image: StaticImageData;
    description: string;
    benefit: BenefitDetail;
}

function BenefitShowcase({ subtitle, title, image, description, benefit }: BenefitShowcaseProps) {
    return (
        <section className="bg-black pb-[60px] laptop:pb-[120px]">
            <Container>
                <p
                    className="text-standard-4 text-sm font-medium uppercase text-center tracking-widest"
                    style={ibm_mono.style}
                >
                    {subtitle}
                </p>
                <p className="mt-10 text-white text-[32px] leading-10 max-w-[886px] text-center mx-auto tracking-[-0.5px] font-light">
                    {title}
                </p>
                <div className="mx-auto w-full h-auto mt-[60px]">
                    <Image src={image} alt={subtitle} />
                </div>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 laptop:gap-20 desktop:gap-[120px]">
                    <div className="flex gap-6">
                        <div className="laptop:w-[72px] laptop:h-[72px] w-16 h-16">
                            <Image src={benefit.image} alt={benefit.title} />
                        </div>
                        <div className="text-lg laptop:text-2xl text-white font-general-sans whitespace-pre-line">
                            {benefit.title}
                        </div>
                    </div>
                    <div>
                        <p className="text-base text-white">{description}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default BenefitShowcase;
