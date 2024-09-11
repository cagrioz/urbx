'use client';
import React from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';

export interface FeatureShowcaseWithDetailsProps {
    title: string;
    description: string;
    bgImage: StaticImageData;
    showcaseImage: StaticImageData;
}

function FeatureShowcaseWithDetails({ title, description, bgImage, showcaseImage }: FeatureShowcaseWithDetailsProps) {
    return (
        <section className="bg-black relative overflow-hidden">
            <div className="laptop h-fit desktop:h-[450px] overflow-hidden">
                <Image src={bgImage} alt={title} />
            </div>
            <Container>
                <div className="flex flex-col tablet:flex-row pt-[60px] pb-24 laptop:pb-40 desktop:pb-[175px] gap-10">
                    <div className="tablet:w-1/2 laptop:w-[450px] shrink-0">
                        <h3 className="text-white text-[40px] leading-tight">{title}</h3>
                        <p className="text-white text-base mt-8 tracking-wide">{description}</p>
                    </div>
                    <div className="relative z-40 w-full grow hidden laptop:block">
                        <div className="w-[653px] h-[500px] desktop:w-[854px] desktop:h-[653px] absolute -top-[200px]  desktop:-top-[350px] -right-[150px] desktop:-right-[300px]">
                            <Image src={showcaseImage} alt={title} />
                        </div>
                    </div>
                    <div className="block laptop:hidden tablet:w-1/2 shrink max-w-[400px] tablet:max-w-[auto]">
                        <Image src={showcaseImage} alt={title} className="w-full" />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default FeatureShowcaseWithDetails;
