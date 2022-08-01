import "./animeList.scss";

import AnimeCards from "../../components/body/anime-cards/AnimeCards";
import SearchSettingList from "../../components/utility/search-setting-select/SearchSettingList";
import Loading from "../../components/utility/loading.component/Loading";

import {
    typeOfMedia,
    animeTypes,
    mangaTypes,
    animeSortSettings,
    mangaSortSettings,
    seasons,
    genres,
} from "../../searchSettings";

import { useState, useEffect } from "react";

const Search = () => {
    const [searchedValue, setSearchedValue] = useState("");
    const [searchedType, setSearchedType] = useState({ value: "ANIME" });
    const [animeToSearch, setAnimeToSearch] = useState();

    const [selectedGenre, setSelectedGenre] = useState();
    const [selectedType, setSelectedType] = useState();
    const [selectedYear, setSelectedYear] = useState();
    const [selectedSeason, setSelectedSeason] = useState();
    const [sortBy, setSortBy] = useState();

    const years = [{ value: undefined, name: "Any" }];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= 1940; i--) {
        // change later
        years.push({ value: i, name: i });
    }

    // we will pass this 4 functions to <SearchSettingList /> components, so they will be able to change state of <Search /> component
    const addSearchedGenre = (value) => {
        setSelectedGenre(value === "Any" ? undefined : value);
    };
    const addSearchedTypes = (value) => {
        setSelectedType(value === "Any" ? undefined : value);
    };
    const addSearchedYears = (value) => {
        setSelectedYear(value === "Any" ? undefined : value);
    };
    const addSearchedSeasons = (value) => {
        setSelectedSeason(value === "Any" ? undefined : value);
    };
    const addSort = (value) => {
        setSortBy(value === "Any" ? undefined : value);
    };

    // useEffect(() => {
    //     console.log(selectedGenre);
    // }, [selectedGenre]);

    const handleSearch = (e) => {
        // MAKE IT SO IT NAVIGATES TO /:search
        e.preventDefault();
        // client.clearStore();
        setSearchedValue(e.target.value);
    };

    const handleTypeSelect = (e) => {
        setSearchedType(typeOfMedia[e.target.selectedIndex]);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchedValue === "") setAnimeToSearch(undefined);
            else setAnimeToSearch(searchedValue);
        }, 1500);

        return () => clearTimeout(timer);
    }, [searchedValue]);

    return (
        <>
            <h3 className="select-holder">
                SEARCH FOR
                <select onChange={handleTypeSelect} className="type-select">
                    <option value="ANIME">anime</option>
                    <option value="MANGA">manga</option>
                </select>
            </h3>
            <div className="search-bar-holder">
                <input
                    type="text"
                    className="search-bar"
                    onChange={handleSearch}
                    value={searchedValue}
                />
                <button className="square-button">=</button>
            </div>
            <div className="search-setting-list">
                <SearchSettingList
                    name={"Genres"}
                    options={genres}
                    changeSelected={addSearchedGenre}
                />
                <SearchSettingList
                    name={"Type"}
                    options={animeTypes}
                    changeSelected={addSearchedTypes}
                />
                <SearchSettingList
                    name={"Year"}
                    options={years}
                    changeSelected={addSearchedYears}
                />
                <SearchSettingList
                    name={"Season"}
                    options={seasons}
                    changeSelected={addSearchedSeasons}
                />
                <SearchSettingList
                    name={"Sort By"}
                    options={animeSortSettings}
                    changeSelected={addSort}
                />
            </div>
            <AnimeCards
                search={animeToSearch}
                type={searchedType}
                genre={selectedGenre}
                showType={selectedType}
                year={selectedYear}
                season={selectedSeason}
                sortBy={sortBy}
                perPage={20}
                findMore={true}
            />
            ;
        </>
    );
};

export default Search;
