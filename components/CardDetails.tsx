"use client";
import { CarProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoCloseCircle } from "react-icons/io5";

interface CardDetailsProps {
    isOpen: boolean;
    car: CarProps;
    closeModal: () => void;
}

const CardDetails = ({ isOpen, car, closeModal }: CardDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as={`div`}
                    className="relative z-10"
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 blur-lg"></div>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-hidden">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto 
                                    transform rounded-2xl bg-white dark:bg-gray-800 text-left shadow-xl
                                    transition-all flex flex-col gap-5"
                                >
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="text-xl absolute top-2 right-2 z-10 w-fit p-1 rounded-full"
                                    >
                                        <IoCloseCircle className="text-white text-2xl object-contain" />
                                    </button>

                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg"></div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default CardDetails;
