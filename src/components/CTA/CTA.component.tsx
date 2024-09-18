'use client';
import React, { ReactNode } from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import ButtonLink from '../ButtonLink';
import { ButtonLinkVariants } from '@/components/ButtonLink';
import { SimpleCta } from '@/types';

export interface CTAProps {
    title: ReactNode;
    ctaVariant: ButtonLinkVariants;
    cta: SimpleCta;
}

export default function CTA({ title, ctaVariant, cta }: CTAProps) {
    return (
        <section className="bg-black pb-10">
            <Container>
                <div className="bg-standard-7 rounded-3xl p-4 tablet:p-6">
                    <div className="border border-dashed rounded-[10px] border-standard-2/30 pt-14 pb-[76px] px-4 text-center">
                        <p
                            className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-wide tablet:tracking-widest"
                            style={ibm_mono.style}
                        >
                            Connect With Us
                        </p>
                        <h2 className="text-black text-3xl leading-9 laptop:text-[40px] laptop:leading-[52px] font-general-sans mt-2 laptop:mt-4">
                            {title}
                        </h2>
                        <ButtonLink
                            href={cta.href}
                            className="mt-6 laptop:mt-10 uppercase py-3.5 px-6 laptop:py-4.5 laptop:px-[38px]"
                            variant={ctaVariant}
                        >
                            {cta.text}
                        </ButtonLink>
                    </div>
                </div>
            </Container>
        </section>
    );
}
