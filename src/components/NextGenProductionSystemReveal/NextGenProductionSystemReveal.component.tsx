'use client';

import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import ProductionSystemBackdrop from '@/assets/version2/production_system.png';
import RightArrowIcon from '@/assets/version2/arrow_right.png';

interface NextGenProductionSystemRevealProps {
    videoEmbedUrl?: string;
    youtubeHref?: string;
}

const DEFAULT_VIDEO_EMBED_URL =
    'https://www.youtube.com/embed?autoplay=1&mute=1&listType=search&list=URBX+production+system+SEW';

export default function NextGenProductionSystemReveal({
    videoEmbedUrl = DEFAULT_VIDEO_EMBED_URL,
    youtubeHref = 'https://youtube.com',
}: NextGenProductionSystemRevealProps) {
    const [isVideoRevealed, setIsVideoRevealed] = useState(false);

    const revealVideo = () => {
        setIsVideoRevealed(true);
    };

    return (
        <section className="relative isolate overflow-hidden" aria-label="Production system section">
            <div
                role="button"
                tabIndex={0}
                aria-label="Reveal production system video"
                onClick={revealVideo}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        revealVideo();
                    }
                }}
                className={classNames(
                    'relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    isVideoRevealed ? '-translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100 cursor-pointer'
                )}
            >
                <Image src={ProductionSystemBackdrop} alt="URBX production system" priority fill className="object-cover object-top" />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-[linear-gradient(to_top,rgba(8,10,12,0.95)_0%,rgba(8,10,12,0.7)_40%,transparent_100%)]"
                />

                <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1340px] flex-col px-5 pb-9 pt-[86px] tablet:min-h-[760px] tablet:px-10 tablet:pt-[94px] tablet:pb-11 desktop:min-h-[849px] desktop:px-0 desktop:pb-[50px]">
                    <div className="mt-auto flex flex-col gap-5 tablet:flex-row tablet:items-end tablet:justify-between pb-[32px]">
                        <div className="max-w-[480px]">
                            <h2 className="font-general-sans text-[28px] font-normal leading-[1] tracking-[-0.01em] text-[#F3F4F9] tablet:text-[32px]">
                                Proven. Refined. Ready
                            </h2>
                            <p className="mt-4 max-w-[560px] font-ibm-mono text-[14px] leading-[1.4] tracking-[-0.01em] text-white/60 tablet:text-[16px]">
                                URBX 2.0 enters production deployment with enhanced speed, density, maintainability, and the flexibility to adapt
                                as operations evolve.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                revealVideo();
                            }}
                            className="inline-flex h-10 min-w-[138px] items-center justify-between gap-2 rounded-[8px] border border-white/40 bg-white/[0.11] pl-4 pr-[10px] font-ibm-mono text-[12px] font-normal leading-5 tracking-[0.02em] text-[#F3F4F9] transition-colors hover:bg-white/[0.17] tablet:mb-1"
                        >
                            <span className="whitespace-nowrap">PRODUCTION SYSTEM</span>
                            <Image src={RightArrowIcon} alt="" aria-hidden="true" width={16} height={16} className="h-3 w-3 shrink-0" />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={classNames(
                    'absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    isVideoRevealed ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
                )}
                aria-hidden={!isVideoRevealed}
            >
                <div className="relative mx-auto min-h-[640px] w-full max-w-[1340px] overflow-hidden tablet:min-h-[760px] desktop:min-h-[849px]">
                    <iframe
                        src={videoEmbedUrl}
                        title="URBX Production System at SEW"
                        className="absolute inset-0 h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(to_top,rgba(8,10,12,0.95)_0%,rgba(8,10,12,0.45)_50%,transparent_100%)]"
                    />

                    <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-9 tablet:px-10 tablet:pb-11 desktop:px-0 desktop:pb-[50px]">
                        <div className="flex justify-end">
                            <a
                                href={youtubeHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-10 min-w-[138px] items-center justify-between gap-2 rounded-[8px] border border-white/40 bg-white/[0.11] pl-4 pr-[10px] font-ibm-mono text-[12px] font-normal leading-5 tracking-[0.02em] text-[#F3F4F9] transition-colors hover:bg-white/[0.17]"
                            >
                                <span className="whitespace-nowrap">OPEN ON YOUTUBE</span>
                                <Image src={RightArrowIcon} alt="" aria-hidden="true" width={16} height={16} className="h-3 w-3 shrink-0" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
