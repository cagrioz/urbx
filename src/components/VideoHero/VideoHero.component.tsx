'use client';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import UrbxHero from '@/assets/hero_bg.jpg';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';

import FullFillmentVideo from '@/assets/fullfillment.mp4'; // Adjust this path based on your project structure

export default function VideoHero() {
    return (
        <section className="relative flex flex-col justify-between min-h-[650px] laptop:min-h-[800px] pb-[100px] h-lvh">
            {/* put mp4 in backgroubd */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute z-0 object-cover w-full h-full"
                src={FullFillmentVideo}
            ></video>
            <div className="bg-black opacity-20 absolute inset-0"></div>
            <div className="pt-5">
                <Navigation />
            </div>
            <Container className="z-50">
                <p className="text-standard-4 text-sm font-medium uppercase" style={ibm_mono.style}>
                    Fulfillment Solution
                </p>
                <h1 className="mt-4 text-white text-[40px] leading-tight max-w-[510px]">
                    AI-Driven Dual Grid Robotics in <b>3D Space.</b>
                </h1>
                <p className="max-w-[550px] text-white font-normal font-general-sans mt-6">
                    Discover the power of our advanced robotic systems designed to optimize and revolutionize your
                    fulfillment operations.
                </p>
            </Container>
        </section>
    );
}
