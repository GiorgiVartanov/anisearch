import "./animeCards.scss";

import AnimeCard from "../anime-card/AnimeCard.jsx";
import PageSelect from "../../utility/pageSelect.component/PageSelect";

import { useQuery } from "@apollo/client/react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { GET_ANIME_LIST } from "../../../queries/animeQueries.js";

const AnimeCards = () => {
    const { page } = useParams();

    const [valueToSearch, setValueToSearch] = useState("");
    const [animeToSearch, setAnimeToSearch] = useState("");

    const { loading, error, data } = useQuery(GET_ANIME_LIST, {
        variables: { page: page, perPage: 10, search: animeToSearch },
    });

    // console.log(data.Page.pageInfo.lastPage);

    const handleEvent = (e) => {
        // const timer = setTimeout(() => {
        //     console.log(searchedAnime);
        // }, 3000);

        // e.preventDefault();
        setValueToSearch(e.target.value);

        // clearTimeout(timer);
        // var timer = setTimeout(() => {
        //     console.log(searchedAnime);
        // }, 3000);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(valueToSearch);
            setAnimeToSearch(valueToSearch);
        }, 1500);

        return () => clearTimeout(timer);
    }, [valueToSearch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            <input
                type="text"
                className="search-bar"
                value={valueToSearch}
                onChange={handleEvent}
            />
            <PageSelect
                currentPage={parseInt(page)}
                lastPage={parseInt(data.Page.pageInfo.lastPage)}
            />
            <div className="changed-centered">
                <div className="item-holder">
                    {data.Page.media.map((anime) => (
                        <AnimeCard key={anime.id} id={anime.id} />
                    ))}
                </div>
            </div>
            <PageSelect
                currentPage={parseInt(page)}
                lastPage={parseInt(data.Page.pageInfo.lastPage)}
            />
            {/* {page > 1 && (
                <Link
                    className="page-button"
                    to={`/animelist/${parseInt(page) - 1}`}
                >
                    previous
                </Link>
            )}
            {data.Page.pageInfo.hasNextPage && (
                <Link
                    className="page-button"
                    to={`/animelist/${parseInt(page) + 1}`}
                >
                    next
                </Link>
            )} */}
        </>

        // <div className="m-5 changed-centered">
        //     <div className="container">
        //         {data.Page.media.map((anime) => (
        //             <AnimeCard key={anime.id} id={anime.id} />
        //         ))}
        //     </div>
        // </div>
    );
};

export default AnimeCards;

// {data.Page.media.map((anime) => (
//                 <AnimeCard key={anime.id} id={anime.id} />
//             ))}
