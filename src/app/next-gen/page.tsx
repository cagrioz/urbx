import { ComingSoonFooter } from '@/components/ComingSoon';
import LandingBackdrop from '@/assets/version2/nextgen_home_hero.png';
import AdaptiveVerticalNetworkBackdrop from '@/assets/version2/vertical_storage.png';
import PickStationBackdrop from '@/assets/version2/pickstation.png';
import DualBotBackdrop from '@/assets/version2/dual_bot.jpg';
import CareersBackdrop from '@/assets/version2/careers.png';
import ProductionSystemBackdrop from '@/assets/version2/production_system.png';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';

export default function NextGenLandingPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
            <NextGenMediaShowcase
                    hasBottomRadius={true}
                    showNavigation={true}
                    image={LandingBackdrop}
                    imageAlt="URBX adaptive warehouse system"
                    title="The Adaptive Vertical Network"
                    description="Storage that scales vertically, operates reliably, and stays accessible - delivering density, flexibility, and speed without fragility"
                    titleClassName="desktop:whitespace-nowrap"
                    descriptionClassName="max-w-[620px]"
                    action={{
                        href: '#',
                        variant: 'full',
                        label: 'FULL VIDEO',
                        ariaLabel: 'Play full video',
                    }}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={AdaptiveVerticalNetworkBackdrop}
                    imageAlt="URBX adaptive warehouse system"
                    title="The Vertical Advantage"
                    description="Maximize storage capacity within your existing footprint—no building expansion required"
                    action={{
                        href: '#',
                        variant: 'explore',
                        label: 'EXPLORE',
                        ariaLabel: 'Explore',
                    }}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={PickStationBackdrop}
                    imageAlt="URBX ergonomic pick station"
                    title="Ergonomic Pick Station"
                    description="Brings cases and totes directly to operators, eliminating travel and maximizing throughput"
                    action={{
                        href: '#',
                        variant: 'explore',
                        label: 'EXPLORE',
                        ariaLabel: 'Explore',
                    }}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={DualBotBackdrop}
                    imageAlt="URBX dual bot"
                    title="Dual-Bot Archietecture"
                    description="Specialized robots working in coordination—maximizing throughput while minimizing complexity."
                    action={{
                        href: '#',
                        variant: 'explore',
                        label: 'EXPLORE',
                        ariaLabel: 'Explore',
                    }}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={CareersBackdrop}
                    imageAlt="URBX dual bot"
                    header="Careers"
                    title="Engineering Tomorrow's Warehouses Today"
                    description="Shape the future of warehouse automation."
                    action={{ href: '#', variant: 'explore', label: 'EXPLORE', ariaLabel: 'Explore' }}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={ProductionSystemBackdrop}
                    imageAlt="URBX production system"
                    title="Proven. Refined. Ready"
                    description="URBX 2.0 enters production deployment with enhanced speed, density, maintainability, and the flexibility to adapt as operations evolve."
                    action={{ href: '#', variant: 'explore', label: 'PRODUCTION SYSTEM', ariaLabel: 'Production system' }}
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
