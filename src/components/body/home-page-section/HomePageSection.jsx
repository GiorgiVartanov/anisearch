import "./scrollSection.scss";

import AnimeCards from "../anime-cards/AnimeCards";

const HomePageSection = ({ name, sortBy, status }) => {
    return (
        <article className="anime-section-holder">
            <div className="article-text">
                <h2>{name}</h2>
            </div>

            <div className="show-list">
                <AnimeCards
                    type={{ value: "ANIME" }}
                    perPage={5}
                    sortBy={sortBy}
                    status={status}
                    findMore={false}
                />
            </div>
        </article>
    );
};

export default HomePageSection;
