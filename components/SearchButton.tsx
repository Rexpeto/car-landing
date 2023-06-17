import { BiSearch } from "react-icons/bi";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    return (
        <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
            <BiSearch />
        </button>
    );
};

export default SearchButton;
