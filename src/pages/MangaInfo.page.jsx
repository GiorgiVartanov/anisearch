import { useParams } from "react-router-dom";

const MangaInfo = () => {
    const { id } = useParams();

    return <h1>MangaInfo {id}</h1>;
};

export default MangaInfo;
