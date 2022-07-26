import "./mangaCards.scss";

import MangaCard from "../manga-card/MangaCard";

import { useState, useEffect, useRef, useCallback } from "react";

import { Link } from "react-router-dom";

const MangaCards = ({ data, myref }) => {
    return (
        <div className="changed-centered">
            <div className="item-holder">
                {data.map((show, index) => {
                    if (data.length === index + 1) {
                        return (
                            <MangaCard
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
                            <MangaCard
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

export default MangaCards;
