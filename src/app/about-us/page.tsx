import Footer from '@/components/Footer';
import StandardHero from '@/components/StandardHero';

import HeroImg from '@/assets/about_us_hero.png';
import BenefitShowcase from '@/components/BenefitShowcase';
import UrbxSystemImg from '@/assets/about_urbx_system.png';
import BenefitImg from '@/assets/accuracy_icon.png';
import Team from '@/components/Team';
import Separator from '@/components/Separator';

export default function AboutUs() {
    return (
        <>
            <StandardHero
                subtitle="About Us"
                title={
                    <>
                        The <b>global on-demand,</b>
                        <br /> fulfillment platform.
                    </>
                }
                image={HeroImg}
            />
            <BenefitShowcase
                subtitle="Urbx System"
                title={
                    <>
                        <b>Scaling Robotics</b> to drive eCommerce
                    </>
                }
                image={UrbxSystemImg}
                description="Discover the game-changing potential of Urbx's cutting-edge fulfillment system, engineered with a double deep storage configuration and an efficient conveyor system. Our innovative solution maximizes space utilization while streamlining the picking of totes or containers, resulting in unprecedented levels of efficiency and accuracy."
                benefit={{
                    image: BenefitImg,
                    title: 'Maximizing Efficiency\nand Accuracy',
                }}
            />
            <Separator noPadding />
            <Team />
            <Footer />
        </>
    );
}
