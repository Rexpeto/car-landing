"use client";

import { CarProps } from "@/types";
import { calculatorRent } from "@/utils";
import Image from "next/image";
import { GiCartwheel, GiOverdrive, GiGasPump } from "react-icons/gi";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CardDetails from "./CardDetails";

interface cardCardProps {
    car: CarProps;
}

const CardCar = ({ car }: cardCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const rent = calculatorRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="car-card dark:bg-gray-700 dark:hover:bg-gray-600 group cursor-pointer transition duration-150">
            <div className="car-card__content">
                <h2 className="car-card__content-title dark:text-white first-letter:uppercase">
                    {make} {model}
                </h2>
            </div>
            <p className="flex mt-5 text-[22px] font-extrabold dark:text-white">
                <span className="self-start text-[16px] font-bold">$</span>
                {rent}
                <span className="self-end text-[16px] font-semibold">/día</span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src="/hero.png"
                    alt={`${model} ${year}`}
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            <div className="relative flex w-full mt-2 transition duration-150">
                <div className="flex group-hover:invisible w-full gap-2 justify-between transition duration-150">
                    <div className="flex flex-col justify-center items-center gap-2 dark:text-white">
                        <GiCartwheel className="text-lg" />
                        <p className="text-md">
                            {transmission === "a" ? "Automatico" : "Sincrónico"}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 dark:text-white">
                        <GiOverdrive className="text-lg" />
                        <p className="text-md first-letter:uppercase">
                            {drive}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 dark:text-white">
                        <GiGasPump className="text-lg" />
                        <p className="text-md">{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        title="Ver más"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue text-white font-bold hover:bg-blue-700 transition duration-150"
                        handleClick={() => handleModal()}
                    />
                </div>
            </div>
            <CardDetails
                isOpen={isOpen}
                car={car}
                closeModal={() => handleModal()}
            />
        </div>
    );
};

export default CardCar;
