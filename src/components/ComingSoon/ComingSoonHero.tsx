import Image from 'next/image';
import heroImage from '@/assets/version2/coming_soon_hero.png';

export default function ComingSoonHero() {
    return (
        <section className="relative w-full bg-black overflow-hidden">
            <div className="relative flex flex-col items-center pt-16 tablet:pt-20 desktop:pt-24">
                <p className="font-ibm-mono text-[12px] tablet:text-[20px] text-white tracking-[-0.0312em] leading-[1.4] uppercase mb-6 tablet:mb-8">
                    Launching 2026.
                </p>

                <h1
                    className="font-general-sans text-[32px] tablet:text-[48px] desktop:text-[56px] font-normal text-center leading-[1.1] tracking-[-0.01em] bg-clip-text text-transparent pb-1"
                    style={{
                        backgroundImage: 'radial-gradient(ellipse at top center, #FFFFFF 0%, #39C7FE 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Next-Gen Cube
                    <br />
                    Storage
                </h1>

                <div className="relative w-full max-w-[1232px] mt-6 tablet:mt-10">
                    <div className="absolute inset-x-[-14%] -top-[20%] bottom-[8%] pointer-events-none">
                        <div
                            className="absolute inset-0 opacity-80"
                            style={{
                                background:
                                    'radial-gradient(ellipse 88% 54% at 50% 48%, rgba(10, 52, 138, 0.78) 0%, rgba(7, 34, 94, 0.56) 36%, rgba(3, 14, 46, 0.22) 60%, rgba(0, 0, 0, 0) 82%)',
                                filter: 'blur(58px)',
                            }}
                        />
                        <div
                            className="absolute inset-x-0 top-[30%] h-[30%] opacity-40"
                            style={{
                                background:
                                    'linear-gradient(90deg, #000203 0%, #113EF0 31%, #02BDD3 49%, #113EF0 65%, #000203 100%)',
                                filter: 'blur(110px)',
                            }}
                        />
                        <div
                            className="absolute left-0 top-[10%] h-[80%] w-[46%] opacity-30"
                            style={{
                                background:
                                    'radial-gradient(ellipse at 8% 50%, rgba(17, 62, 240, 0.42) 0%, rgba(8, 30, 105, 0.28) 36%, rgba(0, 0, 0, 0) 72%)',
                                filter: 'blur(46px)',
                            }}
                        />
                        <div
                            className="absolute right-0 top-[10%] h-[80%] w-[46%] opacity-30"
                            style={{
                                background:
                                    'radial-gradient(ellipse at 92% 50%, rgba(17, 62, 240, 0.42) 0%, rgba(8, 30, 105, 0.28) 36%, rgba(0, 0, 0, 0) 72%)',
                                filter: 'blur(46px)',
                            }}
                        />
                    </div>
                    <Image
                        src={heroImage}
                        alt="URBX Next-Gen Cube Storage Robot"
                        className="relative w-full h-auto object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
}
