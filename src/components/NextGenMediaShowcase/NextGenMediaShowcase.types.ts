import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';
import type { FlipCounterMetric } from '@/components/NextGenFlipCounters';
import type { NextGenSpecRow } from '@/components/NextGenSpecRows';

export type MediaShowcaseVariant = 'full' | 'icon' | 'explore';
export type MediaShowcaseMedia = StaticImageData | string;
export type MediaShowcaseTextPosition = 'bottom' | 'top';
export type MediaShowcaseTextHorizontalPosition = 'left' | 'right';
export type MediaShowcaseSpecRowsPlacement = 'side' | 'top';
export type MediaShowcaseSpecRow = NextGenSpecRow;

export interface MediaShowcaseAction {
    href: string;
    variant?: MediaShowcaseVariant;
    colorScheme?: 'default' | 'muted';
    label?: string;
    ariaLabel?: string;
    openInNewTab?: boolean;
}

export interface MediaShowcaseActionInfo {
    heading: ReactNode;
    description: ReactNode;
    hideOnMobile?: boolean;
    className?: string;
}

export interface MediaShowcaseCarouselSlide {
    image: MediaShowcaseMedia;
    imageAlt?: string;
    backgroundVideoUrl?: string;
}

export interface MediaShowcaseMediaProps {
    image: MediaShowcaseMedia;
    imageAlt: string;
    backgroundVideoUrl?: string;
    carouselSlides?: MediaShowcaseCarouselSlide[];
    mediaClassName?: string;
}

export interface MediaShowcaseTextProps {
    header?: string;
    title: string;
    titleContent?: ReactNode;
    description: string;
    descriptionContent?: ReactNode;
    textPosition?: MediaShowcaseTextPosition;
    textHorizontalPosition?: MediaShowcaseTextHorizontalPosition;
    titleColor?: string;
    descriptionColor?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export interface MediaShowcaseActionPanelProps {
    action?: MediaShowcaseAction;
    actionInfo?: MediaShowcaseActionInfo;
}

export interface MediaShowcaseMetricsProps {
    metrics?: FlipCounterMetric[];
    metricValueColor?: string;
    metricUnitColor?: string;
    metricAccentColor?: string;
}

export interface MediaShowcaseSpecRowsProps {
    specRows?: MediaShowcaseSpecRow[];
    specRowsPlacement?: MediaShowcaseSpecRowsPlacement;
    specRowsClassName?: string;
    specHeading?: string;
    specHeadingColor?: string;
    specHeaderColor?: string;
    specTextColor?: string;
    specBorderColor?: string;
}

export interface MediaShowcaseLayoutProps {
    id?: string;
    className?: string;
    contentClassName?: string;
    hasBottomRadius?: boolean;
    showBottomOverlay?: boolean;
    showNavigation?: boolean;
}

export type MediaShowcaseProps = MediaShowcaseMediaProps &
    MediaShowcaseTextProps &
    MediaShowcaseActionPanelProps &
    MediaShowcaseMetricsProps &
    MediaShowcaseSpecRowsProps &
    MediaShowcaseLayoutProps;

export interface MediaShowcaseResolvedMedia {
    image: MediaShowcaseMedia;
    imageAlt: string;
    backgroundVideoUrl?: string;
}

export interface MediaShowcaseMetricsConfig {
    metrics?: FlipCounterMetric[];
    valueColor?: string;
    unitColor?: string;
    accentColor?: string;
}

export interface MediaShowcaseSpecRowsConfig {
    rows: MediaShowcaseSpecRow[];
    placement: MediaShowcaseSpecRowsPlacement;
    className?: string;
    heading?: string;
    headingColor?: string;
    headerColor?: string;
    textColor?: string;
    borderColor?: string;
}

export interface MediaShowcaseActionPanelConfig {
    action?: MediaShowcaseAction;
    info?: MediaShowcaseActionInfo;
}
