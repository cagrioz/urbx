'use client';
import React, { useEffect, useRef } from 'react';
import TowerSectionVideo from '@/assets/sectionvideo.mp4'; // Adjust this path based on your project structure
import Container from '../Container';
import { ibm_mono } from '@/styles/fonts';

const Overview: React.FC = () => {
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
        <section ref={sectionRef} className="relative flex flex-col -mt-1 pt-[80px]">
            <Container className="text-center pb-20">
                <h3 className="text-white text-2xl laptop:text-[32px] laptop:leading-10 max-w-[680px] mx-auto">
                    Our fully automated system leverages advanced robotics to <b>optimize efficiency, accuracy,</b> and
                    <b> speed,</b> ensuring your business stays ahead of the competition.
                </h3>
            </Container>
            <div className="w-full h-full desktop:h-[772px] flex items-center justify-center bg-[#000000]">
                <video ref={videoRef} className="w-full h-auto max-w-full max-h-full rounded-lg" muted playsInline loop>
                    <source src={TowerSectionVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default Overview;
