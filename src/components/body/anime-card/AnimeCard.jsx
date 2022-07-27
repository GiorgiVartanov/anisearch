import "./animeCard.scss";

import { Link } from "react-router-dom";

const AnimeCard = ({ myref, id, title, coverImage, type }) => {
    return (
        <Link to={`/animeinfo/${type}/${id}`}>
            <div className="card" ref={myref}>
                <img className="card-image" src={coverImage} alt={title}></img>

                <div className="card-body">
                    <h3 className="card-title">{title} </h3>
                </div>
            </div>
        </Link>
    );
};

export default AnimeCard;
