'use client';

import useBuildNewsUrl from '@/hooks/useBuildNewsUrl';
import useCalculateReadtime from '@/hooks/useCalculateReadtime';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface FeaturedPostProps {
    title: string;
    excerpt: string;
    description: string;
    image: string | StaticImageData;
    slug: string;
}

export default function FeaturedPost({ title, excerpt, description, image, slug }: FeaturedPostProps) {
    const readtime = useCalculateReadtime(description);
    const postUrl = useBuildNewsUrl(slug);

    return (
        <div className="flex items-center gap-6 bg-standard-7 rounded-[20px] overflow-hidden p-2.5">
            <div className="rounded-[20px] overflow-hidden shrink-0 w-[564px] h-[480px]">
                <Link href={postUrl}>
                    <Image
                        src={image}
                        alt="Demo"
                        className="object-cover h-full laptop:min-h-[480px]"
                        width={600}
                        height={400}
                    />
                </Link>
            </div>
            <div className="p-8 laptop:p-10">
                <span className="text-standard-4 text-sm" style={ibm_mono.style}>
                    NEWS . {readtime} min
                </span>
                <h3 className="text-black text-3xl laptop:text-[40px] laptop:leading-[52px] mt-6">
                    <Link href={postUrl}>
                        <span dangerouslySetInnerHTML={{ __html: title }} />
                    </Link>
                </h3>
                <div className="text-standard-4 text-base mt-3" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                <Link href={postUrl} className="underline text-accent text-sm mt-6 inline-block" style={ibm_mono.style}>
                    Read More
                </Link>
            </div>
        </div>
    );
}
