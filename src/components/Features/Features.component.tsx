import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';

import FadedLine from '@/assets/faded_line_bordered.png';

type FeatureItem = {
    title: string;
    description: string;
};

export interface FeaturesProps {
    title?: string;
    features: FeatureItem[];
    image: StaticImageData;
}

export default function Features({ title, features, image }: FeaturesProps) {
    return (
        <section className="bg-black py-[20px] laptop:py-[60px]">
            {title && (
                <Container>
                    <p className="text-standard-4 text-sm font-medium uppercase" style={ibm_mono.style}>
                        URBX Specs{' '}
                    </p>
                </Container>
            )}
            <Image src={FadedLine} alt="Faded Line" className="mx-auto mt-8" />
            <Container>
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6 gap-x-8 laptop:gap-x-12 mt-8">
                    {features.map((feature, index) => (
                        <div key={index}>
                            <h3 className="text-white text-2xl">{feature.title}</h3>
                            <p className="text-standard-4 text-[13px] leading-5 mt-3">{feature.description}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <Image src={image} alt="URBX Features" className="mt-10 rounded-[10px]" />
                </div>
            </Container>
        </section>
    );
}
