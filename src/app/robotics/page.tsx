import ContentWithImageGrid from '@/components/ContentWithImageGrid';
import Footer from '@/components/Footer';
import StackedImageContent from '@/components/StackedImageContent';
import VideoHero from '@/components/VideoHero';
import TowerbotImage from '@/assets/towerbot.png';
import GridbotImage from '@/assets/gridbot.png';
import EmbeddedConveyorImage from '@/assets/embedded_conveyor.png';
import StorageSystemImage from '@/assets/3d_storage_system.png';

import GridContentWithImage from '@/components/GridContentWithImage';
import Separator from '@/components/Separator';
import FAQ from '@/components/FAQ';

import CubeImage from '@/assets/fullfillment_cube.gif';

export default function Robotics() {
    return (
        <>
            <VideoHero
                video="/videos/fulfillment.mp4"
                subtitle="Fulfillment Solution"
                title={
                    <>
                        AI-Driven Dual Grid Robotics in <b>3D Space.</b>
                    </>
                }
                description="Discover the power of our advanced robotic systems designed to optimize and revolutionize your fulfillment operations."
            />
            <div className="py-16 desktop:py-[120px] bg-black">
                <StackedImageContent
                    subtitle="Efficient and Intelligent 3D Storage Solutions"
                    description={
                        <>
                            Our robotics solutions are designed to maximize storage efficiency using{' '}
                            <span className="font-bold">advanced 3D storage technology.</span> By utilizing vertical and
                            horizontal space, our systems enable high-density storage and rapid retrieval of items,
                            ensuring optimal use of your facility&apos;s footprint. This innovative approach to storage
                            allows for <span className="font-bold">seamless integration</span> with existing
                            infrastructure, providing a{' '}
                            <span className="font-bold">scalable and adaptable solution</span> to meet the evolving
                            demands of modern fulfillment centers.
                        </>
                    }
                    image={CubeImage}
                />
            </div>
            <div className="flex flex-col gap-10 pt-16 desktop:pt-[120px] pb-20 desktop:pb-40 bg-black">
                <ContentWithImageGrid
                    title="TowerBot"
                    superTitle="01."
                    description={`Our TowerBot is designed for vertical storage and retrieval, maximizing space efficiency and
                            throughput. It operates seamlessly within multi-level racking systems, providing rapid
                            access to stored items.\n\nKey Features: The TowerBot offers high-density vertical storage,
                            rapid access and retrieval, and seamless integration with existing systems.`}
                    image={TowerbotImage}
                />
                <ContentWithImageGrid
                    title="GridBot"
                    superTitle="02."
                    description={`Our TowerBot is designed for vertical storage and retrieval, maximizing space efficiency and throughput. It operates seamlessly within multi-level racking systems, providing rapid access to stored items.\n\nKey Features: The TowerBot offers high-density vertical storage, rapid access and retrieval, and seamless integration with existing systems.`}
                    image={GridbotImage}
                    reverse
                />
            </div>
            <div className="bg-black">
                <GridContentWithImage
                    title="Embedded Conveyor"
                    superTitle="03."
                    description={`Our Conveyor system is engineered for seamless integration with our robots, providing smooth and efficient transport of goods throughout your fulfillment center. It's built to handle high volumes with reliability.\n\nKey Features: The Conveyor system ensures seamless integration with robots, high-volume handling, and reliable and efficient transport.`}
                    image={EmbeddedConveyorImage}
                />
                <Separator />
                <GridContentWithImage
                    title="Dynamic Tote Heights"
                    superTitle="04."
                    description={`Dynamic tote heights offer unlimited creativity and flexibility, accommodating everything from fresh and frozen goods to taller totes for hydroponics. The possibilities are endless when tote height restrictions are removed—your storage solutions can truly reach new heights`}
                    video="/videos/dynamic_tote.mp4"
                />
                <Separator />
                <GridContentWithImage
                    title="3D Storage System"
                    superTitle="05."
                    description={`Our 3D storage system leverages vertical space to increase storage density, allowing for the efficient use of your warehouse or fulfillment center's footprint. By integrating advanced robotics and AI, our storage system ensures rapid retrieval and precise placement of items, significantly reducing the time and effort required for manual handling.\n\nKey Features: The 3D storage system offers high-density vertical storage, rapid access and retrieval, and seamless integration with other robotic systems.`}
                    image={StorageSystemImage}
                />
                <Separator />
            </div>
            <FAQ />
            <Footer />
        </>
    );
}
