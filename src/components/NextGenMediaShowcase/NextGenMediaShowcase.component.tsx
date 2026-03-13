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
    colorScheme?: 'default' | 'muted';
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
    descriptionContent?: ReactNode;
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
    contentClassName?: string;
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
    const baseClassName = 'gradient-outline-btn inline-flex items-center rounded-[8px] text-[#F3F4F9]';

    if (variant === 'icon') {
        return (
            <MediaShowcaseActionLink
                action={action}
                ariaLabel={action.ariaLabel ?? 'Open page media'}
                className={classNames(
                    baseClassName,
                    'h-10 w-10 justify-center bg-white/[0.11] hover:bg-white/[0.17]'
                )}
            >
                <Image
                    src={DownArrowIcon}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="h-3 w-3 shrink-0"
                />
            </MediaShowcaseActionLink>
        );
    }

    if (variant === 'explore') {
        const isMutedExplore = action.colorScheme === 'muted';

        return (
            <MediaShowcaseActionLink
                action={action}
                ariaLabel={action.ariaLabel ?? 'Explore'}
                className={classNames(
                    baseClassName,
                    'gap-[10px] px-4 py-[10px] font-ibm-mono text-[14px] font-semibold leading-5 tracking-[0.02em]',
                    isMutedExplore
                        ? 'bg-[rgba(86,86,86,0.11)] text-[#565656] hover:bg-[rgba(86,86,86,0.17)]'
                        : 'bg-white/[0.11] text-[#F3F4F9] hover:bg-white/[0.17]'
                )}
            >
                <span className="whitespace-nowrap">{label}</span>
                <span
                    aria-hidden="true"
                    className="h-3 w-3 shrink-0 bg-current"
                    style={{
                        WebkitMaskImage: `url(${RightArrowIcon.src})`,
                        maskImage: `url(${RightArrowIcon.src})`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                    }}
                />
            </MediaShowcaseActionLink>
        );
    }

    return (
        <MediaShowcaseActionLink
            action={action}
            ariaLabel={action.ariaLabel ?? label}
            className={classNames(
                baseClassName,
                'gap-[10px] bg-white/[0.11] px-4 py-[10px] font-ibm-mono text-[14px] font-semibold leading-5 tracking-[0.02em] hover:bg-white/[0.17]'
            )}
        >
            <span className="whitespace-nowrap">{label}</span>
            <Image
                src={FullVideoPlayIcon}
                alt=""
                aria-hidden="true"
                width={12}
                height={12}
                className="h-3 w-3 shrink-0"
            />
        </MediaShowcaseActionLink>
    );
}

