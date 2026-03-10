import { ComingSoonFooter } from '@/components/ComingSoon';
import NeonHeroMedia from '@/assets/version2/tote-gripper.png';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import NeonSoftwareSection from '@/components/NeonSoftwareSection';

export default function NeonPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    className="z-[1] -mb-[32px]"
                    hasBottomRadius={true}
                    showNavigation={true}
                    image={NeonHeroMedia}
                    imageAlt="URBX NeonOS"
                    header="Software Layer"
                    title="NeonOS"
                    description="The intelligent brain behind the hardware. Neon manages inventory, directs robotic fleets, and integrates with your WMS/WES."
                    action={{ href: '#neon-software', variant: 'icon', ariaLabel: 'Scroll to NeonOS software section' }}
                />
                <NeonSoftwareSection />
            </main>
            <ComingSoonFooter />
        </>
    );
}
