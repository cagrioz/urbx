import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import NewsBackdrop from '@/assets/mobile_robotics.jpg';

export default function NextGenNewsPage() {
    return (
        <>
            <main className="min-h-screen bg-[#07090C] text-white">
                <NextGenMediaShowcase
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
