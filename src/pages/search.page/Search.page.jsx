import "./animeList.scss";

import AnimeCards from "../../components/body/anime-cards/AnimeCards";
import SearchSettingList from "../../components/utility/search-setting-select/SearchSettingList";

import { useState, useEffect } from "react";

const Search = () => {
    const selectOptions = ["ANIME", "MANGA"];

    const [searchedValue, setSearchedValue] = useState("");
    const [searchedType, setSearchedType] = useState("ANIME");
    const [animeToSearch, setAnimeToSearch] = useState(null);

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedYears, setSelectedYearsArr] = useState([]);
    const [selectedSeasons, setSelectedSeasons] = useState([]);

    const years = ["Any"];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= 1940; i--) {
        years.push(i.toString());
    }

    // we will pass this 4 functions to <SearchSettingList /> components, so they will be able to change state of <Search /> component
    const addSearchedGenre = (value) => {
        setSelectedGenres(value);
    };
    const addSearchedTypes = (value) => {
        setSelectedTypes(value);
    };
    const addSearchedYears = (value) => {
        setSelectedYearsArr(value);
    };
    const addSearchedSeasons = (value) => {
        setSelectedSeasons(value);
    };

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
            setAnimeToSearch(searchedValue);
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
                    name={"genres"}
                    options={["Any", "Action", "Adventure", "Comedy", "Drama"]}
                    changeSelected={addSearchedGenre}
                />
                <SearchSettingList
                    name={"showType"}
                    options={[
                        "Any",
                        "TV Show",
                        "TV Short",
                        "Movie",
                        "Special",
                        "OVA",
                        "ONA",
                    ]}
                    changeSelected={addSearchedTypes}
                />
                <SearchSettingList
                    name={"year"}
                    options={years}
                    changeSelected={addSearchedYears}
                />
                <SearchSettingList
                    name={"season"}
                    options={["Any", "Winter", "Spring", "Summer", "Fall"]}
                    changeSelected={addSearchedSeasons}
                />
            </div>
            <AnimeCards
                search={animeToSearch}
                type={searchedType}
                genres={selectedGenres}
                showTypes={selectedTypes}
                years={selectedYears}
                seasons={selectedSeasons}
                perPage={30}
                findMore={true}
            />
            ;
        </>
    );
};

export default Search;
