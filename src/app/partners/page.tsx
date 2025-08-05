import Footer from '@/components/Footer';
import StandardHero from '@/components/StandardHero';

import HeroImg from '@/assets/partners_new.png';
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
            <CTA
                title={
                    <>
                        Want to become a <br />
                        <span className="font-semibold">Partner?</span>
                    </>
                }
                ctaVariant="primary"
                cta={{
                    text: 'Contact Us',
                    href: '/contact-us',
                }}
            />
            <Footer />
        </>
    );
}
