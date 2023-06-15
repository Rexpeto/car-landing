import { CarProps } from "@/types";
import CardCar from "./CardCar";

const GridCars = ({ cars }: any) => {
    return (
        <section>
            <div className="home__cars-wrapper">
                {cars.map((car: CarProps, index: number) => (
                    <CardCar key={index} car={car} />
                ))}
            </div>
        </section>
    );
};

export default GridCars;
