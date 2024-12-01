import Footer from '@/components/Footer';
import VideoHero from '@/components/VideoHero';

import FAQ from '@/components/FAQ';
import StackedHighlightText from '@/components/StackedHighlightText';
import FeatureVideoCarousel from '@/components/FeatureVideoCarousel';

export default function AISoftware() {
    // First section video
    const toteHandlerVideos = ['/videos/case_one.mp4', '/videos/retract_hero.mp4', '/videos/home_hero.mp4'];
    // Second section video
    const caseHandlerVideos = ['/videos/home_hero.mp4', '/videos/retract_hero.mp4', '/videos/home_hero.mp4'];
    // Third section video
    const roboticPickstationVideos = ['/videos/system_pickstation.mp4', '/videos/retract_hero.mp4', '/videos/home_hero.mp4'];

    return (
        <>
            <VideoHero
                video="/videos/system_header.mp4"
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
                videos={toteHandlerVideos}
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
                videos={caseHandlerVideos}
            />
            <FeatureVideoCarousel
                title="Robotic Pickstation"
                markerText="03."
                description={
                    <>
                        Our ergonomic pick station fully automates the picking process, driving increased throughput, reliability, and efficiency while minimizing human error.<br /> <br /> Key features: Optimized throughput, reduced human error, and seamless integration with existing warehouse systems.
                    </>
                }
                videos={roboticPickstationVideos}
            />
            <FAQ />
            <Footer />
        </>
    );
}
