'use client';

import classNames from 'classnames';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CountUp } from 'countup.js';

export interface FlipCounterMetric {
    value: number | string;
    unit: string;
    valueColor?: string;
    unitColor?: string;
    accentColor?: string;
}

interface FlipCounterProps {
    metrics: FlipCounterMetric[];
    className?: string;
    durationMs?: number;
    staggerMs?: number;
    valueColor?: string;
    unitColor?: string;
    accentColor?: string;
}

const RECOMMENDED_DURATION_MIN_MS = 800;
const RECOMMENDED_DURATION_MAX_MS = 1400;
const RECOMMENDED_STAGGER_MIN_MS = 100;
const RECOMMENDED_STAGGER_MAX_MS = 200;
const DEFAULT_DURATION_MS = 980;
const DEFAULT_STAGGER_MS = 140;

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

function formatMetricValue(value: number | string) {
    if (typeof value === 'number') {
        return Math.round(value).toLocaleString('en-US');
    }

    return value;
}

function parseCountUpValue(value: number | string) {
    if (typeof value === 'number') {
        const roundedValue = Math.round(value);

        return {
            endValue: roundedValue,
            prefix: '',
            suffix: '',
            decimalPlaces: 0,
            useGrouping: true,
            finalText: roundedValue.toLocaleString('en-US'),
            startText: '0',
        };
    }

    const finalText = String(value).trim();
    const match = finalText.match(/^([^0-9+-]*)([+-]?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?)(.*)$/);

    if (!match) {
        return {
            endValue: null,
            prefix: '',
            suffix: '',
            decimalPlaces: 0,
            useGrouping: false,
            finalText,
            startText: finalText,
        };
    }

    const [, prefix, numericText, suffix] = match;
    const normalizedNumericText = numericText.replace(/,/g, '');
    const parsedNumericValue = Number.parseFloat(normalizedNumericText);

    if (!Number.isFinite(parsedNumericValue)) {
        return {
            endValue: null,
            prefix: '',
            suffix: '',
            decimalPlaces: 0,
            useGrouping: false,
            finalText,
            startText: finalText,
        };
    }

    const decimalMatch = normalizedNumericText.match(/\.(\d+)$/);
    const decimalPlaces = decimalMatch?.[1]?.length ?? 0;
    const endValue = decimalPlaces > 0 ? parsedNumericValue : Math.round(parsedNumericValue);
    const useGrouping = numericText.includes(',') || Math.abs(endValue) >= 1000;

    return {
        endValue,
        prefix,
        suffix,
        decimalPlaces,
        useGrouping,
        finalText,
        startText: `${prefix}0${suffix}`,
    };
}

function CountUpValue({
    value,
    shouldAnimate,
    prefersReducedMotion,
    durationMs,
    delayMs,
    valueColor,
}: {
    value: number | string;
    shouldAnimate: boolean;
    prefersReducedMotion: boolean;
    durationMs: number;
    delayMs: number;
    valueColor?: string;
}) {
    const parsedValue = useMemo(() => parseCountUpValue(value), [value]);
    const valueRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const valueNode = valueRef.current;
        if (!valueNode) {
            return;
        }

        if (prefersReducedMotion || parsedValue.endValue === null) {
            valueNode.textContent = parsedValue.finalText;
            return;
        }

        if (!shouldAnimate) {
            valueNode.textContent = parsedValue.startText;
            return;
        }

        const countUp = new CountUp(valueNode, parsedValue.endValue, {
            startVal: 0,
            duration: durationMs / 1000,
            decimalPlaces: parsedValue.decimalPlaces,
            useGrouping: parsedValue.useGrouping,
            separator: ',',
            prefix: parsedValue.prefix,
            suffix: parsedValue.suffix,
            useEasing: false,
        });

        const startTimer = window.setTimeout(() => {
            if (!countUp.error) {
                countUp.start();
            }
        }, delayMs);

        return () => {
            window.clearTimeout(startTimer);
        };
    }, [delayMs, durationMs, parsedValue, prefersReducedMotion, shouldAnimate]);

    return (
        <span className="relative inline-grid items-center tabular-nums align-bottom">
            <span
                aria-hidden="true"
                className="invisible font-general-sans text-[50px] font-normal leading-[1] tracking-[-0.01em] tabular-nums"
                style={valueColor ? { color: valueColor } : undefined}
            >
                {parsedValue.finalText}
            </span>
            <span
                ref={valueRef}
                className="absolute inset-0 inline-flex items-center font-general-sans text-[50px] font-normal leading-[1] tracking-[-0.01em] text-black tabular-nums"
                style={valueColor ? { color: valueColor } : undefined}
            >
                {prefersReducedMotion || parsedValue.endValue === null ? parsedValue.finalText : parsedValue.startText}
            </span>
        </span>
    );
}

function FlipMetric({
    metric,
    shouldAnimate,
    prefersReducedMotion,
    durationMs,
    delayMs,
    valueColor,
    unitColor,
    accentColor,
}: {
    metric: FlipCounterMetric;
    shouldAnimate: boolean;
    prefersReducedMotion: boolean;
    durationMs: number;
    delayMs: number;
    valueColor?: string;
    unitColor?: string;
    accentColor?: string;
}) {
    const formattedValue = formatMetricValue(metric.value);
    const resolvedValueColor = metric.valueColor ?? valueColor;
    const resolvedUnitColor = metric.unitColor ?? unitColor;
    const resolvedAccentColor = metric.accentColor ?? accentColor;

    return (
        <div className="flex flex-col" role="text" aria-label={`${formattedValue} ${metric.unit}`}>
            <span className="sr-only">
                {formattedValue} {metric.unit}
            </span>
            <div aria-hidden="true" className="flex items-center gap-2">
                <span
                    className="h-[23px] w-[4px] rounded-[1px] bg-[#00A5E2]"
                    style={resolvedAccentColor ? { backgroundColor: resolvedAccentColor } : undefined}
                />

                <CountUpValue
                    value={metric.value}
                    shouldAnimate={shouldAnimate}
                    prefersReducedMotion={prefersReducedMotion}
                    durationMs={durationMs}
                    delayMs={delayMs}
                    valueColor={resolvedValueColor}
                />
            </div>

            <div aria-hidden="true" className="mt-1 flex items-center gap-0.5 pl-[12px] font-ibm-mono leading-[1.4]">
                <span
                    className="text-[14px] font-normal text-[#00A5E2]"
                    style={resolvedAccentColor ? { color: resolvedAccentColor } : undefined}
                >
                    [
                </span>
                <span
                    className="text-[16px] font-normal text-[#565656]/60"
                    style={resolvedUnitColor ? { color: resolvedUnitColor } : undefined}
                >
                    {metric.unit}
                </span>
                <span
                    className="text-[14px] font-normal text-[#00A5E2]"
                    style={resolvedAccentColor ? { color: resolvedAccentColor } : undefined}
                >
                    ]
                </span>
            </div>
        </div>
    );
}

export default function FlipCounter({
    metrics,
    className,
    durationMs = DEFAULT_DURATION_MS,
    staggerMs = DEFAULT_STAGGER_MS,
    valueColor,
    unitColor,
    accentColor,
}: FlipCounterProps) {
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
        if (prefersReducedMotion) {
            setHasStarted(true);
            return;
        }

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
    }, [hasStarted, prefersReducedMotion]);

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
                    valueColor={valueColor}
                    unitColor={unitColor}
                    accentColor={accentColor}
                />
            ))}
        </div>
    );
}
