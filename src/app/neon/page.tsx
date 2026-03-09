import { ComingSoonFooter } from '@/components/ComingSoon';
import NeonHeroMedia from '@/assets/version2/tote-gripper.png';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';

export default function NeonPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    hasBottomRadius={true}
                    showNavigation={true}
                    image={NeonHeroMedia}
                    imageAlt="URBX NeonOS"
                    header="Software Layer" 
                    title="NeonOS"
                    description="The intelligent brain behind the hardware. Neon manages inventory, directs robotic fleets, and integrates with your WMS/WES."
                    action={{ href: '#tote-handling-capacity', variant: 'icon', ariaLabel: 'Scroll to Total Handling Capacity section' }}
                />
               
            </main>
            <ComingSoonFooter />
        </>
    );
}
