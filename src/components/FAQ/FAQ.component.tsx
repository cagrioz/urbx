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
        <section className="pb-8 tablet:pb-16 laptop:pb-[120px]">
            <Container>
                <div className="bg-standard-7 p-8 desktop:p-[60px] rounded-[20px]">
                    <div>
                        <p
                            className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                            style={ibm_mono.style}
                        >
                            FAQ
                        </p>
                        <h2 className="text-black text-3xl laptop:text-[40px] laptop:leading-[52px] mt-4 mb-2 font-general-sans">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-base text-standard-3 font-general-sans font-light">
                            We&#39;re here for you. Browse our FAQ below
                        </p>
                    </div>
                    <div className="grid grid-cols-1 tablet:grid-cols-2 mt-10 gap-10">
                        <div className="flex flex-col gap-4">
                            <Accordion
                                labelText="What&#39;s the efficiency improvement I can expect using Urbx?"
                                defaultOpen
                            >
                                <p>
                                    Your efficiency gain will depend on a number of factors, such as your picking speed
                                    before and after, error reduction ratio and storage area reduction. Normally 2 to 5
                                    times faster than manual picking operations.
                                </p>
                            </Accordion>
                            <Accordion labelText="Can URBX&#39;s system be integrated with existing warehouses or material handling equipment?">
                                <p>
                                    The URBX system is engineered to operate at vertical heights ranging from 10 to 125 feet, allowing it to seamlessly integrate into virtually any existing warehouse configuration. Designed with a focus on simplicity and reliability, our system effortlessly adapts to your warehouse&#39;s footprint, ensuring compatibility with current material handling equipment. This flexibility not only enhances operational efficiency but also optimizes space utilization, making the URBX system an ideal solution for modern warehousing needs.
                                </p>
                            </Accordion>
                            <Accordion labelText="Can URBX&#39;s solutions handle a variety of goods and packing types?">
                                <p>
                                    URBX totes are engineered to support weights of up to 100 pounds, enabling them to handle a diverse array of goods in various configurations. The URBX system is designed to accommodate multiple tote heights, providing the versatility needed to store a wide range of products. This capability not only enhances operational flexibility but also optimizes storage density, significantly improving the efficiency of your warehouse operations. By maximizing the use of vertical space and adapting to different inventory types, the URBX system helps streamline logistics and drive productivity within your facility.
                                </p>
                            </Accordion>
                            <Accordion labelText="What is the typical lead time for deploying URBX&#39;s robotic system in a warehouse?">
                                <p>
                                    The timeline for implementing the URBX system into your existing warehouse operations is influenced by your current setup and throughput requirements. Typically, the integration process can take between four to eight months. This timeframe encompasses system installation, comprehensive employee training, and any necessary maintenance to ensure optimal performance. Our goal is to facilitate a smooth transition that minimizes disruption to your operations while maximizing efficiency.
                                </p>
                            </Accordion>
                        </div>
                        <div className="relative rounded-[20px] h-[356px] overflow-hidden">
                            <Image src={FAQImage} alt="FAQ" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="z-10 relative p-10">
                                <h4 className="font-bold text-2xl text-white">Don&#39;t have an answer?</h4>
                                <ButtonLink
                                    href="/contact-us"
                                    className="mt-4 uppercase py-3.5 px-[22px]"
                                    variant="light"
                                >
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
