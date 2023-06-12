"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
    const handleScroll = () => {};

    return (
        <div className="hero darK:bg-gray-900">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Encuentre, reserve o alquile un automóvil, ¡rápida y
                    fácilmente!
                </h1>
                <p className="hero__subtitle">
                    Optimice su experiencia de alquiler de coches con nuestro
                    sencillo proceso de reserva.
                </p>
                <CustomButton
                    title="Explorar carros"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="Car hero"
                        fill
                        className="object-contain"
                    />

                    <div className="hero__image-overlay" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
