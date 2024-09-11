import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Partners from '@/components/Partners';
import PlatformAndTestimonials from '@/components/PlatformAndTestimonials';
import WhyUs from '@/components/WhyUs';

import TopViewImage from '@/assets/urbx_side_view.jpg';
import SideViewImage from '@/assets/urbx_top_view.jpg';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import Overview from '@/components/Overview';
import VideoHero from '@/components/VideoHero';

import HeroVideo from '../../public/home_hero.mp4';

export default function Home() {
    return (
        <>
            <VideoHero
                video={HeroVideo}
                subtitle="Urbx - The Vertical Revolution"
                title={
                    <>
                        AI-Driven <b>Dual Grid Robotics</b> in 3D Space.
                    </>
                }
            />
            <Partners />
            <VideoSection />
            <Overview />
            <Features
                title="Urbx Specs"
                features={[
                    {
                        title: '100 LBS',
                        description: 'Handles loads up to 100 pounds for efficient material handling.',
                    },
                    {
                        title: '125 FEET',
                        description: 'Reaches up to 125 feet, maximizing storage space.',
                    },
                    {
                        title: 'High Speeds',
                        description: 'Operates at high speeds for faster cycle times.',
                    },
                    {
                        title: '100 TPH Per Bot',
                        description: 'Achieves up to 100 transactions per hour for optimal workflow.',
                    },
                ]}
                image={SideViewImage}
            />
            <Features
                features={[
                    {
                        title: 'Routing and Tasking',
                        description:
                            'Machine learning optimizes tasking and routing for maximum throughput and storage.',
                    },
                    {
                        title: 'AI Driven Grid',
                        description: 'Efficiently tasks and routes robots using AI-driven grid technology.',
                    },
                    {
                        title: 'Advanced Controls',
                        description:
                            'Fast, accurate navigation and localization with torque-assisted control for better performance.',
                    },
                    {
                        title: 'Optimized Storage',
                        description: 'Maximizes space utilization and enhances operational efficiency.',
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
