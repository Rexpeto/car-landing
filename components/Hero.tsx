"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
    const handleScroll = () => {};

    return (
        <section className="hero dark:bg-gray-900">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title dark:text-white">
                    Encuentre, reserve o alquile un automóvil, ¡rápida y
                    fácilmente!
                </h1>
                <p className="hero__subtitle dark:text-gray-300">
                    Optimice su experiencia de alquiler de coches con nuestro
                    sencillo proceso de reserva.
                </p>
                <CustomButton
                    title="Explorar carros"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                    typeBtn="button"
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
                </div>
                <div className="hero__image-overlay" />
            </div>
        </section>
    );
};

export default Hero;
