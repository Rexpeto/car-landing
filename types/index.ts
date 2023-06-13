import { MouseEventHandler } from "react";

export interface CustomButttonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    typeBtn?: "button" | "submit";
}
