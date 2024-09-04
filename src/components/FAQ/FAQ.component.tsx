'use client';
import React from 'react';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Accordion from '../Accordion';
import Image from 'next/image';
import FAQImage from '@/assets/faq_bg.jpg';
import ButtonLink from '../ButtonLink';

function FAQ() {
    return (
        <section className="bg-black pb-8 tablet:pb-16 laptop:pb-[120px]">
            <Container>
                <div className="bg-standard-7 p-8 desktop:p-[60px] rounded-[20px]">
                    <div>
                        <p
                            className="text-standard-4 text-sm font-medium uppercase tracking-widest"
                            style={ibm_mono.style}
                        >
                            FAQ
                        </p>
                        <h2 className="text-[40px] leading-[52px] mt-4 mb-2 font-general-sans">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-base text-standard-3 font-general-sans font-light">
                            We’re here for you. Browse our FAQ below
                        </p>
                    </div>
                    <div className="grid grid-cols-1 tablet:grid-cols-2 mt-10 gap-10">
                        <div className="flex flex-col gap-4">
                            <Accordion
                                labelText="What’s the efficiency improvement I can expect using Urbx?"
                                defaultOpen
                            >
                                <p>
                                    Your efficiency gain will depend on a number of factors, such as your picking speed
                                    before and after, error reduction ratio and storage area reduction. Normally 2 to 5
                                    times faster than manual picking operations.
                                </p>
                            </Accordion>
                            <Accordion labelText="How long does a bin retrieval take?">
                                <p>
                                    Your efficiency gain will depend on a number of factors, such as your picking speed
                                    before and after, error reduction ratio and storage area reduction. Normally 2 to 5
                                    times faster than manual picking operations.
                                </p>
                            </Accordion>
                            <Accordion labelText="Can I change the picking list">
                                <p>
                                    Your efficiency gain will depend on a number of factors, such as your picking speed
                                    before and after, error reduction ratio and storage area reduction. Normally 2 to 5
                                    times faster than manual picking operations.
                                </p>
                            </Accordion>
                        </div>
                        <div className="relative rounded-[20px] h-[356px] overflow-hidden">
                            <Image src={FAQImage} alt="FAQ" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="z-10 relative p-10">
                                <h4 className="font-bold text-2xl text-white">Don’t have an answer?</h4>
                                <ButtonLink href="/contact" className="mt-4 uppercase py-3.5 px-[22px]" variant="light">
                                    Contact Us
                                </ButtonLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default FAQ;
