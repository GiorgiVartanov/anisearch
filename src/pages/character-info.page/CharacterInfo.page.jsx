import Loading from "../../components/utility/loading.component/Loading";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_CHARACTER_PAGE } from "../../queries/animeQueries";

const CharacterInfo = () => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_CHARACTER_PAGE, {
        variables: { id: id },
    });

    if (loading) return <Loading />;
    if (error) return <p>Something Went Wrong</p>;

    console.log(data.Character.media.edges);
    // console.log(data.Character.media.nodes);

    return (
        <>
            <h2>{data.Character.name.full}</h2>
            <p>{data.Character.description}</p>
            {data.Character.media.nodes.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.title.romaji}</p>
                        <img
                            src={item.coverImage.large}
                            alt={item.title.romaji}
                        />
                    </div>
                );
            })}
            {/* <p>{data.Character.media.edges.voiceActors.name}</p> */}
        </>
    );
};

export default CharacterInfo;
