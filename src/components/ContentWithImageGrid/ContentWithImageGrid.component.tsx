'use client';
import React from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';

export interface ContentWithImageGridProps {
    title: string;
    superTitle: string;
    description: string;
    image: StaticImageData;
    reverse?: boolean;
}

function ContentWithImageGrid({ title, superTitle, description, image, reverse }: ContentWithImageGridProps) {
    return (
        <section>
            <Container>
                <div
                    className={classNames('flex items-center gap-[110px]', {
                        'flex-row-reverse': reverse,
                    })}
                >
                    <div className="w-1/2 shrink-0">
                        <Image src={image} alt={title} />
                    </div>
                    <div>
                        <h3 className="text-white text-[40px] leading-[52px] relative inline-block mb-[60px]">
                            {title}
                            <span
                                className="text-standard-4 text-sm absolute top-0 left-full pl-3"
                                style={ibm_mono.style}
                            >
                                {superTitle}
                            </span>
                        </h3>
                        <p className="text-white text-base whitespace-pre-line">{description}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default ContentWithImageGrid;
