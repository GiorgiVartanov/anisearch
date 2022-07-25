import "./animeCards.scss";

import AnimeCard from "../anime-card/AnimeCard.jsx";
import PageSelect from "../../utility/pageSelect.component/PageSelect";

import { useState, useEffect, useRef, useCallback } from "react";

import { Link } from "react-router-dom";

const AnimeCards = ({ data, myref }) => {
    // const observer = useRef();
    // const lastAnime = useCallback((node) => {
    //     console.log(node);
    // });

    return (
        <div className="changed-centered">
            <div className="item-holder">
                {data.map((anime, index) => {
                    if (data.length === index + 1) {
                        return (
                            <AnimeCard
                                myref={myref}
                                key={anime.id}
                                id={anime.id}
                            />
                        );
                    } else {
                        return <AnimeCard key={anime.id} id={anime.id} />;
                    }
                })}
            </div>
        </div>
    );
};

export default AnimeCards;
