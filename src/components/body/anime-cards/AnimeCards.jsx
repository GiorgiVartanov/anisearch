import "./animeCards.scss";

import AnimeCard from "../anime-card/AnimeCard.jsx";

import { useQuery } from "@apollo/client/react";

import { GET_ANIME_LIST } from "../../../queries/animeQueries.js";

const AnimeCards = () => {
    const { loading, error, data } = useQuery(GET_ANIME_LIST, {
        variables: { page: 0, perPage: 10 },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <div className="changed-centered">
            <div className="item-holder">
                {data.Page.media.map((anime) => (
                    <AnimeCard key={anime.id} id={anime.id} />
                ))}
            </div>
        </div>

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
