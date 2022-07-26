import AnimeCards from "../../components/body/anime-cards/AnimeCards";

import { useQuery } from "@apollo/client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { client } from "../../App";

import { GET_ANIME_LIST } from "../../queries/animeQueries";

const AnimeList = () => {
    const { search } = useParams();
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchedValue, setSearchedValue] = useState("");
    const [animeToSearch, setAnimeToSearch] = useState(null);

    const { loading, error, data, fetchMore } = useQuery(GET_ANIME_LIST, {
        variables: { page: 1, perPage: 10, search: search },
    });

    let page = 1; // I am not sure if it is right to use something like this in react

    const observer = useRef();
    const lastAnime = useCallback(
        // it is used to fetch more data when user is on the bottom of a page
        (node) => {
            // node is created AnimeCard on page
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

    const handleSearch = (e) => {
        // MAKE IT SO IT NAVIGATES TO /:search
        e.preventDefault();
        client.clearStore();
        setSearchedValue(e.target.value);
        setCurrentPage(1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchedValue === "") setAnimeToSearch(null);
            else setAnimeToSearch(searchedValue);
            page = 1;
        }, 1500);

        return () => clearTimeout(timer);
    }, [searchedValue]);

    useEffect(() => {
        // console.log(animeToSearch);
        if (animeToSearch === null) navigate(`/animelist`);
        else navigate(`/animelist/${animeToSearch}`);
    }, [animeToSearch]);

    useEffect(() => {
        console.log("search", search);
        if (typeof search === "undefined")
            console.log("now we need to search for ''");
    }, [search]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            <input type="text" onChange={handleSearch} value={searchedValue} />
            <AnimeCards data={data.Page.media} myref={lastAnime} />
        </>
    );
};

export default AnimeList;
