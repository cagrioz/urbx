import { ComingSoonFooter } from '@/components/reborn/ComingSoon';
import NeonHeroMedia from '@/assets/version2/neon_hero.png';
import MediaShowcase from '@/components/reborn/MediaShowcase';
import NeonSoftwareSection from '@/components/reborn/NeonSoftwareSection';

export default function NeonPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
                <MediaShowcase
                    className="z-[1] -mb-[32px]"
                    hasBottomRadius={true}
                    showNavigation={true}
                    image={NeonHeroMedia}
                    imageAlt="URBX NeonOS"
                    header="Software Layer"
                    title="NeonOS"
                    titleContent={
                        <>
                            NEON<span className="text-[#00A5E2]">OS</span>
                        </>
                    }
                    description="The intelligent brain behind the hardware. Neon manages inventory, directs robotic fleets, and integrates with your WMS/WES."
                    actionInfo={{
                        heading: (
                            <>
                                NEON<span className="text-[#00A5E2]">OS</span>
                            </>
                        ),
                        description: 'Your complete software control solution.',
                        hideOnMobile: true,
                    }}
                    action={{ href: '#neon-software', variant: 'icon', ariaLabel: 'Scroll to NeonOS software section' }}
                />
                <NeonSoftwareSection />
            </main>
            <ComingSoonFooter />
        </>
    );
}
