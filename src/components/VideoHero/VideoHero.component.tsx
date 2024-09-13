'use client';
import React, { ReactNode, useState } from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
export interface VideoHeroProps {
    video: any;
    subtitle: string;
    title: ReactNode;
    description?: string;
}

export default function VideoHero({ video, subtitle, title, description }: VideoHeroProps): JSX.Element {
    return (
        <section className="relative flex flex-col justify-between min-h-[650px] laptop:min-h-[800px] pb-[100px] h-lvh">
            <video autoPlay muted loop playsInline className="absolute z-0 object-cover w-full h-full">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="bg-black opacity-40 absolute inset-0"></div>
            <Navigation />
            <Container className="z-50">
                <p
                    className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                    style={ibm_mono.style}
                >
                    {subtitle}
                </p>
                <h1 className="mt-4 text-white text-3xl tablet:text-[40px] leading-tight max-w-[510px]">{title}</h1>
                {description && (
                    <p className="max-w-[550px] text-white font-normal font-general-sans mt-6">{description}</p>
                )}
            </Container>
        </section>
    );
}
