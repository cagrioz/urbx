import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import NeonBackdrop from '@/assets/ipad_mockup_robotics.png';

export default function NextGenNeonPage() {
    return (
        <>
            <main className="min-h-screen bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    image={NeonBackdrop}
                    imageAlt="Neon operations interface"
                    title="Neon OS for Intelligent Fulfillment Control"
                    description="A responsive software layer built to orchestrate tasks, monitor system health, and optimize autonomous warehouse performance."
                    action={{ href: '#', variant: 'icon', ariaLabel: 'Open Neon page video preview' }}
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
