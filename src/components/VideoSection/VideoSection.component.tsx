'use client';
import React, { useEffect, useRef } from 'react';
import TowerVideo from '@/assets/towerbot.mp4'; // Adjust this path based on your project structure
import Container from '../Container';
import { ibm_mono } from '@/styles/fonts';

const VideoSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;

        if (!video || !section) return;

        video.playbackRate = 3; // Set video playback rate to 3x speed

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
        <section ref={sectionRef} className="relative flex flex-col bg-black">
            <Container className="text-center pb-[65px]">
                <p className="text-standard-4 text-sm font-medium uppercase tracking-widest" style={ibm_mono.style}>
                    Welcome to Urbx
                </p>
                <h3 className="text-white text-[32px] leading-10 max-w-[680px] mt-10">
                    Experience the future of <b>omni-channel fulfillment</b> with Urbx, the cutting-edge solution
                    designed to revolutionize your logistics and supply chain operations.
                </h3>
            </Container>
            <div className="w-full h-[772px] flex items-center justify-center bg-[#2a2a2a]">
                <video ref={videoRef} className="w-full h-auto max-w-full max-h-full rounded-lg" muted playsInline>
                    <source src={TowerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default VideoSection;
