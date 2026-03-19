import { useCallback, useEffect, useState, type RefObject } from 'react';
import type { MediaShowcaseCarouselSlide, MediaShowcaseResolvedMedia } from './MediaShowcase.types';

interface UseMediaShowcaseCarouselOptions {
    slides?: MediaShowcaseCarouselSlide[];
    fallbackMedia: MediaShowcaseResolvedMedia;
}

interface UseMediaShowcaseCarouselResult {
    activeMedia: MediaShowcaseResolvedMedia;
    hasControls: boolean;
    onPrevious: () => void;
    onNext: () => void;
}

export function useMediaShowcaseCarousel({
    slides,
    fallbackMedia,
}: UseMediaShowcaseCarouselOptions): UseMediaShowcaseCarouselResult {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const totalSlides = slides?.length ?? 0;
    const hasControls = totalSlides > 1;

    useEffect(() => {
        if (totalSlides <= 0) {
            setActiveSlideIndex(0);
            return;
        }

        setActiveSlideIndex((previousIndex) => (previousIndex < totalSlides ? previousIndex : 0));
    }, [totalSlides]);

    const onPrevious = useCallback(() => {
        if (!hasControls) {
            return;
        }

        setActiveSlideIndex((previousIndex) => (previousIndex - 1 + totalSlides) % totalSlides);
    }, [hasControls, totalSlides]);

    const onNext = useCallback(() => {
        if (!hasControls) {
            return;
        }

        setActiveSlideIndex((previousIndex) => (previousIndex + 1) % totalSlides);
    }, [hasControls, totalSlides]);

    const safeSlideIndex = totalSlides > 0 ? ((activeSlideIndex % totalSlides) + totalSlides) % totalSlides : 0;
    const activeSlide = totalSlides > 0 ? slides?.[safeSlideIndex] : undefined;

    return {
        activeMedia: {
            image: activeSlide?.image ?? fallbackMedia.image,
            imageAlt: activeSlide?.imageAlt ?? fallbackMedia.imageAlt,
            backgroundVideoUrl: activeSlide?.backgroundVideoUrl ?? fallbackMedia.backgroundVideoUrl,
        },
        hasControls,
        onPrevious,
        onNext,
    };
}

export function useSectionActivity(
    sectionRef: RefObject<HTMLElement | null>,
    isEnabled: boolean
): boolean {
    const [isSectionActive, setIsSectionActive] = useState(false);

    useEffect(() => {
        if (!isEnabled || !sectionRef.current) {
            setIsSectionActive(false);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isActive = entry.isIntersecting && entry.intersectionRatio >= 0.35;
                setIsSectionActive(isActive);
            },
            {
                threshold: [0, 0.35, 0.6, 1],
            }
        );

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, [isEnabled, sectionRef]);

    return isSectionActive;
}
