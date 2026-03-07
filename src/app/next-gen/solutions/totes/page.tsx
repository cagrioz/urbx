import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import ToteBackdrop from '@/assets/gridbot.png';

export default function NextGenTotesPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    image={ToteBackdrop}
                    imageAlt="URBX tote handling robot"
                    title="High-Performance Tote Gridbot"
                    description="Reliable tote movement engineered for speed, precision, and consistent cycle times across dense automation systems."
                    action={{ href: '#', variant: 'icon', ariaLabel: 'Open tote page video preview' }}
                />
                <section id="pick-station" className="mx-auto w-full max-w-[1340px] px-5 py-16 tablet:px-10 desktop:px-0 desktop:py-20">
                    <div className="max-w-[760px]">
                        <h2 className="font-general-sans text-[28px] font-normal leading-[1] tracking-[-0.01em] text-[#F3F4F9] tablet:text-[32px]">
                            Pick Station
                        </h2>
                        <p className="mt-4 font-ibm-mono text-[14px] leading-[1.4] tracking-[-0.01em] text-white/70 tablet:text-[16px]">
                            The URBX pick station is designed for efficient goods-to-person workflows, with fast tote presentation, clear operator
                            interaction, and consistent picking performance.
                        </p>
                    </div>
                </section>
            </main>
            <ComingSoonFooter />
        </>
    );
}
