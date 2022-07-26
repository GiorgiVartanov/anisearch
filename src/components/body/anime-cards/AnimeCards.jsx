import "./animeCards.scss";

import AnimeCard from "../anime-card/AnimeCard.jsx";
import PageSelect from "../../utility/pageSelect.component/PageSelect";

import { useState, useEffect, useRef, useCallback } from "react";

import { Link } from "react-router-dom";

const AnimeCards = ({ data, myref }) => {
    return (
        <div className="changed-centered">
            <div className="item-holder">
                {data.map((show, index) => {
                    if (data.length === index + 1) {
                        return (
                            <AnimeCard
                                myref={myref}
                                key={show.id}
                                id={show.id}
                                title={show.title.romaji}
                                status={show.status}
                                coverImage={show.coverImage.large}
                                genres={show.genres}
                                averageScore={show.averageScore}
                            />
                        );
                    } else {
                        return (
                            <AnimeCard
                                key={show.id}
                                id={show.id}
                                title={show.title.romaji}
                                status={show.status}
                                coverImage={show.coverImage.large}
                                genres={show.genres}
                                averageScore={show.averageScore}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default AnimeCards;
