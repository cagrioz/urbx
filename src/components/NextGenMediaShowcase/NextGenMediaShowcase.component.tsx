import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import NextGenNavigation from '@/components/NextGenNavigation';
import FullVideoPlayIcon from '@/assets/version2/fullvideo_play_icon.png';
import RightArrowIcon from '@/assets/version2/arrow_right.png';

export type MediaShowcaseVariant = 'full' | 'icon' | 'explore';

export interface MediaShowcaseAction {
    href: string;
    variant?: MediaShowcaseVariant;
    label?: string;
    ariaLabel?: string;
}

export interface MediaShowcaseProps {
    image: StaticImageData | string;
    imageAlt: string;
    header?: string;
    title: string;
    description: string;
    action?: MediaShowcaseAction;
    className?: string;
    hasBottomRadius?: boolean;
    showNavigation?: boolean;
    navigationClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

function ArrowRightIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
                d="M5.25 3.5L8.75 7L5.25 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function MediaShowcaseActionButton({ action }: { action: MediaShowcaseAction }) {
    const variant = action.variant ?? 'full';
    const label = action.label ?? 'FULL VIDEO';
    const baseClassName = 'inline-flex items-center rounded-[8px] text-[#F3F4F9] transition-colors';

    if (variant === 'icon') {
        return (
            <Link
                href={action.href}
                aria-label={action.ariaLabel ?? 'Open page media'}
                className={classNames(
                    baseClassName,
                    'h-10 w-10 justify-center border border-white/40 bg-white/[0.11] hover:bg-white/[0.17]'
                )}
            >
                <ArrowRightIcon />
            </Link>
        );
    }

    if (variant === 'explore') {
        return (
            <Link
                href={action.href}
                aria-label={action.ariaLabel ?? 'Explore'}
                className={classNames(baseClassName, 'h-10 min-w-[138px] gap-2 justify-between border border-white/40 bg-white/[0.11] pl-4 pr-[10px] font-ibm-mono text-[12px] font-normal leading-5 tracking-[0.02em] hover:bg-white/[0.17]')}
            >
                <span className="whitespace-nowrap">{label}</span>
                <Image src={RightArrowIcon} alt="" aria-hidden="true" width={16} height={16} className="h-3 w-3 shrink-0" />
            </Link>
        );
    }

    return (
        <Link
            href={action.href}
            aria-label={action.ariaLabel ?? label}
            className={classNames(
                baseClassName,
                'h-10 min-w-[138px] justify-between border border-white/40 bg-white/[0.11] pl-4 pr-[10px] font-ibm-mono text-[12px] font-normal leading-5 tracking-[0.02em] hover:bg-white/[0.17] gap-2'
            )}
        >
            <span className="whitespace-nowrap">{label}</span>
            <Image src={FullVideoPlayIcon} alt="" aria-hidden="true" width={12} height={12} className="h-3 w-3 shrink-0" />
        </Link>
    );
}

export default function NextGenMediaShowcase({
    image,
    imageAlt,
    header,
    title,
    description,
    action,
    className,
    hasBottomRadius = true,
    showNavigation = true,
    navigationClassName,
    titleClassName,
    descriptionClassName,
}: MediaShowcaseProps) {
    return (
        <section
            className={classNames(
                'relative isolate overflow-hidden',
                hasBottomRadius && 'rounded-b-[18px]',
                className
            )}
        >
            <Image src={image} alt={imageAlt} priority fill className="object-cover object-top" />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-[linear-gradient(to_top,rgba(8,10,12,0.95)_0%,rgba(8,10,12,0.7)_40%,transparent_100%)]"
            />

            {showNavigation ? (
                <NextGenNavigation
                    className={classNames('absolute inset-x-0 top-0 pt-3 tablet:pt-[14px] desktop:pt-6', navigationClassName)}
                />
            ) : null}

            <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1340px] flex-col px-5 pb-9 pt-[86px] tablet:min-h-[760px] tablet:px-10 tablet:pt-[94px] tablet:pb-11 desktop:min-h-[849px] desktop:px-0 desktop:pb-[50px]">
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
                        >
                            {title}
                        </h1>
                        <p
                            className={classNames(
                                'mt-4 max-w-[560px] font-ibm-mono text-[14px] leading-[1.4] tracking-[-0.01em] text-white/60 tablet:text-[16px]',
                                descriptionClassName
                            )}
                        >
                            {description}
                        </p>
                    </div>

                    {action ? (
                        <div className="tablet:mb-1">
                            <MediaShowcaseActionButton action={action} />
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
