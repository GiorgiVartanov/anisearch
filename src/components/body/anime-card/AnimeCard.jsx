import "./animeCard.scss";

import Genre from "../../utility/genre.component/Genre";

import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";

import { GET_ANIME_CARD } from "../../../queries/animeQueries";

const AnimeCard = ({ id }) => {
    const { loading, error, data } = useQuery(GET_ANIME_CARD, {
        variables: { id: id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <div className="item">
            <img
                className=""
                src={`${data.Media.coverImage.large}`}
                alt="Card image cap"
            ></img>

            <div className="item-body">
                <h3 className="item-title">
                    {data.Media.title.romaji}{" "}
                    {/* <span className="small text-muted">
                        {data.Media.title.native}
                    </span> */}
                </h3>

                <p className="card-text small">
                    {data.Media.averageScore} / 100
                </p>
                {/* <p className="card-text small">
                        episodes : {data.Media.episodes}
                    </p>
                    <p className="card-text small">
                        episode duration : {data.Media.duration} minutes
                    </p>
                    <p className="card-text small">
                        source : {data.Media.source}
                    </p> */}
                <div className="genre-holder">
                    {data.Media.genres.map((item) => (
                        <Genre key={item} name={item} />
                    ))}
                </div>
                <p className={`${data.Media.status}`}> {data.Media.status}</p>
                <div className="card-footer bg-dark">
                    <Link
                        to={`/animelist/${id}`}
                        className="button-medium see-full-button"
                    >
                        See Full Info
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AnimeCard;
