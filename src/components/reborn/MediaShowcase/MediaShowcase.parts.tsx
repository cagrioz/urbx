import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import FlipCounter from '@/components/reborn/FlipCounter';
import SpecRows from '@/components/reborn/SpecRows';
import FullVideoPlayIcon from '@/assets/version2/fullvideo_play_icon.png';
import DownArrowIcon from '@/assets/version2/arrow_down.png';
import RightArrowIcon from '@/assets/version2/arrow_right.png';
import LeftArrowIcon from '@/assets/version2/arrow_left.png';
import type {
    MediaShowcaseAction,
    MediaShowcaseActionPanelConfig,
    MediaShowcaseMetricsConfig,
    MediaShowcaseResolvedMedia,
    MediaShowcaseSpecRowsConfig,
} from './MediaShowcase.types';

const ACTION_BUTTON_BASE_CLASS_NAME =
    'gradient-outline-btn group inline-flex items-center rounded-[8px] text-[#F3F4F9] transition-colors duration-300';
const ACTION_BUTTON_ICON_MOTION_CLASS_NAME = 'shrink-0 will-change-transform';

const RIGHT_ARROW_MASK_STYLE: CSSProperties = {
    WebkitMaskImage: `url(${RightArrowIcon.src})`,
    maskImage: `url(${RightArrowIcon.src})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
};

const BOTTOM_OVERLAY_LAYER_CLASS_NAMES = [
    'pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[15%] bg-black/[0.006] backdrop-blur-[2px]',
    'pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[25%] bg-black/[0.007] backdrop-blur-[1.5px]',
    'pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[35%] bg-black/[0.008] backdrop-blur-[1px]',
    'pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[45%] bg-black/[0.009] backdrop-blur-[0.5px]',
    'pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[55%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.15)_100%)]',
] as const;

interface MediaShowcaseActionLinkProps {
    action: MediaShowcaseAction;
    ariaLabel: string;
    className: string;
    children: ReactNode;
}

function MediaShowcaseActionLink({ action, ariaLabel, className, children }: MediaShowcaseActionLinkProps) {
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

export function MediaShowcaseActionButton({
    action,
    isSectionActive = false,
}: {
    action: MediaShowcaseAction;
    isSectionActive?: boolean;
}) {
    const variant = action.variant ?? 'full';
    const label = action.label ?? 'FULL VIDEO';

    if (variant === 'icon') {
        return (
            <MediaShowcaseActionLink
                action={action}
                ariaLabel={action.ariaLabel ?? 'Open page media'}
                className={classNames(
                    ACTION_BUTTON_BASE_CLASS_NAME,
                    'justify-center bg-white/[0.11] px-2 py-[10px] hover:bg-white/[0.17]',
                    isSectionActive && 'media-showcase-btn-loop-down'
                )}
            >
                <Image
                    src={DownArrowIcon}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="h-4 w-4 shrink-0"
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
                    ACTION_BUTTON_BASE_CLASS_NAME,
                    'gap-[10px] px-4 py-[10px] font-ibm-mono text-[14px] font-semibold leading-5 tracking-[0.02em]',
                    isMutedExplore
                        ? '!bg-[rgba(86,86,86,0.11)] !text-[#565656] !hover:bg-[rgba(86,86,86,0.17)]'
                        : 'bg-white/[0.11] text-[#F3F4F9] hover:bg-white/[0.17]'
                )}
            >
                <span className="whitespace-nowrap">{label}</span>
                <span
                    aria-hidden="true"
                    className={classNames(
                        'h-3 w-3 bg-current',
                        ACTION_BUTTON_ICON_MOTION_CLASS_NAME,
                        isSectionActive && 'media-showcase-icon-loop-right'
                    )}
                    style={RIGHT_ARROW_MASK_STYLE}
                />
            </MediaShowcaseActionLink>
        );
    }

    return (
        <MediaShowcaseActionLink
            action={action}
            ariaLabel={action.ariaLabel ?? label}
            className={classNames(
                ACTION_BUTTON_BASE_CLASS_NAME,
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
                className={classNames(
                    'h-3 w-3',
                    ACTION_BUTTON_ICON_MOTION_CLASS_NAME,
                    isSectionActive && 'media-showcase-icon-loop-right'
                )}
            />
        </MediaShowcaseActionLink>
    );
}

interface MediaShowcaseTextBlockProps {
    header?: string;
    title: string;
    titleContent?: ReactNode;
    description: string;
    descriptionContent?: ReactNode;
    titleColor?: string;
    descriptionColor?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export function MediaShowcaseTextBlock({
    header,
    title,
    titleContent,
    description,
    descriptionContent,
    titleColor,
    descriptionColor,
    titleClassName,
    descriptionClassName,
}: MediaShowcaseTextBlockProps) {
    return (
        <div className="max-w-[480px]">
            {header && (
                <p className="mb-4 font-ibm-mono text-[14px] font-medium uppercase leading-[1.4] tracking-[0.1em] text-[#F3F4F9]">
                    {header}
                </p>
            )}
            <h1
                className={classNames(
                    'font-general-sans text-[28px] font-normal leading-[1] tracking-[-0.01em] text-[#F3F4F9] tablet:text-[32px]',
                    titleClassName
                )}
                style={titleColor ? { color: titleColor } : undefined}
            >
                {titleContent ?? title}
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

function MediaShowcaseCarouselArrowButton({
    onClick,
    ariaLabel,
    className,
    icon,
}: {
    onClick: () => void;
    ariaLabel: string;
    className: string;
    icon: typeof LeftArrowIcon;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={ariaLabel}
            className={classNames(
                'carousel-arrow-btn absolute top-1/2 z-20 inline-flex h-[38px] w-[58px] -translate-y-1/2 items-center justify-center rounded-[8px] px-[18px] py-[8px] transition-opacity hover:opacity-80',
                className
            )}
        >
            <Image src={icon} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
        </button>
    );
}

export function MediaShowcaseCarouselControls({
    onPrevious,
    onNext,
}: {
    onPrevious: () => void;
    onNext: () => void;
}) {
    return (
        <>
            <MediaShowcaseCarouselArrowButton
                onClick={onPrevious}
                ariaLabel="Previous slide"
                className="left-4 tablet:left-6 desktop:left-8"
                icon={LeftArrowIcon}
            />
            <MediaShowcaseCarouselArrowButton
                onClick={onNext}
                ariaLabel="Next slide"
                className="right-4 tablet:right-6 desktop:right-8"
                icon={RightArrowIcon}
            />
        </>
    );
}

export function MediaShowcaseSpecRowsBlock({
    config,
    className,
}: {
    config: MediaShowcaseSpecRowsConfig;
    className?: string;
}) {
    return (
        <SpecRows
            rows={config.rows}
            className={classNames(className, config.className)}
            heading={config.heading}
            headingColor={config.headingColor}
            headerColor={config.headerColor}
            textColor={config.textColor}
            borderColor={config.borderColor}
        />
    );
}

export function MediaShowcaseSideContent({
    specRowsConfig,
    metricsConfig,
    actionPanelConfig,
    isSectionActive,
}: {
    specRowsConfig: MediaShowcaseSpecRowsConfig;
    metricsConfig: MediaShowcaseMetricsConfig;
    actionPanelConfig: MediaShowcaseActionPanelConfig;
    isSectionActive: boolean;
}) {
    const hasSpecRows = specRowsConfig.rows.length > 0;
    const hasMetrics = Boolean(metricsConfig.metrics?.length);

    if (hasSpecRows && specRowsConfig.placement !== 'top') {
        return (
            <div className="w-full tablet:mb-1 tablet:w-auto tablet:shrink-0">
                <MediaShowcaseSpecRowsBlock config={specRowsConfig} />
            </div>
        );
    }

    if (hasMetrics) {
        return (
            <div className="tablet:mb-1">
                <FlipCounter
                    metrics={metricsConfig.metrics ?? []}
                    valueColor={metricsConfig.valueColor}
                    unitColor={metricsConfig.unitColor}
                    accentColor={metricsConfig.accentColor}
                />
            </div>
        );
    }

    if (!actionPanelConfig.action) {
        return null;
    }

    const actionInfo = actionPanelConfig.info;

    return (
        <div className="tablet:mb-1 flex flex-col items-start gap-[80px] tablet:items-end">
            {actionInfo && (
                <div
                    className={classNames(
                        'max-w-[160px] pr-2',
                        actionInfo.hideOnMobile !== false && 'hidden tablet:block',
                        actionInfo.className
                    )}
                >
                    <p className="font-ibm-mono text-[14px] font-medium leading-[1.4] tracking-[0.02em] text-[#F3F4F9]">
                        {actionInfo.heading}
                    </p>
                    <p className="mt-2 font-ibm-mono text-[16px] font-medium leading-[1.4] tracking-[-0.01em] text-white/60">
                        {actionInfo.description}
                    </p>
                </div>
            )}
            <MediaShowcaseActionButton action={actionPanelConfig.action} isSectionActive={isSectionActive} />
        </div>
    );
}

export function MediaShowcaseMediaLayer({
    media,
    mediaClassName,
}: {
    media: MediaShowcaseResolvedMedia;
    mediaClassName?: string;
}) {
    if (media.backgroundVideoUrl) {
        return (
            <video
                className={classNames('absolute inset-0 h-full w-full object-cover object-top', mediaClassName)}
                autoPlay
                muted
                loop
                playsInline
                poster={typeof media.image === 'string' ? media.image : media.image.src}
            >
                <source src={media.backgroundVideoUrl} />
            </video>
        );
    }

    return (
        <Image src={media.image} alt={media.imageAlt} priority fill className={classNames('object-cover object-top', mediaClassName)} />
    );
}

export function MediaShowcaseBottomOverlay() {
    return (
        <>
            {BOTTOM_OVERLAY_LAYER_CLASS_NAMES.map((layerClassName) => (
                <div key={layerClassName} aria-hidden="true" className={layerClassName} />
            ))}
        </>
    );
}
