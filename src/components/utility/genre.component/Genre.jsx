import "./genre.scss";

import { Link } from "react-router-dom";

const Genre = ({ name }) => {
    return (
        <Link to={`/search/?genre=${name}`} className="anime-genre">
            {name}
        </Link>
    );
};

export default Genre;
