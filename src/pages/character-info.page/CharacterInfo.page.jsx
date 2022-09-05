import "./characterInfo.scss";

import Loading from "../../components/utility/loading.component/Loading";
import Card from "../../components/body/card/Card";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_CHARACTER_PAGE } from "../../queries/animeQueries";
import { useEffect } from "react";

const CharacterInfo = () => {
    const { id, name } = useParams();

    const [description, setDescription] = useState("");

    const { loading, error, data } = useQuery(GET_CHARACTER_PAGE, {
        variables: { id: id },
    });

    useEffect(() => {
        if (!data) return;
        let desc = data.Character.description.replace(/\n/g, "<br />");
        desc = desc.replace(/_/g, " ");
        // by default name's of characters in API are links to this
        // character's page on API's website.
        // here I am changing name of website, so it's link to
        // another page on this website.
        desc = desc.replace(/anilist.co/g, /anisearcher.netlify.app/);

        setDescription(desc);
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <div className="centered">
            <img
                className="info-page-image"
                src={data.Character.image.large}
                alt={data.Character.name.full}
            />
            <h2 className="info-page-name">{data.Character.name.full}</h2>
            <div
                // since it's text provided by API, I don't think it
                // will be a problem to use this
                dangerouslySetInnerHTML={{ __html: description }}
            ></div>

            <section className="info-section">
                <h3>Voiced by:</h3>
                <div className="thin-card-holder">
                    {data.Character.media.edges[0].node.type === "ANIME" &&
                        data.Character.media.edges[0].voiceActors[0] !==
                            undefined && (
                            <Card
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
                            <Card
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
                        <Card
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
