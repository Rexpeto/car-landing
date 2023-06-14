"use client";
import { Combobox, Transition } from "@headlessui/react";
import { FaCar } from "react-icons/fa";
import { SearchManuFacturerProps } from "@/types";
import { manufacturers } from "@/constants";
import { Fragment, useState } from "react";

const SearchManuFacturer = ({
    manuFacturer,
    setManuFacturer
}: SearchManuFacturerProps) => {
    const [query, setQuery] = useState("");

    const filterManuFacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter(item =>
                  item
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    return (
        <div className="search-manufacturer border rounded dark:border-gray-700">
            <Combobox>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px] ml-2 dark:text-white">
                        <FaCar />
                    </Combobox.Button>

                    <Combobox.Input
                        className="search-manufacturer__input dark:text-white"
                        placeholder="Chevrolet"
                        displayValue={(manuFacturer: string) => manuFacturer}
                        onChange={e => setQuery(e.target.value)}
                    ></Combobox.Input>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options>
                            {filterManuFacturers.length === 0 &&
                            query !== "" ? (
                                <Combobox.Option
                                    value={query}
                                    className="search-manufacturer__option dark:text-white transition duration-150"
                                >
                                    Crear "{query}"
                                </Combobox.Option>
                            ) : (
                                filterManuFacturers.map(manuFacturer => (
                                    <Combobox.Option
                                        key={manuFacturer}
                                        value={manuFacturer}
                                        className={({ active }) =>
                                            `relative search-manufacturer__option dark:text-white cursor-pointer ${
                                                active
                                                    ? "bg-gray-200 dark:bg-gray-700"
                                                    : "bg-gray-100 dark:bg-gray-800"
                                            } transition duration-150`
                                        }
                                    >
                                        {manuFacturer}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManuFacturer;
