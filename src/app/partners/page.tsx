import Footer from '@/components/Footer';
import StandardHero from '@/components/StandardHero';

import HeroImg from '@/assets/partners.png';
import BenefitShowcase from '@/components/BenefitShowcase';
import UrbxSystemImg from '@/assets/about_urbx_system.png';
import BenefitImg from '@/assets/accuracy_icon.png';
import Team from '@/components/Team';
import Separator from '@/components/Separator';
import PartnersDetails from '@/components/PartnersDetails';
import CTA from '@/components/CTA';

export default function Partners() {
    return (
        <>
            <StandardHero
                subtitle="Our Partners"
                title={
                    <>
                        <b>Partners</b> of Urbx
                    </>
                }
                image={HeroImg}
            />
            <PartnersDetails />
            <CTA />
            <Footer />
        </>
    );
}
