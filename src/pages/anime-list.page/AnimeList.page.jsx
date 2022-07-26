import AnimeCards from "../../components/body/anime-cards/AnimeCards";

import { useState, useEffect } from "react";

const AnimeList = () => {
    const [searchedValue, setSearchedValue] = useState("");
    const [animeToSearch, setAnimeToSearch] = useState(null);

    const handleSearch = (e) => {
        // MAKE IT SO IT NAVIGATES TO /:search
        e.preventDefault();
        // client.clearStore();
        setSearchedValue(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimeToSearch(searchedValue);
        }, 1500);

        return () => clearTimeout(timer);
    }, [searchedValue]);

    // useEffect(() => {
    //     console.log(animeToSearch);
    //     // if (animeToSearch === null) navigate(`/animelist`);
    //     // else navigate(`/animelist/${animeToSearch}`);
    // }, [animeToSearch]);

    // useEffect(() => {
    //     console.log("search", search);
    //     if (typeof search === "undefined")
    //         console.log("now we need to search for ''");
    // }, [search]);

    return (
        <>
            <input type="text" onChange={handleSearch} value={searchedValue} />
            <AnimeCards search={animeToSearch} />;
        </>
    );
};

export default AnimeList;
