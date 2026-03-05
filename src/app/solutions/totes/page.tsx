import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import ToteBackdrop from '@/assets/version2/tote-gripper.png';
export default function NextGenTotesPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    hasBottomRadius={true}
                    showNavigation={true}
                    image={ToteBackdrop}
                    imageAlt="URBX tote gripper"
                    title="High - Performance Tote Gripper"
                    description="Reliable tote handling engineered for extended service life — reducing maintenance costs and maximizing uptime."
                    action={{ href: '#tote-handling-capacity', variant: 'icon', ariaLabel: 'Scroll to Total Handling Capacity section' }}
                />
                <NextGenMediaShowcase
                    id="tote-handling-capacity"
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={ToteBackdrop}
                    imageAlt="URBX tote gripper"
                    title="2"
                    description="2"
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
