'use client';
import Container from '@/components/Container';
import Image from 'next/image';
import DCSLogo from '@/assets/dcs.png';
import CarterLogo from '@/assets/carter.png';
import MainwayLogo from '@/assets/mainway.png';
import YargoLogo from '@/assets/yargo.png';
import AbcoLogo from '@/assets/abco.png';

const partners = [DCSLogo, CarterLogo, MainwayLogo, YargoLogo, AbcoLogo];

export default function Partners() {
    return (
        <section className="bg-black pt-[120px] pb-[170px] overflow-hidden">
            <Container>
                <h2 className="text-2xl text-white text-center mb-10">Our Partners</h2>
            </Container>
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee flex">
                    {partners.map((partner, index) => (
                        <div key={index} className="w-80 h-60 flex-shrink-0 mx-3">
                            <Image src={partner} alt="partner" />
                        </div>
                    ))}
                </div>
                <div className="animate-marquee flex">
                    {partners.map((partner, index) => (
                        <div key={index} className="w-80 h-60 flex-shrink-0 mx-3">
                            <Image src={partner} alt="partner" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
