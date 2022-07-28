import ScrollSection from "../../components/body/scroll-section/ScrollSection";

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;
