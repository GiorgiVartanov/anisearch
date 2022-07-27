import "./animeList.scss";

import AnimeCards from "../../components/body/anime-cards/AnimeCards";

import { useState, useEffect } from "react";

const Search = () => {
    const selectOptions = ["ANIME", "MANGA"];

    const [searchedValue, setSearchedValue] = useState("");
    const [searchedType, setSearchedType] = useState("ANIME");
    const [animeToSearch, setAnimeToSearch] = useState(null);

    const handleSearch = (e) => {
        // MAKE IT SO IT NAVIGATES TO /:search
        e.preventDefault();
        // client.clearStore();
        setSearchedValue(e.target.value);
    };

    const handleSubmit = (e) => {};

    const handleTypeSelect = (e) => {
        setSearchedType(selectOptions[e.target.selectedIndex]);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimeToSearch(searchedValue);
        }, 1500);

        return () => clearTimeout(timer);
    }, [searchedValue]);

    // useEffect(() => {
    //     console.log(searchedType);
    // }, [searchedType]);

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
            <h3 className="select-holder">
                SEARCH FOR
                <select onChange={handleTypeSelect} className="type-select">
                    <option value="ANIME">ANIME</option>
                    <option value="MANGA">MANGA</option>
                </select>
            </h3>
            <input
                type="text"
                className="search-bar"
                onChange={handleSearch}
                value={searchedValue}
            />
            <AnimeCards
                search={animeToSearch}
                type={searchedType}
                perPage={30}
                findMore={true}
            />
            ;
        </>
    );
};

export default Search;
