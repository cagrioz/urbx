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
            <button className="fixed top-0 right-0 p-8 z-50 outline-none cursor-pointer" onClick={closeModal}>
                <IoMdClose className="text-white h-8 w-8" />
            </button>
            <div className={classNames('fixed inset-0 bg-black bg-opacity-50 cursor-pointer', overlayClassName)}></div>
            <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
                <Dialog.Panel className="relative max-w-3xl w-full bg-black rounded-xl shadow-lg p-8 text-left">
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
