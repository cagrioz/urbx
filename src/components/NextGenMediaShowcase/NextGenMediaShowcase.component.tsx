'use client';

import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import NextGenNavigation from '@/components/NextGenNavigation';
import NextGenFlipCounters from '@/components/NextGenFlipCounters';
import type { FlipCounterMetric } from '@/components/NextGenFlipCounters';
import NextGenSpecRows, { type NextGenSpecRow } from '@/components/NextGenSpecRows';
import FullVideoPlayIcon from '@/assets/version2/fullvideo_play_icon.png';
import DownArrowIcon from '@/assets/version2/arrow_down.png';
import RightArrowIcon from '@/assets/version2/arrow_right.png';
import LeftArrowIcon from '@/assets/version2/arrow_left.png';

export type MediaShowcaseVariant = 'full' | 'icon' | 'explore';

export interface MediaShowcaseAction {
    href: string;
    variant?: MediaShowcaseVariant;
    label?: string;
    ariaLabel?: string;
    openInNewTab?: boolean;
}

export interface MediaShowcaseCarouselSlide {
    image: StaticImageData | string;
    imageAlt?: string;
    backgroundVideoUrl?: string;
}

export type MediaShowcaseTextPosition = 'bottom' | 'top';
export type MediaShowcaseTextHorizontalPosition = 'left' | 'right';
export type MediaShowcaseSpecRowsPlacement = 'side' | 'top';

export type MediaShowcaseSpecRow = NextGenSpecRow;