interface MediaShowcaseTextBlockProps {
    header?: string;
    title: string;
    description: string;
    descriptionContent?: ReactNode;
    titleColor?: string;
    descriptionColor?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

function MediaShowcaseTextBlock({
    header,
    title,
    description,
    descriptionContent,
    titleColor,
    descriptionColor,
    titleClassName,
    descriptionClassName,
}: MediaShowcaseTextBlockProps) {
    return (
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
                {descriptionContent ?? description}
            </p>
        </div>
    );
}

function MediaShowcaseCarouselControls({
    onPrevious,
    onNext,
}: {
    onPrevious: () => void;
    onNext: () => void;
}) {
    return (
        <>
            <button
                type="button"
                onClick={onPrevious}
                aria-label="Previous slide"
                className="carousel-arrow-btn absolute left-4 top-1/2 z-20 inline-flex h-[38px] w-[58px] -translate-y-1/2 items-center justify-center rounded-[8px] px-[18px] py-[8px] transition-opacity hover:opacity-80 tablet:left-6 desktop:left-8"
            >
                <Image src={LeftArrowIcon} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
            </button>
            <button
                type="button"
                onClick={onNext}
                aria-label="Next slide"
                className="carousel-arrow-btn absolute right-4 top-1/2 z-20 inline-flex h-[38px] w-[58px] -translate-y-1/2 items-center justify-center rounded-[8px] px-[18px] py-[8px] transition-opacity hover:opacity-80 tablet:right-6 desktop:right-8"
            >
                <Image src={RightArrowIcon} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
            </button>
        </>
    );
}

export default function NextGenMediaShowcase({
    id,
    image,
    imageAlt,
    backgroundVideoUrl,
    carouselSlides,
    header,
    title,
    description,
    descriptionContent,
    textPosition = 'bottom',
    textHorizontalPosition = 'left',
    action,
    metrics,
    metricValueColor,
    metricUnitColor,
    metricAccentColor,
    specRows,
    specRowsPlacement = 'side',
    specRowsClassName,
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
    contentClassName,
}: MediaShowcaseProps) {
    const totalSlides = carouselSlides?.length ?? 0;
    const hasCarouselControls = totalSlides > 1;
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const specRowsData = specRows ?? [];
    const hasSpecRows = specRowsData.length > 0;
    const isTopSpecRowsLayout = hasSpecRows && specRowsPlacement === 'top';

    useEffect(() => {
        if (totalSlides <= 0) {
            return;
        }

        setActiveSlideIndex((previousIndex) => (previousIndex < totalSlides ? previousIndex : 0));
    }, [totalSlides]);

    const safeSlideIndex = totalSlides > 0 ? activeSlideIndex % totalSlides : 0;
    const activeSlide = totalSlides > 0 ? carouselSlides?.[safeSlideIndex] : undefined;
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

    const renderSpecRows = (extraClassName?: string) => (
        <NextGenSpecRows
            rows={specRowsData}
            className={classNames(extraClassName, specRowsClassName)}
            heading={specHeading}
            headingColor={specHeadingColor}
            headerColor={specHeaderColor}
            textColor={specTextColor}
            borderColor={specBorderColor}
        />
    );

    const sideContent =
        hasSpecRows && specRowsPlacement !== 'top' ? (
            <div className="w-full tablet:mb-1 tablet:w-auto tablet:shrink-0">{renderSpecRows()}</div>
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

    const textBlock = (
        <MediaShowcaseTextBlock
            header={header}
            title={title}
            description={description}
            descriptionContent={descriptionContent}
            titleColor={titleColor}
            descriptionColor={descriptionColor}
            titleClassName={titleClassName}
            descriptionClassName={descriptionClassName}
        />
    );

    const textBottomAlignmentClass =
        textHorizontalPosition === 'right' ? 'justify-start tablet:justify-end' : 'justify-start';

    return (
        <section
            id={id}
            className={classNames(
                'relative isolate overflow-hidden bg-white',
                hasBottomRadius && 'rounded-b-[32px]',
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
                <MediaShowcaseCarouselControls onPrevious={handlePreviousSlide} onNext={handleNextSlide} />
            ) : null}

            {showBottomOverlay ? (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-[linear-gradient(to_top,rgba(8,10,12,0.95)_0%,rgba(8,10,12,0.7)_40%,transparent_100%)]"
                />
            ) : null}

            {showNavigation ? (
                <NextGenNavigation className="absolute inset-x-0 top-0 pt-3 tablet:pt-[14px] desktop:pt-6" />
            ) : null}

            <div
                className={classNames(
                    'relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1340px] flex-1 flex-col px-5 pb-9 pt-[86px] tablet:min-h-[760px] tablet:px-10 tablet:pt-[94px] tablet:pb-11 desktop:min-h-[849px] desktop:px-0 desktop:pb-[50px]',
                    contentClassName
                )}
            >
                {isTopSpecRowsLayout ? (
                    <>
                        <div className="w-full">{renderSpecRows('max-w-none tablet:w-full desktop:w-full')}</div>
                        <div className={classNames('mt-auto flex w-full', textBottomAlignmentClass)}>{textBlock}</div>
                    </>
                ) : textPosition === 'top' ? (
                    <>
                        {textBlock}
                        {sideContent ? (
                            <div className={classNames('mt-auto flex w-full', textBottomAlignmentClass)}>{sideContent}</div>
                        ) : null}
                    </>
                ) : (
                    <div className="mt-auto flex flex-col gap-5 tablet:flex-row tablet:items-end tablet:justify-between">
                        {textBlock}
                        {sideContent}
                    </div>
                )}
            </div>
        </section>
    );
}
