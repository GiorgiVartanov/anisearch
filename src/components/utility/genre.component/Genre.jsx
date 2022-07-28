import "./genre.scss";

import { Link } from "react-router-dom";

const Genre = ({ name }) => {
    return (
        // make it link to page with this genre
        <Link className="anime-genre" to={`/genres/${name}`}>
            {name}
        </Link>
    );
};

export default Genre;
