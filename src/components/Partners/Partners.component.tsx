'use client';
import Container from '@/components/Container';
import Image from 'next/image';
import DCSLogo from '@/assets/dcs.png';
import ISDLogo from '@/assets/isd.png';
import HytekLogo from '@/assets/hytek.png';
import CarterLogo from '@/assets/carter.png';
import MainwayLogo from '@/assets/mainway.png';
import YargoLogo from '@/assets/yargo.png';
import AbcoLogo from '@/assets/abco.png';
import BeaconLogo from '@/assets/beacon.png';

const partners = [DCSLogo, ISDLogo, HytekLogo, CarterLogo, MainwayLogo, YargoLogo, AbcoLogo, BeaconLogo];

export default function Partners() {
    return (
        <section className="pt-[60px] pb-[80px] tablet:py-[80px] tablet:pb-[100px] desktop:pt-[120px] desktop:pb-[170px] overflow-hidden">
            <Container>
                <h2 className="text-2xl text-white text-center mb-10">Our Partners</h2>
            </Container>
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee flex">
                    {partners.map((partner, index) => (
                        <div key={index} className="w-80 h-60 flex-shrink-0 mx-3 flex items-center justify-center">
                            <Image src={partner} alt="partner" loading="eager" />
                        </div>
                    ))}
                </div>
                <div className="animate-marquee flex">
                    {partners.map((partner, index) => (
                        <div key={index} className="w-80 h-60 flex-shrink-0 mx-3 flex items-center justify-center">
                            <Image src={partner} alt="partner" loading="eager" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
