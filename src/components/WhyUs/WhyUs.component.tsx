'use client';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';

import UrbxSystem from '@/assets/urbx_system.mp4';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function WhyUs() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;

        if (!video || !section) return;

        video.playbackRate = 1; // Set video playback rate to 3x speed

        const handleVisibilityChange = () => {
            if (document.hidden) {
                video.pause();
            } else {
                video.play().catch((error) => console.log('Video play error:', error));
            }
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play().catch((error) => console.log('Video play error:', error));
                } else {
                    video.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });

        observer.observe(section);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            observer.disconnect();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-black py-20">
            <Container>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-2 text-white">
                    <div>
                        <p className="text-standard-4 text-sm font-medium uppercase" style={ibm_mono.style}>
                            The URbx System
                        </p>
                        <h2 className="text-[32px] leading-10 max-w-[434px] mt-5">
                            Intelligent robotics powers <b>omni - channel</b> fulfillment
                        </h2>
                    </div>
                    <p className="text-base font-light">
                        Urbx offers a fully automated system, incorporating multiple TowerBots and a conveyor to
                        transport products to specific pick stations for order consolidation. This automation minimizes
                        human errors, enhancing overall efficiency and quality. With the industry&apos;s fastest item
                        retrieval times, the Urbx system is unmatched in performance.
                    </p>
                </div>
                <div className="relative mt-10 rounded-[20px] overflow-hidden">
                    <video
                        ref={videoRef}
                        className="w-full h-auto max-w-full max-h-full rounded-lg"
                        muted
                        playsInline
                        autoPlay
                        loop
                    >
                        <source src={UrbxSystem} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Container>
        </section>
    );
}
