import Features from '@/components/Features';
import Partners from '@/components/Partners';
import PlatformAndTestimonials from '@/components/PlatformAndTestimonials';
import WhyUs from '@/components/WhyUs';

import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import Overview from '@/components/Overview';
import VideoHero from '@/components/VideoHero';

import CompanyLogo from '@/assets/plain_hytek.png';
import FeaturesGridVideoCarousel from '@/components/FeaturesGridVideoCarousel';

export default function Home() {
    const videoSliderItems = ['/videos/urbx_case_one.mp4', '/videos/urbx_video_two.mp4', '/videos/urbx_case_three.mp4'];
    return (
        <>
            <VideoHero
                video="/videos/new_one.mp4"
                subtitle="Introducing the 2025 Towerbot"
                title={
                    <>
                        Effortless <b>Case-Handling:</b>
                        <br /> 100 Pounds to 125 Feet
                    </>
                }
                popupVideoId="O91LBUvC3v4"
                learnMoreBtn={{
                    text: 'Learn More',
                    href: '/news/towerbot-case-handling',
                }}
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
                        title: 'Cost Efficiency',
                        description: 'Affordable automation for operations of all sizes.',
                    },
                ]}
                video="/videos/routing.mp4"
            />
            <FeaturesGridVideoCarousel
                features={[
                    {
                        title: 'Totes and Cases',
                        description: 'Handles a wide range of case sizes with precision, from 6-inch to 24-inch boxes.',
                    },
                    {
                        title: 'Existing Infrastructure',
                        description:
                            'Effortlessly integrates with conveyors, palletizers, and outbound systems for optimized workflows.',
                    },
                    {
                        title: 'Vision and Sensing',
                        description: 'Detects dimensions, anomalies, and barcodes with unmatched accuracy.',
                    },
                    {
                        title: 'Minimized Requirements',
                        description: 'Increases storage density with a compact footprint, accommodating flexible box configurations.',
                    },
                ]}
                videos={videoSliderItems}
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
