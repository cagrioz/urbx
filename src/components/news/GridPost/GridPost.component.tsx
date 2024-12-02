'use client';

import useBuildNewsUrl from '@/hooks/useBuildNewsUrl';
import useCalculateReadtime from '@/hooks/useCalculateReadtime';
import { ibm_mono } from '@/styles/fonts';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface GridPostProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    slug: string;
}

export default function GridPost({ title, description, image, slug }: GridPostProps) {
    const readtime = useCalculateReadtime(description);
    const postUrl = useBuildNewsUrl(slug);

    return (
        <div className="flex items-center gap-6 bg-standard-7 rounded-[20px] overflow-hidden p-3.5">
            <div className="w-[262px] shrink-0">
                <div className="h-[292px] w-full overflow-hidden rounded-[10px] relative">
                    <Link href={postUrl}>
                        <Image src={image} alt={title} fill className="object-cover" />
                    </Link>
                </div>
            </div>
            <div className="grow flex flex-col h-full">
                <div className="grow pt-2">
                    <span className="text-standard-4 text-sm" style={ibm_mono.style}>
                        NEWS . {readtime} min
                    </span>
                    <h3 className="text-black text-2xl mt-6">
                        <Link href={postUrl}>
                            <span dangerouslySetInnerHTML={{ __html: title }} />
                        </Link>
                    </h3>
                </div>
                <Link
                    href={postUrl}
                    className="underline text-accent text-sm mt-6 inline-block pb-2"
                    style={ibm_mono.style}
                >
                    Read More
                </Link>
            </div>
        </div>
    );
}
