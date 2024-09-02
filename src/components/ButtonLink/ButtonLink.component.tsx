import { ibm_mono } from '@/styles/fonts';
import classNames from 'classnames';

export type ButtonLinkVariants = 'dark' | 'light';
export type ButtonLinkVariantStyle = { background: string; text: string };

const VariantStyling: Record<ButtonLinkVariants, ButtonLinkVariantStyle> = {
    dark: {
        background: 'bg-standard-1',
        text: 'text-white',
    },
    light: {
        background: 'bg-white',
        text: 'text-standard-1',
    },
};

export interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    target?: string;
    className?: string;
    variant?: ButtonLinkVariants;
}

export default function ButtonLink({ target, href, children, className, variant = 'dark' }: ButtonLinkProps) {
    return (
        <a
            target={target}
            href={href}
            className={classNames(
                'px-8 py-5 rounded-[31px] inline-block text-base leading-5 font-semibold',
                VariantStyling[variant].background,
                VariantStyling[variant].text,
                className,
                ibm_mono.className
            )}
        >
            {children}
        </a>
    );
}
