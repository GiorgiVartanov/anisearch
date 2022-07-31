import "./animeCard.scss";

import { Link } from "react-router-dom";

const AnimeCard = ({ myref, id, title, coverImage, type }) => {
    return (
        <Link to={`/${type}/${id}`}>
            <div className="card" ref={myref}>
                <img className="card-image" src={coverImage} alt={title}></img>

                <div className="card-body">
                    <p className="card-title">{title} </p>
                </div>
            </div>
        </Link>
    );
};

export default AnimeCard;
