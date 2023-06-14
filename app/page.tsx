import { Hero, SearchBar, CustomFilter } from "@/components";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
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
            </div>
        </main>
    );
}
