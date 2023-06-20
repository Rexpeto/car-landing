import clientAxios from "@/config/axios";
import { getCarsProps } from "@/types";

const getCars = async (filters: getCarsProps) => {
    const { manufacturer, model, year, limit, fuel } = filters;

    try {
        const { data } = await clientAxios(
            `?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`
        );

        return data;
    } catch (e) {
        console.log(e);
    }
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${
        window.location.pathname
    }?${searchParams.toString()}`;

    return newPathname;
};

export default getCars;
