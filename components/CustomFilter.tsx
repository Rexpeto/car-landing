"use client";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { customFilterProps } from "@/types";
import { BsArrowDownShort } from "react-icons/bs";
import { updateSearchParams } from "@/utils/getCars";

const CustomFilter = ({ title, options }: customFilterProps) => {
    const [selected, setSelected] = useState(options[0]);
    const router = useRouter();

    const handleUpdateParams = e => {
        const { value } = e;
        const newPathName = updateSearchParams(title, value);

        router.push(newPathName);
    };

    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={e => {
                    setSelected(e);
                    handleUpdateParams(e);
                }}
            >
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn dark:bg-gray-800 dark:text-white dark:border-gray-700">
                        <span className="block truncate">{selected.title}</span>
                        <BsArrowDownShort />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="custom-filter__options dark:bg-gray-800">
                            {options.map(option => (
                                <Listbox.Option
                                    key={option.title}
                                    value={option}
                                    className={({ active }) =>
                                        `relative select-none py-2 px-4 dark:text-white scroll-smooth ${
                                            active
                                                ? "bg-primary-blue text-white"
                                                : "dark:bg-gray-800"
                                        } transition duration-150`
                                    }
                                >
                                    {({ selected }) => (
                                        <span
                                            className={`block truncate ${
                                                selected
                                                    ? "font-bold"
                                                    : "font-medium"
                                            }`}
                                        >
                                            {option.title}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default CustomFilter;
