'use client';
import React, { ReactNode, useState } from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import { ibm_mono } from '@/styles/fonts';
import Button from '../Button';
import Modal from '../Modal';
import { IoPlaySharp } from 'react-icons/io5';
import { SimpleCta } from '@/types';
import ButtonLink from '../ButtonLink';
export interface VideoHeroProps {
    video: any;
    subtitle: string;
    title: ReactNode;
    description?: string;
    popupVideoId?: string;
    learnMoreBtn?: SimpleCta;
}

export default function VideoHero({
    video,
    subtitle,
    title,
    description,
    popupVideoId,
    learnMoreBtn,
}: VideoHeroProps): JSX.Element {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <section className="relative flex flex-col justify-between min-h-[650px] laptop:min-h-[800px] pb-[100px] h-lvh">
                <video autoPlay muted loop playsInline className="absolute z-0 object-cover w-full h-full">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0"></div>
                <Navigation />
                <Container className="z-50">
                    <p
                        className="text-standard-4 text-[12px] tablet:text-sm font-medium uppercase tracking-widest"
                        style={ibm_mono.style}
                    >
                        {subtitle}
                    </p>
                    <h1 className="mt-4 text-white text-3xl tablet:text-[40px] leading-tight max-w-[510px]">{title}</h1>
                    {description && (
                        <p className="max-w-[550px] text-standard-4 font-normal font-general-sans mt-6">
                            {description}
                        </p>
                    )}
                    {popupVideoId && learnMoreBtn && (
                        <div className="flex flex-col tablet:flex-row mt-6 gap-6">
                            {popupVideoId && (
                                <Button
                                    variant="light"
                                    className="text-center justify-center tablet:justify-start tablet:flex"
                                    onClick={openModal}
                                    icon={<IoPlaySharp />}
                                >
                                    Watch Video
                                </Button>
                            )}
                            {learnMoreBtn && (
                                <ButtonLink
                                    href={learnMoreBtn.href}
                                    className="uppercase text-center text-sm"
                                    variant="primary"
                                >
                                    {learnMoreBtn.text}
                                </ButtonLink>
                            )}
                        </div>
                    )}
                </Container>
            </section>
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <div className="relative pb-[56.25%]">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${popupVideoId}?si=T7Bf4cV885K4Jsk7&autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
        </>
    );
}
