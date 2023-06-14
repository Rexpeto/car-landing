"use client";

import { useState } from "react";
import { SearchManuFacturer } from "./";

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
            </div>
        </form>
    );
};

export default SearchBar;
