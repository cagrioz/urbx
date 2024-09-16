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
            <div className="py-16 desktop:py-[120px]">
                <StackedImageContent
                    subtitle="Complex Routing and Tasking Algorithms"
                    description={
                        <>
                            By utilizing <span className="font-semibold">machine learning</span> software, we optimize
                            task management to achieve maximum throughput and optimal storage.{' '}
                            <span className="font-semibold">An artificial intelligence coordinator</span> ensures that
                            robots are routed throughout the system using the most efficient paths for the entire fleet.
                        </>
                    }
                    video="/videos/dual_grid.mp4"
                />
                <div className="mt-[50px]">
                    <StackedImageContentB
                        title="Advanced Mobile Robotics Controls"
                        description="URBX's distributed control architecture ensures swift, precise navigation and localization. Our proprietary software enhances system performance by providing torque assistance, resulting in improved control and more efficient turning, especially during complex case handling tasks."
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
