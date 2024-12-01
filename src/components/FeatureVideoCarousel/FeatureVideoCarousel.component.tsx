'use client';
import React, { ReactNode, useState, useRef, useEffect } from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import classNames from 'classnames';

export interface FeatureVideoCarouselProps {
    title: string;
    markerText: string;
    description: string | ReactNode;
    videos: string[];
}

const FeatureVideoCarousel: React.FC<FeatureVideoCarouselProps> = ({ title, markerText, description, videos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // UseRef for storing video elements
    const [progress, setProgress] = useState<number[]>(new Array(videos.length).fill(0));

    // Update progress bar
    useEffect(() => {
        const updateProgress = () => {
            const video = videoRefs.current[currentVideoIndex];
            if (video && video.duration) {
                const progressPercent = (video.currentTime / video.duration) * 100 || 0;
                setProgress((prev) => prev.map((p, index) => (index === currentVideoIndex ? progressPercent : p)));
            }
        };

        const interval = setInterval(updateProgress, 50); // Update progress at a smooth interval
        return () => clearInterval(interval); // Cleanup interval on unmount or dependency change
    }, [currentVideoIndex]);

    const handleVideoEnd = () => {
        const nextIndex = (currentVideoIndex + 1) % videos.length;

        // Reset progress for all videos when autoplay restarts
        if (nextIndex === 0) {
            setProgress(new Array(videos.length).fill(0));
        }

        setCurrentVideoIndex(nextIndex);
    };

    const handleProgressClick = (index: number) => {
        if (videoRefs.current[index]) {
            setCurrentVideoIndex(index);
            videoRefs.current[index]?.play();
        }

        // Reset progress for all other videos
        setProgress((prev) => prev.map((_, i) => (i === index ? 0 : 0)));
    };

    useEffect(() => {
        // Pause all videos except the currently active one
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentVideoIndex) {
                    video.currentTime = 0;
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    }, [currentVideoIndex]);

    return (
        <section className="relative my-[120px]">
            <Container>
                <div className="flex flex-col gap-6 tablet:gap-10 tablet:flex-row justify-between mb-10">
                    <h3 className="text-white text-3xl laptop:text-[40px] laptop:leading-[52px] laptop:w-[350px]">
                        {title}
                    </h3>
                    <span className="text-standard-4 text-[12px] tablet:text-sm" style={ibm_mono.style}>
                        {markerText}
                    </span>
                    <p className="text-white text-base whitespace-pre-line laptop:w-[648px]">{description}</p>
                </div>
                <div className="relative overflow-hidden">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className={classNames('w-full h-full transition-opacity duration-500', {
                                hidden: index !== currentVideoIndex,
                                block: index === currentVideoIndex,
                            })}
                        >
                            <video
                                ref={(el) => {
                                    videoRefs.current[index] = el; // Store the reference
                                }}
                                className="w-full h-auto"
                                autoPlay
                                playsInline
                                loop={false}
                                muted
                                onEnded={handleVideoEnd}
                            >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                    <div className="flex gap-2 tablet:gap-8 laptop:gap-20 justify-center absolute top-0 bottom-1 left-3 right-3 z-30">
                        {videos.map((_, index) => (
                            <div
                                key={index}
                                className="flex h-full w-full items-end cursor-pointer"
                                onClick={() => handleProgressClick(index)}
                            >
                                <div className="h-2 w-full mx-2 bg-gray-700 cursor-pointer relative overflow-hidden rounded-[20px]">
                                    <div
                                        className="absolute h-full bg-white transition-all duration-100"
                                        style={{ width: `${progress[index]}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeatureVideoCarousel;
