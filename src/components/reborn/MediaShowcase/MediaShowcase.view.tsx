'use client';

import classNames from 'classnames';
import { useRef } from 'react';
import Navigation from '@/components/reborn/Navigation';
import { useMediaShowcaseCarousel, useSectionActivity } from './MediaShowcase.hooks';
import {
    MediaShowcaseBottomOverlay,
    MediaShowcaseCarouselControls,
    MediaShowcaseMediaLayer,
    MediaShowcaseSideContent,
    MediaShowcaseSpecRowsBlock,
    MediaShowcaseTextBlock,
} from './MediaShowcase.parts';
import type {
    MediaShowcaseMetricsConfig,
    MediaShowcaseProps,
    MediaShowcaseSpecRowsConfig,
} from './MediaShowcase.types';

export default function MediaShowcase({
    id,
    image,
    imageAlt,
    backgroundVideoUrl,
    carouselSlides,
    header,
    title,
    titleContent,
    description,
    descriptionContent,
    textPosition = 'bottom',
    textHorizontalPosition = 'left',
    action,
    actionInfo,
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
    const sectionRef = useRef<HTMLElement | null>(null);
    const isSectionActive = useSectionActivity(sectionRef, Boolean(action));
    const carousel = useMediaShowcaseCarousel({
        slides: carouselSlides,
        fallbackMedia: {
            image,
            imageAlt,
            backgroundVideoUrl,
        },
    });

    const specRowsConfig: MediaShowcaseSpecRowsConfig = {
        rows: specRows ?? [],
        placement: specRowsPlacement,
        className: specRowsClassName,
        heading: specHeading,
        headingColor: specHeadingColor,
        headerColor: specHeaderColor,
        textColor: specTextColor,
        borderColor: specBorderColor,
    };

    const metricsConfig: MediaShowcaseMetricsConfig = {
        metrics,
        valueColor: metricValueColor,
        unitColor: metricUnitColor,
        accentColor: metricAccentColor,
    };

    const hasSpecRows = specRowsConfig.rows.length > 0;
    const isTopSpecRowsLayout = hasSpecRows && specRowsConfig.placement === 'top';
    const hasSideContent =
        (hasSpecRows && specRowsConfig.placement !== 'top') || Boolean(metrics?.length) || Boolean(action);
    const textBottomAlignmentClass =
        textHorizontalPosition === 'right' ? 'justify-start tablet:justify-end' : 'justify-start';

    const textBlock = (
        <MediaShowcaseTextBlock
            header={header}
            title={title}
            titleContent={titleContent}
            description={description}
            descriptionContent={descriptionContent}
            titleColor={titleColor}
            descriptionColor={descriptionColor}
            titleClassName={titleClassName}
            descriptionClassName={descriptionClassName}
        />
    );

    const sideContent = hasSideContent && (
        <MediaShowcaseSideContent
            specRowsConfig={specRowsConfig}
            metricsConfig={metricsConfig}
            actionPanelConfig={{ action, info: actionInfo }}
            isSectionActive={isSectionActive}
        />
    );

    return (
        <section
            ref={sectionRef}
            id={id}
            className={classNames(
                'relative isolate overflow-hidden bg-white',
                hasBottomRadius && 'rounded-b-[32px]',
                className
            )}
        >
            <MediaShowcaseMediaLayer media={carousel.activeMedia} mediaClassName={mediaClassName} />

            {carousel.hasControls && (
                <MediaShowcaseCarouselControls onPrevious={carousel.onPrevious} onNext={carousel.onNext} />
            )}

            {showBottomOverlay && <MediaShowcaseBottomOverlay />}
            {showNavigation && (
                <Navigation className="absolute inset-x-0 top-0 pt-3 tablet:pt-[14px] desktop:pt-6" />
            )}

            <div
                className={classNames(
                    'relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1340px] flex-1 flex-col px-5 pb-9 pt-[86px] tablet:min-h-[760px] tablet:px-10 tablet:pb-11 tablet:pt-[94px] desktop:min-h-[900px] desktop:px-0 desktop:pb-[50px]',
                    contentClassName
                )}
            >
                {isTopSpecRowsLayout ? (
                    <>
                        <div className="w-full">
                            <MediaShowcaseSpecRowsBlock
                                config={specRowsConfig}
                                className="max-w-none tablet:w-full desktop:w-full"
                            />
                        </div>
                        <div className={classNames('mt-auto flex w-full', textBottomAlignmentClass)}>{textBlock}</div>
                    </>
                ) : textPosition === 'top' ? (
                    <>
                        {textBlock}
                        {sideContent && (
                            <div className={classNames('mt-auto flex w-full', textBottomAlignmentClass)}>{sideContent}</div>
                        )}
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
