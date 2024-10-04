import Image from 'next/image';
import Container from '@/components/Container';

export type QuoteCommentProps = {
    comment: string;
    authorName: string;
    authorRole: string;
    image: string;
    companyLogo: string;
    imageAlt?: string;
    companyLogoAlt?: string;
};

export default function QuoteComment({
    comment,
    authorName,
    authorRole,
    image,
    companyLogo,
    imageAlt = 'Cover image',
    companyLogoAlt = 'Company logo',
}: QuoteCommentProps) {
    return (
        <section>
            <Container>
                <div className="flex flex-col tablet:flex-row py-10 px-8 desktop:py-[90px] desktop:px-[102px] gap-8 desktop:gap-[120px] justify-between laptop:items-center border border-dashed border-standard-3 rounded-[10px]">
                    <div className="tablet:w-[240px] desktop:w-[360px] shrink-0 rounded-[10px] overflow-hidden">
                        <Image src={image} alt={imageAlt} width={400} height={400} />
                    </div>
                    <div>
                        <blockquote className="text-xl laptop:text-2xl">&quot;{comment}&quot;</blockquote>
                        <div className="flex items-center justify-between mt-11">
                            <div className="flex items-center gap-5">
                                <div>
                                    <p className="text-xl">{authorName}</p>
                                    <span className="text-base text-standard-4">{authorRole}</span>
                                </div>
                            </div>
                            <div className="h-[45px]">
                                <Image
                                    src={companyLogo}
                                    alt={companyLogoAlt}
                                    className="max-h-[45px] max-w-[130px] object-contain object-right"
                                    height={45}
                                    width={130}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
