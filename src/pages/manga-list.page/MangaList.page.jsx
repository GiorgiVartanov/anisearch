import MangaCards from "../../components/body/manga-cards/MangaCards";

import { useQuery } from "@apollo/client";
import { useState, useEffect, useRef, useCallback } from "react";

import { GET_MANGA_LIST } from "../../queries/mangaQueries";

const MangaList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchedValue, setSearchedValue] = useState("");
    const [animeToSearch, setAnimeToSearch] = useState("");
    const [hasMore, setHasMore] = useState(false); // data.Page.pageInfo.hasNextPage

    const { loading, error, data, fetchMore } = useQuery(GET_MANGA_LIST, {
        variables: { page: 1, perPage: 10 },
    });

    const [isLoadingMore, setIsLoadingMore] = useState(false);

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
        e.preventDefault();

        setSearchedValue(e.target.value);
        setCurrentPage(1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimeToSearch(searchedValue);
        }, 1500);

        return () => clearTimeout(timer);
    }, [searchedValue]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            <input type="text" onChange={handleSearch} />
            <MangaCards data={data.Page.media} myref={lastAnime} />
        </>
    );
};

export default MangaList;
