import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import ToteBackdrop from '@/assets/gridbot.png';

export default function NextGenTotesPage() {
    return (
        <>
            <main className="min-h-screen bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    image={ToteBackdrop}
                    imageAlt="URBX tote handling robot"
                    title="High-Performance Tote Gridbot"
                    description="Reliable tote movement engineered for speed, precision, and consistent cycle times across dense automation systems."
                    action={{ href: '#', variant: 'icon', ariaLabel: 'Open tote page video preview' }}
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
