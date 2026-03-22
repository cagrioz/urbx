import { ComingSoonFooter } from '@/components/reborn/ComingSoon';
import LandingBackdrop from '@/assets/version2/home_hero.png';
import AdaptiveVerticalNetworkBackdrop from '@/assets/version2/vertical_storage.png';
import PickStationBackdrop from '@/assets/version2/pickstation.png';
import DualBotBackdrop from '@/assets/version2/dual_bot.jpg';
import CareersBackdrop from '@/assets/version2/careers.png';
import MediaShowcase from '@/components/reborn/MediaShowcase';
import ProductionSystemReveal from '@/components/reborn/ProductionSystemReveal';

export default function LandingPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
            <MediaShowcase
                    hasBottomRadius={true}
                    showNavigation={true}
                    image={LandingBackdrop}
                    imageAlt="URBX adaptive warehouse system"
                    title="The Adaptive Vertical Network"
                    description="Storage that scales vertically, operates reliably, and stays accessible - delivering density, flexibility, and speed without fragility"
                    titleClassName="desktop:whitespace-nowrap"
                    descriptionClassName="max-w-[620px]"
                    className="z-[1] -mb-[32px]"
                    action={{
                        href: 'https://youtube.com',
                        variant: 'full',
                        label: 'FULL VIDEO',
                        ariaLabel: 'Play youtube video',
                        openInNewTab: true,
                    }}
                />
                <MediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={AdaptiveVerticalNetworkBackdrop}
                    imageAlt="URBX adaptive warehouse system"
                    title="The Vertical Advantage"
                    description="Maximize storage capacity within your existing footprint—no building expansion required"
                    className="pt-[32px]"
                    action={{
                        href: '/solutions/cases',
                        variant: 'explore',
                        label: 'EXPLORE',
                        ariaLabel: 'Explore',
                    }}
                />
                <MediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={PickStationBackdrop}
                    imageAlt="URBX ergonomic pick station"
                    title="Ergonomic Pick Station"
                    description="Brings cases and totes directly to operators, eliminating travel and maximizing throughput"
                    action={{
                        href: '/solutions/totes#pick-station',
                        variant: 'explore',
                        label: 'EXPLORE',
                        ariaLabel: 'Explore',
                    }}
                />
                <MediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={DualBotBackdrop}
                    imageAlt="URBX dual bot"
                    title="Dual-Bot Archietecture"
                    description="Specialized robots working in coordination—maximizing throughput while minimizing complexity."
                    titleColor="#000000"
                    descriptionColor="rgba(86, 86, 86, 0.6)"
                    action={{
                        href: '/solutions/storage',
                        variant: 'explore',
                        label: 'EXPLORE',
                        ariaLabel: 'Explore',
                        colorScheme: 'muted',
                    }}
                />
                <MediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={CareersBackdrop}
                    imageAlt="URBX dual bot"
                    header="Careers"
                    title="Engineering Tomorrow's Warehouses Today"
                    description="Shape the future of warehouse automation."
                    action={{ href: '/next-gen/career', variant: 'explore', label: 'EXPLORE', ariaLabel: 'Explore careers' }}
                />
                <ProductionSystemReveal />
            </main>
            <ComingSoonFooter />
        </>
    );
}
