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

export default function FullFillment() {
    return (
        <>
            <VideoHero />
            <StackedImageContent />
            <div className="pt-[120px] pb-40 bg-black">
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
                    title="3D Storage System"
                    superTitle="04."
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
