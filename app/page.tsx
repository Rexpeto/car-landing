import { Hero, SearchBar, CustomFilter, Header, Footer } from "@/components";
import GridCars from "@/components/gridCars";
import clientAxios from "@/config/axios";

export default async function Home() {
    const Cars = async () => {
        try {
            const { data } = await clientAxios("?model=supra");

            return data;
        } catch (e) {
            console.log(e);
        }
    };

    const allCars = await Cars();
    const isDataEmpty =
        !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <>
            <Header />
            <main className="overflow-hidden">
                <Hero />
                <div
                    className="mt-12 padding-x padding-y max-width"
                    id="discover"
                >
                    <div className="home__text-container dark:text-white">
                        <h1 className="text-3xl font-extrabold">
                            Catálago de carros
                        </h1>
                        <p>Explora los carros que te pueden gustar</p>
                    </div>
                    <div className="home__filters">
                        <SearchBar />

                        <div className="home__filters-container">
                            <CustomFilter title="combustible" />
                            <CustomFilter title="año" />
                            <CustomFilter title="modelo" />
                        </div>
                    </div>
                    {!isDataEmpty ? (
                        <GridCars cars={allCars} />
                    ) : (
                        <div className="hoem__error-container">
                            <h2 className="dark:text-white font-semibold text-3xl">
                                Oops!! No hay resultados
                            </h2>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
