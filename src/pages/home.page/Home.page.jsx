import ScrollSection from "../../components/body/scroll-section/ScrollSection";

const Home = () => {
    return (
        <>
            <section>
                <ScrollSection name={"Trending Now"} sortBy={"TRENDING"} />
                <ScrollSection
                    name={"Popular This Season"}
                    sortBy={"EPISODES"}
                />
                <ScrollSection
                    name={"All Time Popular"}
                    sortBy={"POPULARITY"}
                />
            </section>
        </>
    );
};

export default Home;
