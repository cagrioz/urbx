import React from 'react';
import Container from '../Container';
import Image from 'next/image';

import OverviewImg from '@/assets/overview.png';

export default function Overview() {
    return (
        <section className="relative flex flex-col py-16 bg-black">
            <Container className="text-center pb-20">
                <h3 className="text-white text-[32px] leading-10 max-w-[680px]">
                    Our fully automated system leverages advanced robotics to <b>optimize efficiency, accuracy,</b> and
                    <b>speed,</b> ensuring your business stays ahead of the competition.
                </h3>
            </Container>
            <div>
                <Image src={OverviewImg} alt="Overview" className="max-h-[770px] w-auto mx-auto" />
            </div>
        </section>
    );
}
