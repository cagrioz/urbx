import Navigation from '@/components/Navigation';
import Image from 'next/image';
import UrbxHero from '@/assets/hero_bg.jpg';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';

export default function Hero() {
    return (
        <section className="relative flex flex-col min-h-[800px] pt-5 pb-20">
            <Navigation />
            <Container className="relative z-10 w-full grow flex flex-col justify-between">
                <div className="mt-20">
                    <p className="text-standard-4 text-sm font-medium uppercase" style={ibm_mono.style}>
                        Urbx - The Vertical Revolution
                    </p>
                    <h1 className="mt-4 text-white text-[40px] leading-tight max-w-[547px]">
                        <b>Coming Soon:</b> AI-Driven Dual Grid Robotics in 3D Space.
                    </h1>
                </div>
                <div className="w-60 bg-black rounded-[20px] p-4">
                    <div>
                        <span className="text-white text-base font-semibold">Watch Video</span>
                    </div>
                </div>
            </Container>
            <Image src={UrbxHero} alt="Urbx Hero" layout="fill" className="z-0" />
        </section>
    );
}
