'use client';

import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ComputerMockup from '@/assets/version2/urbx_computer_mockup.png';
import NeonIcon1 from '@/assets/version2/neon_icon_1.png';
import NeonIcon2 from '@/assets/version2/neon_icon_2.png';
import NeonIcon3 from '@/assets/version2/neon_icon_3.png';

interface NeonFeatureCard {
    icon: StaticImageData;
    iconAlt: string;
    number: string;
    title: string;
    description: string;
}

const neonFeatureCards: NeonFeatureCard[] = [
    {
        icon: NeonIcon1,
        iconAlt: 'Swarm intelligence NeonOS visualization',
        number: '01',
        title: 'Swarm Intelligence',
        description:
            'Real-time routing avoids congestion. Neon re-prioritizes paths based on order urgency and surface traffic.',
    },
    {
        icon: NeonIcon2,
        iconAlt: 'Universal integrations NeonOS visualization',
        number: '02',
        title: 'Universal Integrations',
        description: 'API-first design to integrate with WMS/WES stacks via modern interfaces.',
    },
    {
        icon: NeonIcon3,
        iconAlt: 'Predictive slotting NeonOS visualization',
        number: '03',
        title: 'Predictive Slotting',
        description: 'Uses demand signals to stage high-velocity SKUs closer to the surface during quiet windows.',
    },
];

function BracketedIndex({ value }: { value: string }) {
    return (
        <p className="inline-flex items-start gap-[2px] text-[18px] font-medium leading-[1] text-[#000000]">
            <span className="font-ibm-mono text-[14px] font-normal leading-[1.4] tracking-[-0.0312em] text-[#00A5E2]">[</span>
            <span className="font-general-sans">{value}</span>
            <span className="font-ibm-mono text-[14px] font-normal leading-[1.4] tracking-[-0.0312em] text-[#00A5E2]">]</span>
        </p>
    );
}

export default function NeonSoftwareSection() {
    const mockupRef = useRef<HTMLDivElement | null>(null);
    const [isMockupAnimationActive, setIsMockupAnimationActive] = useState(false);

    useEffect(() => {
        let rafId = 0;

        const updateAnimationState = () => {
            if (!mockupRef.current) {
                return;
            }

            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const bounds = mockupRef.current.getBoundingClientRect();
            const visibleTop = Math.max(bounds.top, 0);
            const visibleBottom = Math.min(bounds.bottom, viewportHeight);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const requiredVisibleHeight = Math.min(bounds.height, viewportHeight);
            const isFullyVisible =
                requiredVisibleHeight > 0 && visibleHeight / requiredVisibleHeight >= 0.98;

            setIsMockupAnimationActive((previousState) =>
                previousState === isFullyVisible ? previousState : isFullyVisible
            );
        };

        const handleViewportChange = () => {
            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }

            rafId = window.requestAnimationFrame(updateAnimationState);
        };

        updateAnimationState();

        window.addEventListener('scroll', handleViewportChange, { passive: true });
        window.addEventListener('resize', handleViewportChange);

        return () => {
            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }

            window.removeEventListener('scroll', handleViewportChange);
            window.removeEventListener('resize', handleViewportChange);
        };
    }, []);

    return (
        <section id="neon-software" className="bg-[#F2F4F6] pt-[32px] text-[#050608]">
            <div className="mx-auto flex min-h-[78svh] w-full max-w-[1340px] items-center justify-center px-5 tablet:min-h-[85svh] tablet:px-10 desktop:min-h-[92svh] desktop:px-0">
                <div
                    ref={mockupRef}
                    className={classNames(
                        'neon-mockup-shell relative w-full max-w-[1080px] will-change-transform',
                        isMockupAnimationActive && 'neon-mockup-shell-active'
                    )}
                >
                    <Image
                        src={ComputerMockup}
                        alt="URBX NeonOS dashboard displayed on desktop workstation"
                        className="h-auto w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.28)]"
                        priority={false}
                    />
                    <div
                        aria-hidden="true"
                        className={classNames(
                            'neon-screen-sweep pointer-events-none absolute inset-x-[25%] top-[13%] h-[44%] rounded-[20px]',
                            isMockupAnimationActive && 'neon-screen-sweep-active'
                        )}
                    />
                </div>
            </div>

            <div className="mx-auto w-full max-w-[1340px] px-5 pb-20 tablet:px-10 tablet:pb-24 desktop:px-0 desktop:pb-[120px]">
                <div className="flex flex-col gap-5 desktop:flex-row">
                    {neonFeatureCards.map((feature) => (
                        <article
                            key={feature.number}
                            className="flex min-h-[436px] flex-1 flex-col rounded-[12px] border border-[rgba(26,39,44,0.10)] bg-[rgba(255,255,255,0.36)] p-5"
                        >
                            <div className="flex h-[220px] items-center justify-center">
                                <Image
                                    src={feature.icon}
                                    alt={feature.iconAlt}
                                    className="h-auto w-full max-w-[320px] object-contain"
                                />
                            </div>
                            <div className="mt-auto">
                                <BracketedIndex value={feature.number} />
                                <h2 className="mt-3 font-general-sans text-[24px] font-medium leading-[1.2] tracking-[-0.01em] text-[#000000]">
                                    {feature.title}
                                </h2>
                                <p className="mt-3 font-ibm-mono text-[16px] font-medium leading-[1.4] tracking-[-0.0312em] text-[#888B96]">
                                    {feature.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes neon-mockup-loop {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                    35% {
                        transform: translate3d(0, -9px, 0) scale(1.01);
                    }
                    65% {
                        transform: translate3d(0, -4px, 0) scale(1.005);
                    }
                }

                @keyframes neon-screen-sweep {
                    0% {
                        opacity: 0;
                        transform: translate3d(-115%, 0, 0);
                    }
                    15% {
                        opacity: 0.26;
                    }
                    52% {
                        opacity: 0.5;
                    }
                    85% {
                        opacity: 0.2;
                    }
                    100% {
                        opacity: 0;
                        transform: translate3d(115%, 0, 0);
                    }
                }

                .neon-mockup-shell {
                    animation: neon-mockup-loop 5600ms ease-in-out infinite;
                    animation-play-state: paused;
                }

                .neon-mockup-shell-active {
                    animation-play-state: running;
                }

                .neon-screen-sweep {
                    background: linear-gradient(
                        90deg,
                        rgba(0, 165, 226, 0) 0%,
                        rgba(0, 165, 226, 0.22) 32%,
                        rgba(255, 255, 255, 0.34) 50%,
                        rgba(0, 165, 226, 0.16) 68%,
                        rgba(0, 165, 226, 0) 100%
                    );
                    filter: blur(0.6px);
                    mix-blend-mode: screen;
                    animation: neon-screen-sweep 3000ms cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    animation-play-state: paused;
                }

                .neon-screen-sweep-active {
                    animation-play-state: running;
                }

                @media (prefers-reduced-motion: reduce) {
                    .neon-mockup-shell,
                    .neon-screen-sweep {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
}
