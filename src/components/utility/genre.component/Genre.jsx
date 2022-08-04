import "./genre.scss";

import { Link } from "react-router-dom";

const Genre = ({ name }) => {
    return (
        // make it link to page with this genre
        <p className="anime-genre">{name}</p>
        // <Link className="anime-genre" to={`/search/${name}`}>
        //     {name}
        // </Link>
    );
};

export default Genre;
