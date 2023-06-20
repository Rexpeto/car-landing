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

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface getCarsProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface optionsProps {
    title: string;
    value: string;
}

export interface customFilterProps {
    title: string;
    options: optionsProps[];
}

export interface showMoreProps {
    pageNumber: number;
    isNext: boolean;
}
