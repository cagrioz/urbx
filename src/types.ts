import { StaticImageData } from 'next/image';
import { SinglePostPageProps } from './templates/SinglePostPage.template';

export interface SimpleCta {
    href: string;
    text: string;
}

export interface Post extends SinglePostPageProps {
    slug: string;
    excerpt: string;
    date: string;
    cover: string | StaticImageData;
}

export type MediaContent = { videoSrc: string; image?: never } | { image: string | StaticImageData; videoSrc?: never };
