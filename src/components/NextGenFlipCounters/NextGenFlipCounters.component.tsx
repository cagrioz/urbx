'use client';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

export interface FlipCounterMetric {
    value: number;
    unit: string;
}

interface NextGenFlipCountersProps {
    metrics: FlipCounterMetric[];
    className?: string;
    durationMs?: number;
    staggerMs?: number;
}

const DIGIT_HEIGHT_PX = 50;
const RECOMMENDED_DURATION_MIN_MS = 800;
const RECOMMENDED_DURATION_MAX_MS = 1400;
const RECOMMENDED_STAGGER_MIN_MS = 100;
const RECOMMENDED_STAGGER_MAX_MS = 200;
const DEFAULT_DURATION_MS = 980;
const DEFAULT_STAGGER_MS = 140;

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

function formatMetricValue(value: number) {
    return Math.round(value).toLocaleString('en-US');
}

function maskDigitsWithZero(valueText: string) {
    return valueText.replace(/\d/g, '0');
}

function OdometerValue({
    valueText,
    shouldAnimate,
    prefersReducedMotion,
    durationMs,
    delayMs,
}: {
    valueText: string;
    shouldAnimate: boolean;
    prefersReducedMotion: boolean;
    durationMs: number;
    delayMs: number;
}) {
    if (prefersReducedMotion) {
        const content = shouldAnimate ? valueText : maskDigitsWithZero(valueText);

        return (
            <span className="inline-flex items-center font-general-sans text-[50px] font-normal leading-[1] tracking-[-0.01em] text-black">
                {content}
            </span>
        );
    }

    const chars = valueText.split('');

    return (
        <span className="inline-flex items-center tabular-nums">
            {chars.map((char, index) => {
                if (!/\d/.test(char)) {
                    return (
                        <span
                            key={`${char}-${index}`}
                            className="mx-[1px] font-general-sans text-[50px] font-normal leading-[1] tracking-[-0.01em] text-black tabular-nums"
                        >
                            {char}
                        </span>
                    );
                }

                const targetDigit = Number(char);
                const extraTurns = 4;
                const rows = Array.from({ length: (extraTurns + 1) * 10 }, (_, rowIndex) => rowIndex % 10);
                const targetIndex = extraTurns * 10 + targetDigit;
                const translateY = shouldAnimate ? -(targetIndex * DIGIT_HEIGHT_PX) : 0;
                const totalSteps = Math.max(targetIndex + 1, 16);

                return (
                    <span key={`${char}-${index}`} className="relative inline-flex h-[50px] w-[30px] overflow-hidden align-bottom">
                        <span
                            className="flex flex-col will-change-transform"
                            style={
                                shouldAnimate
                                    ? {
                                          transform: `translateY(${translateY}px)`,
                                          transitionProperty: 'transform',
                                          transitionDuration: `${durationMs}ms`,
                                          transitionDelay: `${delayMs}ms`,
                                          transitionTimingFunction: `steps(${totalSteps}, end)`,
                                      }
                                    : { transform: 'translateY(0px)' }
                            }
                        >
                            {rows.map((digit, rowIndex) => (
                                <span
                                    key={rowIndex}
                                    className="flex h-[50px] items-center justify-center font-general-sans text-[50px] font-normal leading-[1] tracking-[-0.01em] text-black tabular-nums"
                                >
                                    {digit}
                                </span>
                            ))}
                        </span>
                    </span>
                );
            })}
        </span>
    );
}

function FlipMetric({
    metric,
    shouldAnimate,
    prefersReducedMotion,
    durationMs,
    delayMs,
}: {
    metric: FlipCounterMetric;
    shouldAnimate: boolean;
    prefersReducedMotion: boolean;
    durationMs: number;
    delayMs: number;
}) {
    const formattedValue = formatMetricValue(metric.value);

    return (
        <div className="flex flex-col" role="text" aria-label={`${formattedValue} ${metric.unit}`}>
            <span className="sr-only">
                {formattedValue} {metric.unit}
            </span>
            <div aria-hidden="true" className="flex items-center gap-2">
                <span className="h-[23px] w-[4px] rounded-[1px] bg-[#00A5E2]" />

                <OdometerValue
                    valueText={formattedValue}
                    shouldAnimate={shouldAnimate}
                    prefersReducedMotion={prefersReducedMotion}
                    durationMs={durationMs}
                    delayMs={delayMs}
                />
            </div>

            <div aria-hidden="true" className="mt-1 flex items-center gap-0.5 pl-[12px] font-ibm-mono leading-[1.4]">
                <span className="text-[14px] font-normal text-[#00A5E2]">[</span>
                <span className="text-[16px] font-normal text-[#565656]/60">{metric.unit}</span>
                <span className="text-[14px] font-normal text-[#00A5E2]">]</span>
            </div>
        </div>
    );
}

export default function NextGenFlipCounters({
    metrics,
    className,
    durationMs = DEFAULT_DURATION_MS,
    staggerMs = DEFAULT_STAGGER_MS,
}: NextGenFlipCountersProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [hasStarted, setHasStarted] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const normalizedDurationMs = clamp(durationMs, RECOMMENDED_DURATION_MIN_MS, RECOMMENDED_DURATION_MAX_MS);
    const normalizedStaggerMs = clamp(staggerMs, RECOMMENDED_STAGGER_MIN_MS, RECOMMENDED_STAGGER_MAX_MS);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

        handleMotionPreference();
        mediaQuery.addEventListener('change', handleMotionPreference);

        return () => {
            mediaQuery.removeEventListener('change', handleMotionPreference);
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current || hasStarted) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.35,
            }
        );

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, [hasStarted]);

    return (
        <div ref={containerRef} className={classNames('flex items-end gap-10 tablet:gap-14 desktop:gap-16', className)}>
            {metrics.map((metric, index) => (
                <FlipMetric
                    key={`${metric.unit}-${metric.value}-${index}`}
                    metric={metric}
                    shouldAnimate={hasStarted}
                    prefersReducedMotion={prefersReducedMotion}
                    durationMs={normalizedDurationMs}
                    delayMs={index * normalizedStaggerMs}
                />
            ))}
        </div>
    );
}
