'use client';
import React, { ReactNode } from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';

const people = [
    {
        name: 'Andrew Breckenridge',
        role: 'Board Member',
        description:
            'Andrew has over 30 years of executive global supply chain experience, helping industry leaders and organizations transform their businesses through supply chain capability and enablement to achieve challenging business goals. He is currently an Executive VP and Strategic Adviser to FORTNA, and has previously served in various leadership positions with Aero Fulfillment Services, Melbourne Markets (Australia), and several years consulting in the supply chain arena with Price Waterhouse.',
    },
    {
        name: 'Lincoln Cavalieri',
        role: 'Board Member & CEO',
        description:
            'Lincoln possesses extensive experience in software design and product development. Before his time at Urbx, he founded Omega Group, spearheading the development of products and software solutions for notable entities like BlackRock, Stryker, and several other Fortune 500 companies.',
    },
    {
        name: 'Lincoln Sise',
        role: 'Board Member-Elect & COO',
        description:
            'Lincoln is a seasoned operations professional with a diverse background in leadership roles. He spent seven years at Symbotic, where he held various positions including VP of Implementation, Supply Chain, Manufacturing, and Project Management. Prior to his time at Symbotic, Lincoln spent 14 years at Raytheon (RTX), where he managed large-scale operations, overseeing factories with over 1000 employees in Florida and Texas.',
    },
    {
        name: 'Jake Gearwar',
        role: 'CFO',
        description:
            'Jake has over 20 years of financial, operational, and business experience at both public and private companies. Prior to Urbx, Jake spent over 12 years at Symbotic, most recently as VP of Financial Planning & Analysis, and helped grow the company from a private startup to a billion-dollar public company.',
    },
    {
        name: 'Joseph Fleming',
        role: 'Board Member',
        description:
            'Joseph is a lawyer with more than 35 years of corporate and securities legal experience. He has served as legal counsel to private and public companies and funds advising clients on complex corporate transactional matters, fund formation, board governance, and regulatory compliance matters.',
    },
    {
        name: 'Rudi Lueg',
        role: 'CRO',
        description:
            'Rudi was Managing Director of Exotec North America, an international supplier of robotic systems for the supply chain. He joins the team with three decades of experience in the supply chain industry, including leadership positions at KNAPP, Fortna, and SDI among others.',
    },
    {
        name: 'Nikko Pianetto',
        role: 'Board Member',
        description:
            'Nikko has extensive experience in supply chain and organizational leadership. Before joining URBX, he was the Executive Vice President of Professional Services at Fortna and also served as the Vice President of Software Engineering for Daifuku/Wynright. Nikko is currently a partner at an investment firm focusing on angel level startup investing.',
    },
];

function Team() {
    return (
        <section className="pt-[60px] laptop:pt-[120px] pb-[60px]">
            <Container>
                <p
                    className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase text-center tracking-widest"
                    style={ibm_mono.style}
                >
                    The People
                </p>
                <p className="mt-3 text-white text-2xl laptop:text-[32px] laptop:leading-10 max-w-[886px] text-center mx-auto tracking-[-0.5px] font-light">
                    Urbx <span className="font-semibold">Leadership</span>
                </p>
                <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4 tablet:gap-6 mt-10 tablet:mt-[60px]">
                    {people.map((person) => (
                        <div
                            key={person.name}
                            className="bg-white px-4 py-5 tablet:px-6 tablet:pt-5 tablet:pb-10 rounded-[20px]"
                        >
                            <h4 className="text-black text-lg tablet:text-xl font-semibold">{person.name}</h4>
                            <p
                                className="mt-1.5 text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-wide tablet:tracking-widest"
                                style={ibm_mono.style}
                            >
                                {person.role}
                            </p>
                            <p className="mt-3 tablet:mt-6 text-sm text-standard-3">{person.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Team;
