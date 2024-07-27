import React from 'react';
import { Dialog } from '@headlessui/react';
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    closeModal: () => void;
    overlayClassName?: string;
};

export default function Modal({ isOpen, closeModal, children, overlayClassName }: ModalProps) {
    if (!isOpen) return null;

    return (
        <Dialog as="div" className="relative z-50" open={isOpen} onClose={closeModal}>
            <div className={classNames('fixed inset-0 bg-black bg-opacity-50 cursor-pointer', overlayClassName)} />
            <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
                <Dialog.Panel className="relative max-w-3xl w-full bg-standard-1 rounded-xl shadow-lg p-12 text-left">
                    <button className="absolute top-2 right-2 h-8 w-8 z-10 outline-none" onClick={closeModal}>
                        <IoMdClose className="text-white h-full w-full" />
                    </button>
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
