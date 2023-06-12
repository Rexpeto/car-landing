"use client";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {};

    return (
        <div className="hero">
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
        </div>
    );
};

export default Hero;
