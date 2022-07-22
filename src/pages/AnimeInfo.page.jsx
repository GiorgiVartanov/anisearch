import { useParams } from "react-router-dom";

const AnimeInfo = () => {
    const { id } = useParams();

    return <h1>AnimeInfo {id}</h1>;
};

export default AnimeInfo;
