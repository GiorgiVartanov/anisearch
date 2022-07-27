import "./animeCards.scss";

import AnimeCard from "../anime-card/AnimeCard.jsx";

import { useLazyQuery, useQuery } from "@apollo/client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { client } from "../../../App";

import { GET_ANIME_LIST } from "../../../queries/animeQueries";

const AnimeCards = ({ search }) => {
    const [getNew, { loading, error, data, fetchMore }] =
        useLazyQuery(GET_ANIME_LIST);
    // const { loading, error, data, fetchMore } = useQuery(GET_ANIME_LIST, {
    //     variables: { page: 1, perPage: 10, search: search },
    // });

    let page = 1; // I am not sure if it is right to use something like this in react

    const observer = useRef();
    const lastCard = useCallback(
        // it is used to fetch more data when user is on the bottom of a page
        (node) => {
            // node is last created AnimeCard on page
            if (loading) return;
            if (observer.current) observer.current.disconnect(); // it will disconnect observer from a previous element
            observer.current = new IntersectionObserver((entries) => {
                if (
                    entries[0].isIntersecting &&
                    data.Page.pageInfo.hasNextPage
                ) {
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
        [loading]
    );

    useEffect(() => {
        client.resetStore();
        if (search === "")
            getNew({
                variables: { page: 1, perPage: 10 },
                updateQuery: (
                    previousResult,
                    { fetchMoreResult, queryVariables }
                ) => {
                    page = 1;
                    return fetchMoreResult;
                },
            });
        else
            getNew({
                variables: { page: 1, perPage: 10, search: search },
                updateQuery: (
                    previousResult,
                    { fetchMoreResult, queryVariables }
                ) => {
                    page = 1;
                    return fetchMoreResult;
                },
            });
    }, [search]);

    if (!data) return <p className="warning">No Data</p>;
    if (loading) return <p className="warning">Loading...</p>;
    if (error) return <p className="warning">Something Went Wrong</p>;
    if (data.Page.media.length < 1)
        return <p className="warning">No Results ⬇️</p>;

    return (
        <div className="changed-centered">
            <div className="item-holder">
                {data.Page.media.map((show, index) => {
                    if (data.Page.media.length === index + 1) {
                        return (
                            <AnimeCard
                                myref={lastCard}
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
