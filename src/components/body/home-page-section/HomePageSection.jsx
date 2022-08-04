import "./scrollSection.scss";

import AnimeCards from "../anime-cards/AnimeCards";

import { Link } from "react-router-dom";

const HomePageSection = ({ name, sortBy, status }) => {
    return (
        <article className="anime-section-holder">
            <div className="article-text">
                <h3>{name}</h3>
                <Link className="see-more-link" to={`/${sortBy}`}>
                    see more
                </Link>
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
