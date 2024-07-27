import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';

import WhyUsImage from '@/assets/why_us.jpg';
import Image from 'next/image';

export default function WhyUs() {
    return (
        <section className="bg-black py-20">
            <Container>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-2 text-white">
                    <div>
                        <p className="text-standard-4 text-sm font-medium uppercase" style={ibm_mono.style}>
                            The URbx System
                        </p>
                        <h2 className="text-[32px] leading-10 max-w-[434px] mt-5">
                            Intelligent robotics powers <b>omni - channel</b> fulfillment
                        </h2>
                    </div>
                    <p className="text-base font-light">
                        Urbx offers a fully automated system, incorporating multiple TowerBots and a conveyor to
                        transport products to specific pick stations for order consolidation. This automation minimizes
                        human errors, enhancing overall efficiency and quality. With the industry&apos;s fastest item
                        retrieval times, the Urbx system is unmatched in performance.
                    </p>
                </div>
                <div className="relative mt-10 rounded-[20px] overflow-hidden">
                    <Image src={WhyUsImage} alt="Why Us" />
                </div>
            </Container>
        </section>
    );
}
