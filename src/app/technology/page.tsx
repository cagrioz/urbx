import ContentWithImageGrid from '@/components/ContentWithImageGrid';
import Footer from '@/components/Footer';
import StackedImageContent from '@/components/StackedImageContent';
import VideoHero from '@/components/VideoHero';
import TowerbotImage from '@/assets/towerbot.png';
import GridbotImage from '@/assets/gridbot.png';
import EmbeddedConveyorImage from '@/assets/embedded_conveyor.png';
import StorageSystemImage from '@/assets/3d_storage_system.png';

import GridContentWithImage from '@/components/GridContentWithImage';
import Image from 'next/image';
import Separator from '@/components/Separator';
import FAQ from '@/components/FAQ';
import FullfillmentTechImg from '@/assets/fullfillment_tech.png';

import FullFillmentVideo from '@/assets/fullfillment.mp4';
import RoboticsControlImg from '@/assets/robotics_control.jpg';

import CubeGif from '@/assets/fullfillment_tech.png';
import StackedImageContentB from '@/components/StackedImageContentB';
import PlatformAndTestimonials from '@/components/PlatformAndTestimonials';

export default function Technology() {
    return (
        <>
            <VideoHero
                video={FullFillmentVideo}
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
                    image={CubeGif}
                />
                <div className="mt-[50px]">
                    <StackedImageContentB
                        title="Advanced Mobile Robotics Controls"
                        description="URBX's distributed controls architecture enables fast, accurate navigation and localization. Our proprietary software provides torque assistance for improved control and efficient turning, enhancing system performance with advanced case handling."
                        image={RoboticsControlImg}
                    />
                </div>
            </div>
            <PlatformAndTestimonials />
            <Footer />
        </>
    );
}
