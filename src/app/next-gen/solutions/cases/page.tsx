import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import CaseBackdrop from '@/assets/embedded_conveyor.png';

export default function NextGenCasesPage() {
    return (
        <>
            <main className="min-h-screen bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    image={CaseBackdrop}
                    imageAlt="URBX case fulfillment system"
                    title="High-Performance Case Gridbot"
                    description="Robust case handling designed for uptime, stable throughput, and smooth operations in high-variability warehouse environments."
                    action={{ href: '#', variant: 'icon', ariaLabel: 'Open case page video preview' }}
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
