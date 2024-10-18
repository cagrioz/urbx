import Features from '@/components/Features';
import Partners from '@/components/Partners';
import PlatformAndTestimonials from '@/components/PlatformAndTestimonials';
import WhyUs from '@/components/WhyUs';

import SideViewImage from '@/assets/urbx_top_view.jpg';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import Overview from '@/components/Overview';
import VideoHero from '@/components/VideoHero';

import CompanyLogo from '@/assets/plain_hytek.png';
import PersonImg from '@/assets/matt.jpeg';

export default function Home() {
    return (
        <>
            <VideoHero
                video="/videos/fulfillment.mp4"
                subtitle="Urbx - The Vertical Revolution"
                title={
                    <>
                        AI-Driven <b>Robotics</b> in 3D Space.
                    </>
                }
                popupVideoId="ROMGszByHNA"
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
                video="/videos/bots_side_view.mp4"
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
                video="/videos/routing.mp4"
            />
            <WhyUs />
            <PlatformAndTestimonials
                quote="“At Hy-Tek, we are committed to bringing new and innovative solutions to the order fulfillment
                        process. Because automation is continually evolving to meet the rapid changes in the market, we
                        are actively evaluating what's next. URBX is exactly the kind of business we want to work
                        with as we keep pushing the leading edge of technology to help expedite and streamline processes
                        for our customers.”"
                personName="Zac Boehm"
                personRole="Chief Automation Officer, Hy-Tek"
                companyLogo={CompanyLogo}
                invertLogoBrigtness
            />
            <Footer />
        </>
    );
}
