'use client';
import React, { ReactNode, useState } from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';

export interface StandardHeroProps {
    subtitle: string;
    title: ReactNode;
    image: StaticImageData;
}

export default function StandardHero({ title, subtitle, image }: StandardHeroProps): JSX.Element {
    return (
        <section className="bg-black pb-20">
            <div className="pt-5 mb-20">
                <Navigation />
            </div>
            <Container>
                <div className="text-center">
                    <p className="text-standard-4 text-sm font-medium uppercase" style={ibm_mono.style}>
                        {subtitle}
                    </p>
                    <h1 className="mt-3 text-white text-[40px] leading-tight">{title}</h1>
                    <div className="mt-[50px]">
                        <Image src={image} alt="Hero" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
