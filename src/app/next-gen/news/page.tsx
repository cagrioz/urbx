import { ComingSoonFooter } from '@/components/reborn/ComingSoon';
import MediaShowcase from '@/components/reborn/MediaShowcase';
import NewsBackdrop from '@/assets/mobile_robotics.jpg';

export default function NextGenNewsPage() {
    return (
        <>
            <main className="min-h-screen bg-[#07090C] text-white">
                <MediaShowcase
                    image={NewsBackdrop}
                    imageAlt="URBX fulfillment operations updates"
                    title="Latest URBX Product and Company Updates"
                    description="Follow releases, deployment stories, and technology milestones as we expand our automation platform."
                    action={{ href: '#', variant: 'icon', ariaLabel: 'Open news page video preview' }}
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
