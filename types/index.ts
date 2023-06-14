import React, { MouseEventHandler } from "react";

export interface CustomButttonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    typeBtn?: "button" | "submit";
}

export interface SearchManuFacturerProps {
    manuFacturer: string;
    setManuFacturer: React.Dispatch<React.SetStateAction<string>>;
}
