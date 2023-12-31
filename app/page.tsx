import {
    Hero,
    GridCars,
    SearchBar,
    CustomFilter,
    Header,
    Footer,
    ShowMore
} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import getCars from "@/utils/getCars";

export default async function Home({ searchParams }: any) {
    const allCars = await getCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2023,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 9,
        model: searchParams.model || ""
    });
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

                        <div className="home__filters-container flex gap-3">
                            <CustomFilter title="fuel" options={fuels} />
                            <CustomFilter
                                title="year"
                                options={yearsOfProduction}
                            />
                        </div>
                    </div>
                    {!isDataEmpty ? (
                        <>
                            <GridCars cars={allCars} />
                            <ShowMore
                                pageNumber={(searchParams.limit || 10) / 10}
                                isNext={
                                    (searchParams.limit || 9) > allCars.length
                                }
                            />
                        </>
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
