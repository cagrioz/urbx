import ContentWithImageGrid from '@/components/ContentWithImageGrid';
import Footer from '@/components/Footer';
import StackedImageContent from '@/components/StackedImageContent';
import VideoHero from '@/components/VideoHero';

import MobileRoboticsImg from '@/assets/mobile_robotics.jpg';
import RoboticsShowcaseImg from '@/assets/ipad_mockup_robotics.png';

import RoboticsControlImg from '@/assets/robotics_control.jpg';

import StackedImageContentB from '@/components/StackedImageContentB';
import PlatformAndTestimonials from '@/components/PlatformAndTestimonials';
import FeatureShowcaseWithDetails from '@/components/FeatureShowcaseWithDetails';

export default function AISoftware() {
    return (
        <>
            <VideoHero
                video="/videos/retract_hero.mp4"
                subtitle="Fulfillment Solution"
                title={<>Revolutionizing Fulfillment with Intelligent Robotics</>}
                description="Discover the power of our advanced robotic systems designed to optimize and revolutionize your fulfillment operations."
            />
            <div className="py-16 desktop:py-[120px] bg-black">
                <StackedImageContent
                    subtitle="Complex Routing and Tasking Algorithms"
                    description={
                        <>
                            Using <b>machine learning</b> we optimize tasking to determine to maximize throughput and
                            optimal storage. <b>Using an artificial intelligence coordinator</b> the robots are routed
                            throughout the structure using the most optimal paths for the fleet.
                        </>
                    }
                    video="/videos/dual_grid.mp4"
                />
                <div className="mt-[50px]">
                    <StackedImageContentB
                        title="Advanced Mobile Robotics Controls"
                        description="URBX's distributed controls architecture enables fast, accurate navigation and localization. Our proprietary software provides torque assistance for improved control and efficient turning, enhancing system performance with advanced case handling."
                        image={RoboticsControlImg}
                    />
                </div>
            </div>
            <FeatureShowcaseWithDetails
                title="Advanced Mobile Robotics Controls"
                description="URBX's distributed controls architecture enables fast, accurate navigation and localization. Our proprietary software provides torque assistance for improved control and efficient turning, enhancing system performance with advanced case handling."
                bgImage={MobileRoboticsImg}
                showcaseImage={RoboticsShowcaseImg}
            />
            <PlatformAndTestimonials />
            <Footer />
        </>
    );
}
