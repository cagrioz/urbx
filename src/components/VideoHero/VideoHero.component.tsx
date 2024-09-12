'use client';
import React, { ReactNode, useState } from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';

import HeroVideo from '@/assets/home_hero.mp4';

export interface VideoHeroProps {
    video: string;
    subtitle: string;
    title: ReactNode;
    description?: string;
}

export default function VideoHero({ video, subtitle, title, description }: VideoHeroProps): JSX.Element {
    return (
        <section className="relative flex flex-col justify-between min-h-[650px] laptop:min-h-[800px] pb-[100px] h-lvh">
            <video autoPlay muted loop playsInline className="absolute z-0 object-cover w-full h-full">
                <source src={video} type="video/mp4" />
            </video>
            <div className="bg-black opacity-40 absolute inset-0"></div>
            <div className="pt-5">
                <Navigation />
            </div>
            <Container className="z-50">
                <p className="text-standard-4 text-sm font-medium uppercase" style={ibm_mono.style}>
                    {subtitle}
                </p>
                <h1 className="mt-4 text-white text-[40px] leading-tight max-w-[510px]">{title}</h1>
                {description && (
                    <p className="max-w-[550px] text-white font-normal font-general-sans mt-6">{description}</p>
                )}
            </Container>
        </section>
    );
}
