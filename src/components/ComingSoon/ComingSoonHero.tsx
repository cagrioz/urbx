import Image from 'next/image';
import heroImage from '@/assets/version2/coming_soon_hero.png';

export default function ComingSoonHero() {
    return (
        <section className="relative w-full bg-black overflow-hidden">
            <div className="relative flex flex-col items-center pt-16 tablet:pt-20 desktop:pt-24">
                <p className="hero-animate-subtitle font-ibm-mono text-[12px] tablet:text-[20px] text-white tracking-[-0.0312em] leading-[1.4] uppercase mb-6 tablet:mb-8">
                    Launching 2026.
                </p>

                <h1
                    className="hero-animate-title font-general-sans text-[32px] tablet:text-[48px] desktop:text-[56px] font-normal text-center leading-[1.1] tracking-[-0.01em] pb-1"
                >
                    <span className="hero-title-line hero-title-line-1 hero-title-gradient">Next-Gen Cube</span>
                    <span className="hero-title-line hero-title-line-2 hero-title-gradient">Storage</span>
                </h1>

                <div className="relative w-full max-w-[1232px] mt-6 tablet:mt-10">
                    <div className="hero-animate-glow absolute inset-x-[-14%] -top-[20%] bottom-[8%] pointer-events-none">
                        <div
                            className="absolute inset-0 opacity-60"
                            style={{
                                background:
                                    'radial-gradient(ellipse 88% 54% at 50% 48%, rgba(22, 74, 145, 0.46) 0%, rgba(14, 50, 104, 0.3) 38%, rgba(5, 17, 43, 0.14) 64%, rgba(0, 0, 0, 0) 84%)',
                                filter: 'blur(72px)',
                            }}
                        />
                        <div
                            className="absolute inset-x-0 top-[30%] h-[30%] opacity-20"
                            style={{
                                background:
                                    'linear-gradient(90deg, rgba(0, 2, 3, 0) 0%, rgba(55, 106, 206, 0.45) 31%, rgba(98, 199, 235, 0.38) 49%, rgba(55, 106, 206, 0.45) 65%, rgba(0, 2, 3, 0) 100%)',
                                filter: 'blur(125px)',
                            }}
                        />
                        <div
                            className="absolute left-0 top-[10%] h-[80%] w-[46%] opacity-18"
                            style={{
                                background:
                                    'radial-gradient(ellipse at 8% 50%, rgba(45, 92, 196, 0.28) 0%, rgba(18, 44, 108, 0.18) 36%, rgba(0, 0, 0, 0) 72%)',
                                filter: 'blur(54px)',
                            }}
                        />
                        <div
                            className="absolute right-0 top-[10%] h-[80%] w-[46%] opacity-18"
                            style={{
                                background:
                                    'radial-gradient(ellipse at 92% 50%, rgba(45, 92, 196, 0.28) 0%, rgba(18, 44, 108, 0.18) 36%, rgba(0, 0, 0, 0) 72%)',
                                filter: 'blur(54px)',
                            }}
                        />
                    </div>
                    <Image
                        src={heroImage}
                        alt="URBX Next-Gen Cube Storage Robot"
                        className="hero-animate-image relative w-full h-auto object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
}
