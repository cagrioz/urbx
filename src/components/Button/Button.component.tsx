import { ibm_mono } from '@/styles/fonts';
import classNames from 'classnames';

export type ButtonVariants = 'dark' | 'light' | 'primary';
export type ButtonVariantStyle = { background: string; text: string };

const VariantStyling: Record<ButtonVariants, ButtonVariantStyle> = {
    dark: {
        background: 'bg-standard-1',
        text: 'text-white',
    },
    light: {
        background: 'bg-white',
        text: 'text-standard-1',
    },
    primary: {
        background: 'bg-accent',
        text: 'text-white',
    },
};

export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: ButtonVariants;
    onClick?: any;
    disabled?: boolean;
}

export default function Button({
    onClick,
    children,
    className,
    variant = 'dark',
    disabled,
    ...otherProps
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={classNames(
                'px-8 py-5 rounded-[31px] inline-block text-base leading-5 font-semibold',
                VariantStyling[variant].background,
                VariantStyling[variant].text,
                className,
                ibm_mono.className
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
}
