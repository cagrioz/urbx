import Image, { StaticImageData } from 'next/image';
import { ibm_mono } from '@/styles/fonts';

import ButtonLink from '@/components/ButtonLink';
import classNames from 'classnames';

export interface PlatformAndTestimonialsProps {
    quote: string;
    personImg?: StaticImageData;
    personName: string;
    personRole: string;
    companyLogo: StaticImageData;
    invertLogoBrigtness?: boolean;
}

export default function PlatformAndTestimonials({
    quote,
    personImg,
    personName,
    personRole,
    companyLogo,
    invertLogoBrigtness,
}: PlatformAndTestimonialsProps) {
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
                        <h3 className="mt-5 text-3xl laptop:text-[40px] laptop:leading-[52px] font-light text-standard-1">
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
                    <p className="text-xl font-medium mt-5 text-standard-1">{quote}</p>
                    <div className="mt-[60px] flex items-center gap-2 laptop:gap-5">
                        <div className="flex items-center justify-center laptop:justify-start gap-6">
                            <div>
                                <p className="font-bold text-standard-1">{personName}</p>
                                <span className="text-standard-3">{personRole}</span>
                            </div>
                            <div className="w-14 tablet:w-20 ml-4">
                                <Image
                                    src={companyLogo}
                                    alt="DCS Logo"
                                    className={classNames({ 'brightness-0': invertLogoBrigtness })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
