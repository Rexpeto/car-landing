"use client";
import { useRouter } from "next/navigation";
import { showMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils/getCars";

const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
    const router = useRouter();

    const handleClick = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName);
    };

    return (
        <div className="w-full flex-center gap-5 mt-8">
            {!isNext && (
                <CustomButton
                    title="Mostar más"
                    typeBtn="button"
                    containerStyles="border border-blue-700 rounded-full font-semibold text-blue-700 hover:bg-blue-700 hover:text-white transition duration-150"
                    handleClick={handleClick}
                />
            )}
        </div>
    );
};

export default ShowMore;
