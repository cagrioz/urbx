'use client';
import React, { ReactNode } from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';

type StackedHighlightTextProps = {
    subtitle: string;
    description: ReactNode;
    title: ReactNode;
};

function StackedHighlightText({ subtitle, title, description }: StackedHighlightTextProps) {
    return (
        <section className="py-[120px]">
            <Container>
                <p
                    className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase text-center tracking-widest"
                    style={ibm_mono.style}
                >
                    {subtitle}
                </p>
                <h3 className="mt-3 text-white text-3xl laptop:text-[40px] laptop:leading-[52px] text-center laptop:max-w-[547px] mx-auto">
                    {title}
                </h3>
                <p className="mt-[120px] text-white text-2xl laptop:text-[32px] laptop:leading-10 max-w-[886px] text-center mx-auto tracking-[-0.5px] font-light">
                    {description}
                </p>
            </Container>
        </section>
    );
}

export default StackedHighlightText;
