import "./search.scss";

import AnimeCards from "../../components/body/anime-cards/AnimeCards";
import SearchSettingList from "../../components/utility/search-setting-select/SearchSettingList";

import {
    typeOfMedia,
    animeTypes,
    animeSortSettings,
    seasons,
    genres,
    // mangaSortSettings,
    // mangaTypes,
} from "../../searchSettings";

import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        genre: "Any",
        type: "Any",
        year: "Any",
        season: "Any",
        sortBy: "ID",
    });

    const genre = searchParams.get("genre");
    const type = searchParams.get("type");
    const year = searchParams.get("year");
    const season = searchParams.get("season");
    const sortBy = searchParams.get("sortBy");

    const [searchedValue, setSearchedValue] = useState("");
    const [searchedType, setSearchedType] = useState({ value: "ANIME" });
    const [animeToSearch, setAnimeToSearch] = useState();

    const years = [{ value: undefined, name: "Any" }];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= 1940; i--) {
        // change later
        years.push({ value: i, name: i });
    }

    // we will pass this 4 functions to <SearchSettingList /> components, so they will be able to change state of <Search /> component
    const addSearchedGenre = (e) => {
        const value = e.target.children[e.target.selectedIndex].value;
        setSearchParams({
            genre: value,
            type: type,
            year: year,
            season: season,
            sortBy: sortBy,
        });
    };
    const addSearchedTypes = (e) => {
        const value = e.target.children[e.target.selectedIndex].value;
        setSearchParams({
            genre: genre,
            type: value,
            year: year,
            season: season,
            sortBy: sortBy,
        });
    };
    const addSearchedYears = (e) => {
        const value = e.target.children[e.target.selectedIndex].value;
        setSearchParams({
            genre: genre,
            type: type,
            year: value,
            season: season,
            sortBy: sortBy,
        });
    };
    const addSearchedSeasons = (e) => {
        const value = e.target.children[e.target.selectedIndex].value;
        setSearchParams({
            genre: genre,
            type: type,
            year: year,
            season: value,
            sortBy: sortBy,
        });
    };
    const addSort = (e) => {
        const value = e.target.children[e.target.selectedIndex].value;
        setSearchParams({
            genre: genre,
            type: type,
            year: year,
            season: season,
            sortBy: value,
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchedValue(e.target.value);
    };

    const handleTypeSelect = (e) => {
        setSearchedType(typeOfMedia[e.target.selectedIndex]);
    };

    const handleKeyPress = (e) => {
        if (e.which === 13) setAnimeToSearch(searchedValue);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchedValue === "") setAnimeToSearch(undefined);
            else setAnimeToSearch(searchedValue);
        }, 1500);
        // it will start to search 1.5s after user ended typing

        return () => clearTimeout(timer);
    }, [searchedValue]);

    return (
        <>
            <h2 className="select-holder">
                SEARCH FOR
                <select
                    aria-label="search"
                    onChange={handleTypeSelect}
                    className="type-select"
                >
                    <option value="ANIME">anime</option>
                    <option value="MANGA">manga</option>
                </select>
            </h2>
            <div className="search-bar-holder">
                <input
                    type="text"
                    className="search-bar"
                    onChange={handleSearch}
                    onKeyPress={handleKeyPress}
                    value={searchedValue}
                />
                <button className="square-button">=</button>
            </div>
            <div className="search-setting-list">
                <SearchSettingList
                    name={"Genres"}
                    options={genres}
                    changeSelected={addSearchedGenre}
                    selected={genre}
                />
                {searchedType.value !== "MANGA" ? (
                    <>
                        <SearchSettingList
                            name={"Type"}
                            options={animeTypes}
                            changeSelected={addSearchedTypes}
                            selected={type}
                        />
                        <SearchSettingList
                            name={"Year"}
                            options={years}
                            changeSelected={addSearchedYears}
                            selected={year}
                        />
                        <SearchSettingList
                            name={"Season"}
                            options={seasons}
                            changeSelected={addSearchedSeasons}
                            selected={season}
                        />
                    </>
                ) : (
                    ""
                )}
                <SearchSettingList
                    name={"Sort By"}
                    options={animeSortSettings}
                    changeSelected={addSort}
                    selected={sortBy}
                />
            </div>
            <AnimeCards
                search={animeToSearch}
                type={searchedType}
                genre={genre === "Any" ? undefined : genre}
                showType={type === "Any" ? undefined : type}
                year={year === "Any" ? undefined : year}
                season={season === "Any" ? undefined : season}
                sortBy={sortBy === "Any" ? undefined : sortBy}
                perPage={20}
                findMore={true}
            />
        </>
    );
};

export default Search;
