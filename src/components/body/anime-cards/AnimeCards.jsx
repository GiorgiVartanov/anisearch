import "./animeCards.scss";

import AnimeCard from "../anime-card/AnimeCard.jsx";

import { useLazyQuery } from "@apollo/client";
import { useEffect, useRef, useCallback } from "react";

import { client } from "../../../App";

import { GET_ANIME_LIST } from "../../../queries/animeQueries";

const AnimeCards = ({
    search,
    type,
    genre,
    showType,
    year,
    season,
    perPage,
    sortBy,
    status,
    findMore,
}) => {
    const [getNew, { loading, error, data, fetchMore }] =
        useLazyQuery(GET_ANIME_LIST);

    let page = 1; // I am not sure if it is right to use something like this in react

    const observer = useRef();
    const lastCard = useCallback(
        // it is used to fetch more data when user is on the bottom of a page
        (node) => {
            // node is last created card on page
            if (loading) return;
            if (observer.current) observer.current.disconnect(); // it will disconnect observer from a previous element
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && findMore) {
                    // add later in if && data.Page.pageInfo.hasNextPage
                    fetchMore({
                        variables: {
                            page: page + 1,
                        },
                        updateQuery: (
                            previousResult,
                            { fetchMoreResult, queryVariables }
                        ) => {
                            page++;
                            return fetchMoreResult;
                        },
                    });
                }
            });
            if (node) observer.current.observe(node);
        },
        []
    );

    useEffect(() => {
        // I am sure there is better way to do this
        client.resetStore();

        if (findMore) {
            getNew({
                variables: {
                    isAdult: false,
                    page: 1,
                    perPage: perPage,
                    type: type,
                    sort: sortBy,
                    season: season, // if nothing in this field was passed it will stay undefined, so it won't have any impact on query
                    seasonYear: year,
                    genre: genre,
                    search: search,
                },
                updateQuery: (
                    previousResult,
                    { fetchMoreResult, queryVariables }
                ) => {
                    page = 1;
                    return fetchMoreResult;
                },
            });
        } else {
            getNew({
                variables: {
                    isAdult: false,
                    page: 1,
                    perPage: perPage,
                    type: type,
                    sort: sortBy,
                    status: status,
                },
                fetchPolicy: "no-cache",
            });
        }
    }, [search, type, perPage, genre, showType, year, season]);

    if (loading) return <p className="warning">Loading...</p>;
    if (error) return <p className="warning">Something Went Wrong</p>;
    if (!data) return <p className="warning">No Data</p>;
    if (data.Page.media.length < 1)
        return <p className="warning">No Results</p>;

    return (
        <div className="centered">
            <div className="card-holder">
                {data.Page.media.map((show, index) => {
                    if (data.Page.media.length === index + 1) {
                        return (
                            <AnimeCard
                                myref={lastCard}
                                key={show.id}
                                id={show.id}
                                title={show.title.romaji}
                                coverImage={show.coverImage.large}
                                type={type}
                            />
                        );
                    } else {
                        return (
                            <AnimeCard
                                key={show.id}
                                id={show.id}
                                title={show.title.romaji}
                                coverImage={show.coverImage.large}
                                type={type}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default AnimeCards;
