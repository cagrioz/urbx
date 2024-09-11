'use client';
import React, { ReactNode } from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';

const people = [
    {
        name: 'Joseph Fleming',
        role: 'Executive Director',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
    {
        name: 'Andrew Breckenridge',
        role: 'Executive Director',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
    {
        name: 'Nikko Pianetto',
        role: 'Executive Director',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
    {
        name: 'Lincoln Cavalieri',
        role: 'Executive Director',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
    {
        name: 'Rudi Lueg',
        role: 'Executive Director',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
    {
        name: 'Jake Gearwar',
        role: 'Executive Director',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
    {
        name: 'Lincoln Sise',
        role: 'Executive Director',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
];

function Team() {
    return (
        <section className="bg-black pt-[60px] laptop:pt-[120px] pb-[60px]">
            <Container>
                <p
                    className="text-standard-4 text-sm font-medium uppercase text-center tracking-widest"
                    style={ibm_mono.style}
                >
                    The People
                </p>
                <p className="mt-6 tablet:mt-10 text-white text-[32px] leading-10 max-w-[886px] text-center mx-auto tracking-[-0.5px] font-light">
                    Urbx <b>Leadership</b>
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
