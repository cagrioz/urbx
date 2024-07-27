import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Partners from '@/components/Partners';
import PlatformAndTestimonials from '@/components/PlatformAndTestimonials';
import WhyUs from '@/components/WhyUs';

import SideViewImage from '@/assets/urbx_side_view.jpg';
import TopViewImage from '@/assets/urbx_top_view.jpg';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import Overview from '@/components/Overview';

export default function Home() {
    return (
        <>
            <Hero />
            <Partners />
            <VideoSection />
            <Overview />
            <Features
                title="Urbx Specs"
                features={[
                    {
                        title: '100 LBS',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
                    },
                    {
                        title: '125 FEET',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .',
                    },
                    {
                        title: 'High Speeds',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.',
                    },
                    {
                        title: '100 TPH Per Bot',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoda.',
                    },
                ]}
                image={SideViewImage}
            />
            <Features
                features={[
                    {
                        title: '100 LBS',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
                    },
                    {
                        title: '125 FEET',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .',
                    },
                    {
                        title: 'High Speeds',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.',
                    },
                    {
                        title: '100 TPH Per Bot',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoda.',
                    },
                ]}
                image={TopViewImage}
            />
            <WhyUs />
            <PlatformAndTestimonials />
            <Footer />
        </>
    );
}