export interface MediaShowcaseProps {
    id?: string;
    image: StaticImageData | string;
    imageAlt: string;
    backgroundVideoUrl?: string;
    carouselSlides?: MediaShowcaseCarouselSlide[];
    header?: string;
    title: string;
    description: string;
    textPosition?: MediaShowcaseTextPosition;
    textHorizontalPosition?: MediaShowcaseTextHorizontalPosition;
    action?: MediaShowcaseAction;
    metrics?: FlipCounterMetric[];
    metricValueColor?: string;
    metricUnitColor?: string;
    metricAccentColor?: string;
    specRows?: MediaShowcaseSpecRow[];
    specRowsPlacement?: MediaShowcaseSpecRowsPlacement;
    specRowsClassName?: string;
    specHeading?: string;
    specHeadingColor?: string;
    specHeaderColor?: string;
    specTextColor?: string;
    specBorderColor?: string;
    className?: string;
    mediaClassName?: string;
    hasBottomRadius?: boolean;
    showBottomOverlay?: boolean;
    showNavigation?: boolean;
    titleColor?: string;
    descriptionColor?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

function MediaShowcaseActionLink({
    action,
    ariaLabel,
    className,
    children,
}: {
    action: MediaShowcaseAction;
    ariaLabel: string;
    className: string;
    children: ReactNode;
}) {
    const isInPageAnchor = action.href.startsWith('#');
    const target = action.openInNewTab ? '_blank' : undefined;
    const rel = action.openInNewTab ? 'noopener noreferrer' : undefined;

    if (isInPageAnchor) {
        return (
            <a href={action.href} aria-label={ariaLabel} className={className}>
                {children}
            </a>
        );
    }

    return (
        <Link href={action.href} aria-label={ariaLabel} target={target} rel={rel} className={className}>
            {children}
        </Link>
    );
}

function MediaShowcaseActionButton({ action }: { action: MediaShowcaseAction }) {
    const variant = action.variant ?? 'full';
    const label = action.label ?? 'FULL VIDEO';
    const baseClassName = 'inline-flex items-center rounded-[8px] text-[#F3F4F9] transition-colors';

    if (variant === 'icon') {
        return (
            <MediaShowcaseActionLink
                action={action}
                ariaLabel={action.ariaLabel ?? 'Open page media'}
                className={classNames(
                    baseClassName,
                    'h-10 w-10 justify-center border border-white/40 bg-white/[0.11] hover:bg-white/[0.17]'
                )}
            >
                <Image src={DownArrowIcon} alt="" aria-hidden="true" width={16} height={16} className="h-3 w-3 shrink-0" />
            </MediaShowcaseActionLink>
        );
    }

    if (variant === 'explore') {
        return (
            <MediaShowcaseActionLink
                action={action}
                ariaLabel={action.ariaLabel ?? 'Explore'}
                className={classNames(baseClassName, 'h-10 min-w-[138px] gap-2 justify-between border border-white/40 bg-white/[0.11] pl-4 pr-[10px] font-ibm-mono text-[12px] font-normal leading-5 tracking-[0.02em] hover:bg-white/[0.17]')}
            >
                <span className="whitespace-nowrap">{label}</span>
                <Image src={RightArrowIcon} alt="" aria-hidden="true" width={16} height={16} className="h-3 w-3 shrink-0" />
            </MediaShowcaseActionLink>
        );
    }

    return (
        <MediaShowcaseActionLink
            action={action}
            ariaLabel={action.ariaLabel ?? label}
            className={classNames(
                baseClassName,
                'h-10 min-w-[138px] justify-between border border-white/40 bg-white/[0.11] pl-4 pr-[10px] font-ibm-mono text-[12px] font-normal leading-5 tracking-[0.02em] hover:bg-white/[0.17] gap-2'
            )}
        >
            <span className="whitespace-nowrap">{label}</span>
            <Image src={FullVideoPlayIcon} alt="" aria-hidden="true" width={12} height={12} className="h-3 w-3 shrink-0" />
        </MediaShowcaseActionLink>
    );
}

export default function NextGenMediaShowcase({
    id,
    image,
    imageAlt,
    backgroundVideoUrl,
    header,
    title,
    description,
    action,
    metrics,
    metricValueColor,
    metricUnitColor,
    metricAccentColor,
    specRows,
    specRowsPlacement = 'side',
    specRowsClassName,
    carouselSlides,
    textPosition = 'bottom',
    textHorizontalPosition = 'left',
    specHeading,
    specHeadingColor,
    specHeaderColor,
    specTextColor,
    specBorderColor,
    className,
    mediaClassName,
    hasBottomRadius = true,
    showBottomOverlay = true,
    showNavigation = true,
    titleColor,
    descriptionColor,
    titleClassName,
    descriptionClassName,
}: MediaShowcaseProps) {
    const totalSlides = carouselSlides?.length ?? 0;
    const hasCarousel = totalSlides > 0;
    const hasCarouselControls = totalSlides > 1;
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    useEffect(() => {
        if (!hasCarousel || totalSlides <= 0) {
            setActiveSlideIndex(0);
            return;
        }

        if (activeSlideIndex >= totalSlides) {
            setActiveSlideIndex(0);
        }
    }, [activeSlideIndex, hasCarousel, totalSlides]);

    const activeSlide = hasCarousel ? carouselSlides?.[activeSlideIndex] : undefined;
    const activeImage = activeSlide?.image ?? image;
    const activeImageAlt = activeSlide?.imageAlt ?? imageAlt;
    const activeBackgroundVideoUrl = activeSlide?.backgroundVideoUrl ?? backgroundVideoUrl;

    const handlePreviousSlide = () => {
        if (!hasCarouselControls) {
            return;
        }

        setActiveSlideIndex((previousIndex) => (previousIndex - 1 + totalSlides) % totalSlides);
    };

    const handleNextSlide = () => {
        if (!hasCarouselControls) {
            return;
        }

        setActiveSlideIndex((previousIndex) => (previousIndex + 1) % totalSlides);
    };

    const hasSpecRows = Boolean(specRows && specRows.length > 0);
    const isTopSpecRowsLayout = hasSpecRows && specRowsPlacement === 'top';

    const topSpecRowsContent = isTopSpecRowsLayout ? (
        <div className="w-full">
            <NextGenSpecRows
                rows={specRows!}
                className={classNames('max-w-none tablet:w-full desktop:w-full', specRowsClassName)}
                heading={specHeading}
                headingColor={specHeadingColor}
                headerColor={specHeaderColor}
                textColor={specTextColor}
                borderColor={specBorderColor}
            />
        </div>
    ) : null;

    const rightContent = hasSpecRows && specRowsPlacement !== 'top' ? (
        <div className="w-full tablet:mb-1 tablet:w-auto tablet:shrink-0">
            <NextGenSpecRows
                rows={specRows!}
                className={specRowsClassName}
                heading={specHeading}
                headingColor={specHeadingColor}
                headerColor={specHeaderColor}
                textColor={specTextColor}
                borderColor={specBorderColor}
            />
        </div>
    ) : metrics && metrics.length > 0 ? (
        <div className="tablet:mb-1">
            <NextGenFlipCounters
                metrics={metrics}
                valueColor={metricValueColor}
                unitColor={metricUnitColor}
                accentColor={metricAccentColor}
            />
        </div>
    ) : action ? (
        <div className="tablet:mb-1">
            <MediaShowcaseActionButton action={action} />
        </div>
    ) : null;

    const textBottomAlignmentClass =
        textHorizontalPosition === 'right' ? 'justify-start tablet:justify-end' : 'justify-start';

    return (
        <section
            id={id}
            className={classNames(
                'relative isolate overflow-hidden bg-white',
                hasBottomRadius && 'rounded-b-[18px]',
                className
            )}
        >
            {/* Background can be switched to looped live footage via backgroundVideoUrl. */}
            {activeBackgroundVideoUrl ? (
                <video
                    className={classNames('absolute inset-0 h-full w-full object-cover object-top', mediaClassName)}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={typeof activeImage === 'string' ? activeImage : activeImage.src}
                >
                    <source src={activeBackgroundVideoUrl} />
                </video>
            ) : (
                <Image
                    src={activeImage}
                    alt={activeImageAlt}
                    priority
                    fill
                    className={classNames('object-cover object-top', mediaClassName)}
                />
            )}

            {hasCarouselControls ? (
                <>
                    <button
                        type="button"
                        onClick={handlePreviousSlide}
                        aria-label="Previous slide"
                        className="carousel-arrow-btn absolute left-4 top-1/2 z-20 inline-flex h-[38px] w-[58px] -translate-y-1/2 items-center justify-center rounded-[8px] px-[18px] py-[8px] transition-opacity hover:opacity-80 tablet:left-6 desktop:left-8"
                    >
                        <Image src={LeftArrowIcon} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
                    </button>
                    <button
                        type="button"
                        onClick={handleNextSlide}
                        aria-label="Next slide"
                        className="carousel-arrow-btn absolute right-4 top-1/2 z-20 inline-flex h-[38px] w-[58px] -translate-y-1/2 items-center justify-center rounded-[8px] px-[18px] py-[8px] transition-opacity hover:opacity-80 tablet:right-6 desktop:right-8"
                    >
                        <Image src={RightArrowIcon} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
                    </button>
                </>
            ) : null}

            {showBottomOverlay ? (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-[linear-gradient(to_top,rgba(8,10,12,0.95)_0%,rgba(8,10,12,0.7)_40%,transparent_100%)]"
                />
            ) : null}

            {showNavigation ? (
                <NextGenNavigation
                    className={classNames('absolute inset-x-0 top-0 pt-3 tablet:pt-[14px] desktop:pt-6')}
                />
            ) : null}

            <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1340px] flex-1 flex-col px-5 pb-9 pt-[86px] tablet:min-h-[760px] tablet:px-10 tablet:pt-[94px] tablet:pb-11 desktop:min-h-[849px] desktop:px-0 desktop:pb-[50px]">
                {isTopSpecRowsLayout ? (
                    <>
                        {topSpecRowsContent}
                        <div className={classNames('mt-auto flex w-full', textBottomAlignmentClass)}>
                            <div className="max-w-[480px]">
                                {header ? (
                                    <p className="mb-4 font-ibm-mono text-[14px] font-medium uppercase leading-[1.4] tracking-[0.1em] text-[#F3F4F9]">
                                        {header}
                                    </p>
                                ) : null}
                                <h1
                                    className={classNames(
                                        'font-general-sans text-[28px] font-normal leading-[1] tracking-[-0.01em] text-[#F3F4F9] tablet:text-[32px]',
                                        titleClassName
                                    )}
                                    style={titleColor ? { color: titleColor } : undefined}
                                >
                                    {title}
                                </h1>
                                <p
                                    className={classNames(
                                        'mt-4 max-w-[560px] font-ibm-mono text-[14px] leading-[1.4] tracking-[-0.01em] text-white/60 tablet:text-[16px]',
                                        descriptionClassName
                                    )}
                                    style={descriptionColor ? { color: descriptionColor } : undefined}
                                >
                                    {description}
                                </p>
                            </div>
                        </div>
                    </>
                ) : textPosition === 'top' ? (
                    <>
                        <div className="max-w-[480px]">
                            {header ? (
                                <p className="mb-4 font-ibm-mono text-[14px] font-medium uppercase leading-[1.4] tracking-[0.1em] text-[#F3F4F9]">
                                    {header}
                                </p>
                            ) : null}
                            <h1
                                className={classNames(
                                    'font-general-sans text-[28px] font-normal leading-[1] tracking-[-0.01em] text-[#F3F4F9] tablet:text-[32px]',
                                    titleClassName
                                )}
                                style={titleColor ? { color: titleColor } : undefined}
                            >
                                {title}
                            </h1>
                            <p
                                className={classNames(
                                    'mt-4 max-w-[560px] font-ibm-mono text-[14px] leading-[1.4] tracking-[-0.01em] text-white/60 tablet:text-[16px]',
                                    descriptionClassName
                                )}
                                style={descriptionColor ? { color: descriptionColor } : undefined}
                            >
                                {description}
                            </p>
                        </div>

                        {rightContent ? (
                            <div className={classNames('mt-auto flex w-full', textBottomAlignmentClass)}>
                                {rightContent}
                            </div>
                        ) : null}
                    </>
                ) : (
                    <div className="mt-auto flex flex-col gap-5 tablet:flex-row tablet:items-end tablet:justify-between">
                        <div className="max-w-[480px]">
                            {header ? (
                                <p className="mb-4 font-ibm-mono text-[14px] font-medium uppercase leading-[1.4] tracking-[0.1em] text-[#F3F4F9]">
                                    {header}
                                </p>
                            ) : null}
                            <h1
                                className={classNames(
                                    'font-general-sans text-[28px] font-normal leading-[1] tracking-[-0.01em] text-[#F3F4F9] tablet:text-[32px]',
                                    titleClassName
                                )}
                                style={titleColor ? { color: titleColor } : undefined}
                            >
                                {title}
                            </h1>
                            <p
                                className={classNames(
                                    'mt-4 max-w-[560px] font-ibm-mono text-[14px] leading-[1.4] tracking-[-0.01em] text-white/60 tablet:text-[16px]',
                                    descriptionClassName
                                )}
                                style={descriptionColor ? { color: descriptionColor } : undefined}
                            >
                                {description}
                            </p>
                        </div>

                        {rightContent}
                    </div>
                )}
            </div>
        </section>
    );
}
