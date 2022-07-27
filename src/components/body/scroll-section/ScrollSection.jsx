import SmallCard from "../small-card/SmallCard";

import { useQuery } from "@apollo/client";
import { useEffect } from "react";

import { client } from "../../../App";

import { GET_ANIME_LIST } from "../../../queries/animeQueries";

const ScrollSection = ({ name, sortBy }) => {
    // client.resetStore();

    const { loading, error, data } = useQuery(GET_ANIME_LIST, {
        variables: { page: 1, perPage: 6, sort: [sortBy] },
        fetchPolicy: "no-cache", // if we won't use it, all ScrollSection's would use one cache
    });

    useEffect(() => {
        client.resetStore();
    }, []);

    if (error) return <p>Something Went Wrong</p>;
    if (loading) return <p>Loading...</p>;

    // console.log(data.Page.media);

    return (
        <article>
            <h3>{name}</h3>
            <div className="show-list">
                {data.Page.media.map((item) => {
                    return (
                        <p className="show" key={sortBy + item.id}>
                            {item.title.romaji}
                        </p>
                    );
                })}
            </div>
        </article>
    );
};

export default ScrollSection;
