'use client';
import Container from '@/components/Container';
import Image from 'next/image';
import DCSLogo from '@/assets/plain_dcs.png';
import ISDLogo from '@/assets/plain_isd.png';
import HytekLogo from '@/assets/plain_hytek.png';
import CarterLogo from '@/assets/plain_carter.png';
import MainwayLogo from '@/assets/plain_mainway.png';
import VargoLogo from '@/assets/plain_vargo.png';
import AbcoLogo from '@/assets/plain_abco.png';
import { ibm_mono } from '@/styles/fonts';

const partners = [
    {
        logo: DCSLogo,
        description:
            'Design Conveyor Systems has been Urbx’s first partner, boasting over 40 years of experience in material handling, full-scale warehouse operations, and conveyor design. Founded in 1982, Design Conveyors offers a wide range of services, including supply chain consulting, customer support, and systems design integration. ',

        location: 'DCS - Nasvhille, TN',
        website: 'https://www.designedconveyor.com/',
    },
    {
        logo: AbcoLogo,
        description:
            'ABCO systems is one of Urbx’s esteemed partners, specializing in warehouse design. From the outset, ABCO has collaborated with Urbx, establishing itself as a leader in warehouse automation and design. They offer a comprehensive range of services to meet customer needs, making them a one-stop shop for warehouse design and providing expertise throughout the entire process. ',
        location: 'ABCO System - Carlstadt, NJ',
        website: 'https://www.abcosystems.net/',
    },
    {
        logo: MainwayLogo,
        description:
            'Mainway Handling specializes in optimizing warehouse operations and driving efficiency. With prestigious partners such as FedEx, Ikea, and Staples, Mainway offers expertise across a broad range of services. These include conveyor systems, sortation systems, goods-to-person solutions, pick towers, truck loading and unloading, and many more. ',
        location: 'Mainway - Ontario, Canada',
        website: 'https://www.mainwayhandling.com/',
    },
    {
        logo: CarterLogo,
        description:
            'Carter Intralogistics specializes in automation and custom equipment integration. Carter automation solutions and material handling expertise across various industries, including e-commerce, distribution and fulfillment, postal and parcel, reverse logistics, food and beverage, and more. Their services encompass solution design, retrofits, parts and services, as well as scheduled and resident maintenance. ',
        location: 'Carter Intralogistics - Fredrick, MD',
        website: 'https://www.carterintralogistics.com/',
    },
    {
        logo: VargoLogo,
        description:
            'Vargo Solutions specializes in e-commerce fulfillment, serving prominent customers such as American Eagle, WineDirect, Forever21, and many others. Vargo Solutions supports a diverse range of industries, including e-commerce, wholesale, retail, and manufacturing, by streamlining the fulfillment process. ',
        location: 'Vargo - Dublin, Ohio ',
        website: 'https://www.vargosolutions.com/',
    },
    {
        logo: ISDLogo,
        description:
            'Integrated Systems Design (ISD) specializes in delivering scalable automated solutions for a variety of sectors, including automotive, manufacturing, distribution, retail, and wholesale. ISD offers a comprehensive suite of services that encompasses consulting, system design, integration, industrial controls, and customer support, all tailored to meet the specific needs of each client. ',
        location: 'ISD - Wixom, MI ',
        website: 'https://isddd.com/',
    },
    {
        logo: HytekLogo,
        description:
            'Hytek Automation specializes in providing cutting-edge automation solutions to a wide range of industries. Their services include conveyor systems, sortation systems, robotic solutions, and many more. ',
        location: 'Hy-tek Intralogistics - Columbus, OH ',
        website: 'https://www.hy-tek.com/',
    },
];

export default function PartnersDetails() {
    return (
        <section className="pb-12 tablet:pb-20 laptop:pb-[120px] overflow-hidden">
            <Container>
                <h2 className="text-2xl laptop:text-[32px] laptop:leading-10 text-white text-center mb-12 tablet:mb-16 laptop:mb-40 laptop:w-[576px] mx-auto">
                    Our esteemed partners form the foundation of Urbx’s success, making all our achievements possible.
                </h2>
                <div className="flex flex-col gap-5">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex flex-col tablet:flex-row px-8 py-8 desktop:px-[60px] desktop:py-10 gap-6 tablet:gap-8 laptop:gap-[60px] border border-dashed border-standard-3/70 rounded-2xl"
                        >
                            <div className="tablet:w-1/3 laptop:w-auto grow flex flex-col justify-between gap-6 tablet:gap-8">
                                <div>
                                    <Image src={partner.logo} alt="partner" height={50} />
                                </div>
                                <p
                                    className="mt-1.5 text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-wide tablet:tracking-widest"
                                    style={ibm_mono.style}
                                >
                                    {partner.location}
                                </p>
                            </div>
                            <div className="tablet:w-2/3 laptop:w-[684px] flex flex-col gap-6 tablet:gap-8 laptop:gap-[60px] justify-between">
                                <p className="text-white text-base">{partner.description}</p>
                                <p>
                                    <a
                                        href={partner.website}
                                        target="_blank"
                                        className="text-accent font-medium"
                                        style={ibm_mono.style}
                                    >
                                        Partner Website &gt;
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
