import "./card.scss";

import { Link } from "react-router-dom";

const Card = ({ myref, id, name, image, type }) => {
    return (
        <Link to={`/${type}/${id}`}>
            <div className="card" ref={myref}>
                {/* <img className="card-image" src={image} alt={name}></img> */}
                <div
                    className="card-image"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>

                <div className="card-body">
                    <p className="card-title">{name} </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
