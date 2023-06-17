"use client";

import { useState } from "react";
import { SearchButton, SearchManuFacturer } from "@/components";

const SearchBar = () => {
    const [manuFacturer, setManuFacturer] = useState("");

    const handleSearch = () => {};

    return (
        <form className="seachbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManuFacturer
                    manuFacturer={manuFacturer}
                    setManuFacturer={setManuFacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
        </form>
    );
};

export default SearchBar;
