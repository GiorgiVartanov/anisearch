import "./mangaCard.scss";

import Genre from "../../utility/genre.component/Genre";
import LoadingCard from "../loading-card/LoadingCard";

import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";

const MangaCard = ({
    myref,
    id,
    title,
    status,
    coverImage,
    genres,
    averageScore,
}) => {
    return (
        <div className="item" ref={myref}>
            <img className="" src={`${coverImage}`} alt="Card image cap"></img>

            <div className="item-body">
                <h3 className="item-title">{title} </h3>

                <p className="card-text small">{averageScore} / 100</p>
                <div className="genre-holder">
                    {genres.map((item) => (
                        <Genre key={item} name={item} />
                    ))}
                </div>
                <p className={`${status}`}> {status}</p>
                <div className="card-footer bg-dark">
                    <Link
                        to={`/mangainfo/${id}`}
                        className="button-medium see-full-button"
                    >
                        See Full Info
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MangaCard;
