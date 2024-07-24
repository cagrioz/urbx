import Navigation from '@/components/Navigation';
import Image from 'next/image';
import UrbxHero from '@/assets/hero_bg.jpg';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';

export default function WhyUs() {
    return (
        <section className="bg-black">
            <Container>
                <div className="grid grid-cols-2">
                    <div>
                        <p className="text-standard-4 text-sm font-medium uppercase" style={ibm_mono.style}>
                            The URbx System
                        </p>
                        <h2>
                            Intelligent robotics powers <b>omni - channel</b> fulfillment
                        </h2>
                    </div>
                    <p>
                        Urbx offers a fully automated system, incorporating multiple TowerBots and a conveyor to
                        transport products to specific pick stations for order consolidation. This automation minimizes
                        human errors, enhancing overall efficiency and quality. With the industry&apos;s fastest item
                        retrieval times, the Urbx system is unmatched in performance.
                    </p>
                </div>
            </Container>
        </section>
    );
}
