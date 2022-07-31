import "./characterCard.scss";

import { Link } from "react-router-dom";

const CharacterCard = ({ id, name, image }) => {
    return (
        <Link className="card" to={`/characterPage/${id}`}>
            <img className="card-image" src={image} alt={name} />
            <div className="card-body">
                <p className="card-title">{name}</p>
            </div>
        </Link>
    );
};

export default CharacterCard;
