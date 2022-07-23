import { useParams } from "react-router-dom";

const CharacterInfo = () => {
    const { id } = useParams();

    return <h1>CharacterInfo {id}</h1>;
};

export default CharacterInfo;
