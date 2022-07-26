import "./animeInfo.scss";

import Genre from "../../components/utility/genre.component/Genre";
import Card from "../../components/body/card/Card";
import Loading from "../../components/utility/loading.component/Loading";
import EpisodeCard from "../../components/body/episode-card/EpisodeCard";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_ANIME_PAGE } from "../../queries/animeQueries";

const AnimeInfo = () => {
    const { type, id } = useParams();

    const { loading, error, data } = useQuery(GET_ANIME_PAGE, {
        variables: { id: id, type: type.toUpperCase() },
    });

    if (loading) return <Loading />;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            <div
                // some shows do not have bannerImage, so we need to
                // use something else as a hero image, we can use part
                // of coverImage of main color of coverImage
                // style={{
                //     backgroundImage: `url(${
                //         data.Media.bannerImage
                //             ? data.Media.bannerImage
                //             : data.Media.coverImage.extraLarge
                //     })`,
                // }}
                // or use main color
                style={
                    data.Media.bannerImage
                        ? { backgroundImage: `url(${data.Media.bannerImage})` }
                        : {
                              backgroundColor: data.Media.coverImage.color,
                              minHeight: "30vh",
                          }
                }
                className="hero-image"
            ></div>

            <div className="info-page centered">
                <img
                    className="cover-image"
                    src={data.Media.coverImage.extraLarge}
                    alt={data.Media.title.native}
                />
                <div className="small-info">
                    <h2 className="title">
                        {data.Media.title.romaji}
                        <span className="sub-title">
                            {data.Media.title.native}
                        </span>
                    </h2>
                    {data.Media.averageScore ? (
                        <p className="score">{data.Media.averageScore} / 100</p>
                    ) : (
                        <p className="not-available">N/A</p>
                    )}
                    {data.Media.status === "NOT_YET_RELEASED" ? (
                        <p>To Be Released</p>
                    ) : (
                        <p>{data.Media.status}</p>
                    )}
                    <p>source : {data.Media.source}</p>

                    <p>
                        Airing period :{" "}
                        <span>
                            {data.Media.startDate.year !== null ? (
                                data.Media.startDate.year
                            ) : (
                                <span className="not-available">NA</span>
                            )}
                            /
                            {data.Media.startDate.month !== null ? (
                                data.Media.startDate.month
                            ) : (
                                <span className="not-available">NA</span>
                            )}
                            /
                            {data.Media.startDate.day !== null ? (
                                data.Media.startDate.day
                            ) : (
                                <span className="not-available">NA</span>
                            )}{" "}
                            -{" "}
                            {data.Media.endDate.year !== null ? (
                                <span>
                                    {data.Media.endDate.year}/
                                    {data.Media.endDate.month}/
                                    {data.Media.endDate.day}
                                </span>
                            ) : (
                                "DATE UNKNOWN"
                            )}
                        </span>
                    </p>
                    <div className="genre-holder">
                        {data.Media.genres.map((genre) => (
                            <Genre key={genre} name={genre} />
                        ))}
                    </div>
                </div>

                <div className="other-info">
                    <section className="anime-info-section">
                        <h3>description</h3>
                        <div
                            // since it's text provided by API, I don't think it
                            // will be a problem to use this
                            dangerouslySetInnerHTML={{
                                __html: data.Media.description,
                            }}
                        ></div>
                    </section>
                    {type === "ANIME" &&
                        data.Media.streamingEpisodes.length > 0 && (
                            <section className="anime-info-section">
                                <h3>Episodes</h3>
                                <div className="anime-episode-section">
                                    {data.Media.streamingEpisodes.map(
                                        (item) => {
                                            return (
                                                <EpisodeCard
                                                    key={item.title}
                                                    title={item.title}
                                                    url={item.url}
                                                />
                                            );
                                        }
                                    )}
                                </div>
                            </section>
                        )}
                    <section className="anime-info-section">
                        <h3>Shows</h3>
                        <div className="relation-list">
                            {data.Media.relations.edges.map((relation) => (
                                <Card
                                    key={relation.node.id}
                                    id={relation.node.id}
                                    name={relation.node.title.romaji}
                                    image={relation.node.coverImage.large}
                                    type={relation.node.type}
                                />
                            ))}
                        </div>
                    </section>
                    <section className="anime-info-section">
                        <h3>Characters</h3>
                        <div className="relation-list">
                            {data.Media.characters.nodes.map((character) => (
                                <Card
                                    key={character.id}
                                    id={character.id}
                                    name={character.name.full}
                                    image={character.image.large}
                                    type={"character"}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AnimeInfo;
