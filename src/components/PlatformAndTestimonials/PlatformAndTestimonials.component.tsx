import Image from 'next/image';
import { ibm_mono } from '@/styles/fonts';
import CompanyLogo from '@/assets/dcs_logo.svg';
import Link from 'next/link';
import ButtonLink from '@/components/ButtonLink';

export default function PlatformAndTestimonials() {
    return (
        <section className="grid grid-cols-1 laptop:grid-cols-2">
            <div className="bg-white px-6 tablet:px-0 py-16 laptop:pr-8 laptop:pt-24 laptop:pb-32 desktop:pt-[120px] desktop:pr-[110px] desktop:pb-[180px]">
                <div className="max-w-[460px] mx-auto laptop:ml-auto laptop:mr-0 flex flex-col h-full justify-between">
                    <div>
                        <p
                            className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                            style={ibm_mono.style}
                        >
                            URBX PLATOFRM
                        </p>
                        <h3 className="mt-5 text-3xl laptop:text-[40px] laptop:leading-[52px] font-light">
                            High-Speed <br /> Fulfillment Automation <br /> for Rapid Distribution
                        </h3>
                    </div>
                    <div>
                        <h3 className="text-black font-bold text-3xl laptop:text-[40px] laptop:leading-[52px]">
                            Lets talk about the future of retail
                        </h3>
                        <ButtonLink href="/contact-us" className="mt-5 uppercase" variant="primary">
                            Contact Us
                        </ButtonLink>
                    </div>
                </div>
            </div>
            <div className="bg-standard-7 px-6 tablet:px-0 py-16 laptop:pl-8 laptop:pt-24 laptop:pb-32 desktop:pt-[120px] desktop:pl-[110px] desktop:pb-[180px]">
                <div className="max-w-[440px] mx-auto laptop:mr-auto laptop:ml-0">
                    <p
                        className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                        style={ibm_mono.style}
                    >
                        Enterprise Partners
                    </p>
                    <p className="text-xl font-medium mt-5">
                        “The URBX system is truly a strategic game-changer in the retail space because it enables
                        high-speed, on-demand fulfillment of both e-commerce and store-level replenishment orders.”
                    </p>
                    <div className="mt-[60px] flex items-center gap-5">
                        <div className="flex items-center gap-10">
                            <div>
                                <p className="font-bold text-standard-1">Matt Ferguson</p>
                                <span>President, DCS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
