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

export default getCars;
