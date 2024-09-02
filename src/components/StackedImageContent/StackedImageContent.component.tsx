'use client';
import React from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import CubeImage from '@/assets/cube.png';
import Image from 'next/image';

function StackedImageContent() {
    return (
        <section className="bg-black py-[120px]">
            <Container>
                <p
                    className="text-standard-4 text-sm font-medium uppercase text-center tracking-widest"
                    style={ibm_mono.style}
                >
                    Efficient and Intelligent 3D Storage Solutions{' '}
                </p>
                <h3 className="mt-10 text-white text-[32px] leading-10 max-w-[886px] text-center mx-auto tracking-[-0.5px] font-light">
                    Our robotics solutions are designed to maximize storage efficiency using{' '}
                    <span className="font-bold">advanced 3D storage technology.</span> By utilizing vertical and
                    horizontal space, our systems enable high-density storage and rapid retrieval of items, ensuring
                    optimal use of your facility&apos;s footprint. This innovative approach to storage allows for{' '}
                    <span className="font-bold">seamless integration</span> with existing infrastructure, providing a{' '}
                    <span className="font-bold">scalable and adaptable solution</span> to meet the evolving demands of
                    modern fulfillment centers.
                </h3>
                <div className="mx-auto h-[390px] w-[342px] mt-[60px]">
                    <Image src={CubeImage} alt="Cube" />
                </div>
            </Container>
        </section>
    );
}

export default StackedImageContent;
