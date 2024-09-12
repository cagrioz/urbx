'use client';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import UrbxHero from '@/assets/hero_bg.jpg';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import VideoPreviewImg from '@/assets/video_preview.png';
import AngleRightIcon from '@/assets/angle_right.png';
import Modal from '@/components/Modal';

export default function Hero() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className="relative flex flex-col min-h-[650px] laptop:min-h-[800px] pb-20 h-lvh">
            <Navigation />
            <Container className="relative z-10 w-full grow flex flex-col justify-between">
                <div className="mt-20">
                    <p className="text-standard-4 text-sm font-medium uppercase" style={ibm_mono.style}>
                        Urbx - The Vertical Revolution
                    </p>
                    <h1 className="mt-4 text-white text-[40px] leading-tight max-w-[547px]">
                        <b>Coming Soon:</b> AI-Driven Dual Grid Robotics in 3D Space.
                    </h1>
                </div>
            </Container>
            <Image src={UrbxHero} alt="Urbx Hero" layout="fill" className="z-0 object-cover" />
        </section>
    );
}
