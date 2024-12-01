import Footer from '@/components/Footer';
import StackedImageContent from '@/components/StackedImageContent';
import VideoHero from '@/components/VideoHero';

import MobileRoboticsImg from '@/assets/mobile_robotics.jpg';
import RoboticsShowcaseImg from '@/assets/ipad_mockup_robotics.png';

import RoboticsControlImg from '@/assets/robotics_control.jpg';

import StackedImageContentB from '@/components/StackedImageContentB';
import PlatformAndTestimonials from '@/components/PlatformAndTestimonials';
import FeatureShowcaseWithDetails from '@/components/FeatureShowcaseWithDetails';

import CompanyLogo from '@/assets/dcs_logo_black.svg';
import PersonImg from '@/assets/matt.jpeg';
import FAQ from '@/components/FAQ';
import StackedHighlightText from '@/components/StackedHighlightText';
import FeatureVideoCarousel from '@/components/FeatureVideoCarousel';

export default function AISoftware() {
    return (
        <>
            <VideoHero
                video="/videos/retract_hero.mp4"
                subtitle="urbx systems "
                title={<>AI-Driven Robotics for Tote and Case Picking</>}
                description="Discover our adaptable operations that enable businesses to seamlessly switch between tote and case picking configurations using interchangeable carriages."
            />
            <StackedHighlightText
                title={
                    <>
                        <span className="font-semibold">Autonomous</span> Storage & Retrieval Solutions
                    </>
                }
                subtitle="systems"
                description={
                    <>
                        Our robotic solutions offer unparalleled <span className="font-semibold">flexibility</span> with
                        an <span className="font-semibold">interchangeable</span> carriage that seamlessly transitions
                        between <span className="font-semibold">tote</span> picking and{' '}
                        <span className="font-semibold">case</span> picking. When integrated with our robotic pick
                        station, the AI-driven dual-grid system enhances operational{' '}
                        <span className="font-semibold">efficiency</span>, delivering unique value to warehouse
                        operations.
                    </>
                }
            />
            <FeatureVideoCarousel
                title="Tote Handler"
                markerText="01."
                description={
                    <>
                        Our tote handling carriage is designed to effortlessly and efficiently manage the storage and
                        retrieval of totes within the racking system. Capable of reliably and precisely handling up to
                        100lbs, it significantly enhances operational efficiency in warehouse environments. <br />
                        <br /> Key features include double-deep storage and picking, a 100lb lift capacity, high-speed
                        performance, and seamless integration with existing robotic systems.
                    </>
                }
                videos={['/videos/home_hero.mp4', '/videos/retract_hero.mp4', '/videos/home_hero.mp4']}
            />
            <FeatureVideoCarousel
                title="Case Handler"
                markerText="02."
                description={
                    <>
                        Our case handling carriage is engineered to provide seamless and efficient storage and retrieval
                        of cases. Capable of handling up to 100lbs, this versatile solution adapts to evolving business
                        needs without requiring significant modifications to existing operations. <br />
                        <br /> Key features: 100lb lift capacity, high-speed performance, double-deep storage and
                        picking, and seamless integration with current warehouse systems.
                    </>
                }
                videos={['/videos/home_hero.mp4', '/videos/retract_hero.mp4', '/videos/home_hero.mp4']}
            />
            <FeatureVideoCarousel
                title="Robotic Pickstation"
                markerText="03."
                description={
                    <>
                        Our robotic pick station fully automates the picking process, driving increased throughput,
                        reliability, and efficiency while minimizing human error. Powered by advanced AI-driven
                        robotics, this solution significantly enhances warehouse operations. <br />
                        <br /> Key features: Fully autonomous picking, optimized throughput, reduced human error, and
                        seamless integration with existing warehouse systems.
                    </>
                }
                videos={['/videos/home_hero.mp4', '/videos/retract_hero.mp4', '/videos/home_hero.mp4']}
            />
            <FAQ />
            <Footer />
        </>
    );
}
