'use client';
import { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { ibm_mono } from '@/styles/fonts';
import { IoTriangle } from 'react-icons/io5';

interface AccordionProps {
    labelText: string;
    defaultOpen?: boolean;
    disabled?: boolean;
    children: ReactNode;
}

export default function Accordion({ labelText, defaultOpen = false, disabled = false, children }: AccordionProps) {
    const [open, setOpen] = useState(defaultOpen);

    const handleToggle = () => {
        if (!disabled) {
            setOpen((prevState) => !prevState);
        }
    };

    return (
        <div
            className={classNames('rounded-[10px] bg-white p-5', {
                'opacity-50 cursor-not-allowed': disabled,
                'cursor-pointer': !disabled,
            })}
            onClick={handleToggle}
        >
            <div
                className={classNames('flex justify-between', {
                    'text-gray-400': disabled,
                })}
            >
                <span className="text-base font-semibold uppercase" style={ibm_mono.style}>
                    {labelText}
                </span>
                <span className="ml-5">
                    <IoTriangle
                        className={classNames('transition-transform duration-300 ', {
                            'rotate-180': open,
                        })}
                    />
                </span>
            </div>
            <div
                className={classNames('overflow-hidden', {
                    'max-h-screen': open,
                    'max-h-0': !open,
                })}
            >
                <div className="mt-2 text-base font-general-sans text-standard-1">{children}</div>
            </div>
        </div>
    );
}
