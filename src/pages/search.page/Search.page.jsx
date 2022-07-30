import "./animeList.scss";

import AnimeCards from "../../components/body/anime-cards/AnimeCards";
import SearchSettingList from "../../components/utility/search-setting-select/SearchSettingList";

import { useState, useEffect } from "react";

const Search = () => {
    const selectOptions = ["ANIME", "MANGA"];

    const [searchedValue, setSearchedValue] = useState("");
    const [searchedType, setSearchedType] = useState("ANIME");
    const [animeToSearch, setAnimeToSearch] = useState();

    const [selectedGenre, setSelectedGenre] = useState();
    const [selectedType, setSelectedType] = useState();
    const [selectedYear, setSelectedYear] = useState();
    const [selectedSeason, setSelectedSeason] = useState();

    const years = ["Any"];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= 1940; i--) {
        years.push(i);
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
        setSearchedType(selectOptions[e.target.selectedIndex]);
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
                    <option value="ANIME">ANIME</option>
                    <option value="MANGA">MANGA</option>
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
                    options={["Any", "Action", "Adventure", "Comedy", "Drama"]}
                    changeSelected={addSearchedGenre}
                    beArray={true}
                />
                <SearchSettingList
                    name={"Type"}
                    options={[
                        "Any",
                        "TV",
                        "TV Short",
                        "Movie",
                        "Special",
                        "OVA",
                        "ONA",
                    ]}
                    changeSelected={addSearchedTypes}
                    beArray={true}
                />
                <SearchSettingList
                    name={"Year"}
                    options={years}
                    changeSelected={addSearchedYears}
                    beArray={false}
                />
                <SearchSettingList
                    name={"Season"}
                    options={["Any", "WINTER", "SPRING", "SUMMER", "FALL"]}
                    changeSelected={addSearchedSeasons}
                    beArray={false}
                />
            </div>
            <AnimeCards
                search={animeToSearch}
                type={searchedType}
                genre={selectedGenre}
                showType={selectedType}
                year={selectedYear}
                season={selectedSeason}
                perPage={30}
                findMore={true}
            />
            ;
        </>
    );
};

export default Search;
