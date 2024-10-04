import { StaticImageData } from 'next/image';

export interface SimpleCta {
    href: string;
    text: string;
}

export interface Post {
    title: string;
    description: string;
    image: string;
    slug: string;
    date: string;
}

export type MediaContent = { videoSrc: string; image?: never } | { image: string | StaticImageData; videoSrc?: never };
