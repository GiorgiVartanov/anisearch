import AnimeCards from "../../components/body/anime-cards/AnimeCards";

import { useQuery } from "@apollo/client";
import { useState, useEffect, useRef, useCallback } from "react";

import { GET_ANIME_LIST } from "../../queries/animeQueries";

const AnimeList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchedValue, setSearchedValue] = useState("");
    const [animeToSearch, setAnimeToSearch] = useState("");
    const [hasMore, setHasMore] = useState(false); // data.Page.pageInfo.hasNextPage

    const [page, setPage] = useState(1);

    const { loading, error, data, fetchMore } = useQuery(GET_ANIME_LIST, {
        variables: { page: 1 /*page*/, perPage: 10 },
    });

    const [isLoadingMore, setIsLoadingMore] = useState(false);

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
                    // setPage(page+1)
                    console.log("you reached bottom");
                    // return fetchMore({
                    //     variables: {
                    //         page: data.Page.pageInfo.currentPage + 1,
                    //     },
                    // });
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

        // clearTimeout(timer);
        // var timer = setTimeout(() => {
        //     console.log(searchedAnime);
        // }, 3000);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            // console.log(searchedValue);
            setAnimeToSearch(searchedValue);
        }, 1500);

        return () => clearTimeout(timer);
    }, [searchedValue]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>;

    // console.log(parseInt(data.Page.pageInfo.currentPage) + 1);

    console.log("DATA : ", data);

    return (
        <>
            <button
                onClick={async () => {
                    setIsLoadingMore(true);
                    await fetchMore({
                        variables: {
                            page: page + 1,
                        },
                    });
                    setPage(page + 1);
                    setIsLoadingMore(false);
                }}
            >
                MORE
            </button>
            <input type="text" onChange={handleSearch} />
            <AnimeCards data={data.Page.media} myref={lastAnime} />
        </>
    );
};

export default AnimeList;
