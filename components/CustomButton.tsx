"use client";
import { CustomButttonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
    title,
    containerStyles,
    handleClick,
    typeBtn
}: CustomButttonProps) => {
    return (
        <button
            disabled={false}
            type={typeBtn || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span>{title}</span>
        </button>
    );
};

export default CustomButton;
