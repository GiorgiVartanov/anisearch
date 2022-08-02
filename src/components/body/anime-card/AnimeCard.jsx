import "./animeCard.scss";

import { Link } from "react-router-dom";

const AnimeCard = ({ myref, id, name, image, type }) => {
    return (
        <Link to={`/${type}/${id}`}>
            <div className="card" ref={myref}>
                <img className="card-image" src={image} alt={name}></img>

                <div className="card-body">
                    <p className="card-title">{name} </p>
                </div>
            </div>
        </Link>
    );
};

export default AnimeCard;
