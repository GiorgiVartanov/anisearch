import "./home.scss";

import HomePageSection from "../../components/body/home-page-section/HomePageSection";

const Home = () => {
    return (
        <main className="home-page">
            <section>
                <HomePageSection
                    name={"Future Shows"}
                    status={"NOT_YET_RELEASED"}
                    sortBy={"POPULARITY_DESC"}
                />
                <HomePageSection
                    name={"Trending Now"}
                    status={"RELEASING"}
                    sortBy={"TRENDING_DESC"}
                />
                <HomePageSection
                    name={"Popular This Season"}
                    status={"RELEASING"}
                    sortBy={"POPULARITY_DESC"}
                />
                <HomePageSection
                    name={"All Time Popular"}
                    sortBy={"POPULARITY_DESC"}
                />
            </section>
        </main>
    );
};

export default Home;
