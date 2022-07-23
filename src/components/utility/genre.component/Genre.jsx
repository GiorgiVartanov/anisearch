import "./genre.scss";

const Genre = ({ name }) => {
    return (
        // make it link to page with this genre
        <button className="button-small anime-genre">{name}</button>
    );
};

export default Genre;
