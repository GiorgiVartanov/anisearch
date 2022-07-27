import AnimeCards from "../anime-cards/AnimeCards";

const ScrollSection = ({ name, sortBy }) => {
    return (
        <article className="anime-section-holder">
            <h3>{name}</h3>
            <div className="show-list">
                <AnimeCards
                    type="ANIME"
                    perPage={5}
                    sortBy={sortBy}
                    findMore={false}
                />
            </div>
        </article>
    );
};

export default ScrollSection;
