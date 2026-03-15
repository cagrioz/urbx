import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import CareerBackdrop from '@/assets/hero_bg.jpg';

export default function NextGenCareerPage() {
    return (
        <>
            <main className="min-h-screen bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    image={CareerBackdrop}
                    imageAlt="URBX career and team"
                    title="Join the Team Building Autonomous Logistics"
                    description="Work with an interdisciplinary team focused on warehouse robotics, control systems, and software at production scale."
                    action={{ href: '#', variant: 'icon', ariaLabel: 'Open career page video preview' }}
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
