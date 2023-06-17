"use client";

import { useState } from "react";
import { SearchButton, SearchManuFacturer } from "@/components";
import { TbBoxModel } from "react-icons/tb";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const [manuFacturer, setManuFacturer] = useState("");
    const [model, setModel] = useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manuFacturer === "" && model === "") {
            return toast.warn("Debe llenar los campos");
        }

        updateSearchParams(manuFacturer.toLowerCase(), model.toLowerCase());
    };

    const updateSearchParams = (manuFacturer: string, model: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }

        if (manuFacturer) {
            searchParams.set("manufacturer", manuFacturer);
        } else {
            searchParams.delete("manufacturer");
        }

        const newPathname = `${
            window.location.pathname
        }?${searchParams.toString()}`;

        router.push(newPathname);
    };

    return (
        <form className="searchbar gap-2" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManuFacturer
                    manuFacturer={manuFacturer}
                    setManuFacturer={setManuFacturer}
                />
                <SearchButton otherClasses="sm:hidden dark:text-white" />
            </div>
            <div className="searchbar__item">
                <TbBoxModel className="dark:text-white absolute left-2 text-lg" />
                <input
                    type="text"
                    name="model"
                    value={model}
                    onChange={e => setModel(e.target.value)}
                    className="searchbar__input relative border border-gray-700 rounded dark:text-white"
                />
                <SearchButton otherClasses="sm:hidden dark:text-white" />
            </div>
            <SearchButton otherClasses="max-sm:hidden dark:text-white ml-4 text-xl" />
        </form>
    );
};

export default SearchBar;
