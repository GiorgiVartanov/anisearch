import "./home.scss";

import ScrollSection from "../../components/body/scroll-section/ScrollSection";

const Home = () => {
    return (
        <main className="home-page">
            <section>
                <ScrollSection
                    name={"Future Shows"}
                    status={"NOT_YET_RELEASED"}
                    sortBy={"POPULARITY_DESC"}
                />
                <ScrollSection
                    name={"Trending Now"}
                    status={"RELEASING"}
                    sortBy={"TRENDING_DESC"}
                />
                <ScrollSection
                    name={"Popular This Season"}
                    status={"RELEASING"}
                    sortBy={"POPULARITY_DESC"}
                />
                <ScrollSection
                    name={"All Time Popular"}
                    sortBy={"POPULARITY_DESC"}
                />
            </section>
        </main>
    );
};

export default Home;
