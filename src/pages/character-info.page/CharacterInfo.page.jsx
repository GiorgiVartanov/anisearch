import "./characterInfo.scss";

import Loading from "../../components/utility/loading.component/Loading";
import AnimeCard from "../../components/body/anime-card/AnimeCard";

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

    // console.log(data.Character.media.edges.node.id);
    // console.log(data.Character.media.edges);
    // if (data.Character.media.edges.node.type === "ANIME") {
    //     console.log(data.Character.media.edges.voiceActors);
    // }
    // data.Character.media.edges.map((item) => {
    //     if (item.node.type === "ANIME") {
    //         console.log(item.voiceActors[0].id + "_" + item.node.id);
    //     }
    // });
    // console.log(data.Character.media.nodes);

    return (
        <div className="centered">
            <img
                src={data.Character.image.large}
                alt={data.Character.name.full}
            />
            <h2>{data.Character.name.full}</h2>
            <p>{data.Character.description}</p>

            <section className="info-section">
                <h3>Voiced by:</h3>
                <div className="thin-card-holder">
                    {data.Character.media.edges[0].node.type === "ANIME" &&
                        data.Character.media.edges[0].voiceActors[0] !==
                            undefined && (
                            <AnimeCard
                                id={
                                    data.Character.media.edges[0].voiceActors[0]
                                        .id
                                }
                                name={
                                    data.Character.media.edges[0].voiceActors[0]
                                        .name.full
                                }
                                image={
                                    data.Character.media.edges[0].voiceActors[0]
                                        .image.large
                                }
                                type={"staff"}
                            />
                        )}
                </div>
            </section>

            <section className="info-section">
                <h3>Shows Featuring This Character</h3>
                <div className="thin-card-holder">
                    {data.Character.media.nodes.map((item) => {
                        return (
                            <AnimeCard
                                key={item.id}
                                id={item.id}
                                name={item.title.romaji}
                                image={item.coverImage.large}
                                type={item.type}
                            />
                        );
                    })}
                </div>
            </section>

            {/* {data.Character.media.edges.map((item) => {
                if (
                    item.node.type === "ANIME" &&
                    item.voiceActors[0] !== undefined
                )
                    return (
                        <AnimeCard
                            key={item.voiceActors[0].id + "_" + item.node.id}
                            id={item.voiceActors[0].id}
                            name={item.voiceActors[0].name.full}
                            image={item.voiceActors[0].image.large}
                            type={"staff"}
                        />
                    );
            })} */}
            {/* <p>{data.Character.media.edges.voiceActors.name}</p> */}
        </div>
    );
};

export default CharacterInfo;
