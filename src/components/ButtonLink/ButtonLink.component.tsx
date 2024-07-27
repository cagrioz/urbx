import { ibm_mono } from '@/styles/fonts';
import classNames from 'classnames';

export interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    target?: string;
    className?: string;
}

export default function ButtonLink({ target, href, children, className }: ButtonLinkProps) {
    return (
        <a
            target={target}
            href={href}
            className={classNames(
                'px-8 py-5 rounded-[31px] text-white bg-standard-1 inline-block text-base leading-5 font-semibold',
                className,
                ibm_mono.className
            )}
        >
            {children}
        </a>
    );
}
