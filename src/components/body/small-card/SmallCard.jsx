import "./smallCard.scss";

import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";

import { GET_ANIME_CARD } from "../../../queries/animeQueries";

const SmallCard = ({ id }) => {
    const { loading, error, data } = useQuery(GET_ANIME_CARD, {
        variables: { id: id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return null;

    return (
        <Link className="small-card" to={`/animeinfo/${id}`}>
            <div
                className="small-card-img"
                style={{
                    backgroundImage: `url(${data.Media.coverImage.large})`,
                }}
            />
            <p className="small-card-title">{data.Media.title.romaji}</p>
        </Link>
    );
};

export default SmallCard;
