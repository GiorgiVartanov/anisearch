import "./animeInfo.scss";

import Genre from "../../components/utility/genre.component/Genre";
import SmallCard from "../../components/body/small-card/SmallCard";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_ANIME_PAGE } from "../../queries/animeQueries";

const AnimeInfo = () => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_ANIME_PAGE, {
        variables: { id: id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${data.Media.bannerImage})`,
                }}
                className="hero-image"
            >
                <div className="hero-text">
                    <h1 className="title">{data.Media.title.romaji}</h1>
                    <h3 className="sub-title">{data.Media.title.native}</h3>
                </div>
            </div>

            <div className="info-page">
                <div className="small-info">
                    <p>{data.Media.averageScore} / 100</p>
                    <p className={data.Media.status}>{data.Media.status}</p>
                    <p>episodes : {data.Media.episodes}</p>
                    <p>duration : {data.Media.duration}</p>
                    <p>source : {data.Media.source}</p>
                    <p>
                        start date : {data.Media.startDate.year}/
                        {data.Media.startDate.month}/{data.Media.startDate.day}
                    </p>
                    <p>
                        end date : {data.Media.endDate.year}/
                        {data.Media.endDate.month}/{data.Media.endDate.day}
                    </p>
                    <div className="genre-holder">
                        {data.Media.genres.map((genre) => (
                            <Genre key={genre} name={genre} />
                        ))}
                    </div>
                </div>

                <div className="description">
                    <h3>description</h3>
                    <p>{data.Media.description}</p>
                </div>
                <div className="relations">
                    <h3>relations</h3>
                    <div className="relation-list">
                        {data.Media.relations.edges.map((relation) => (
                            <SmallCard
                                key={relation.node.id}
                                id={relation.node.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnimeInfo;
