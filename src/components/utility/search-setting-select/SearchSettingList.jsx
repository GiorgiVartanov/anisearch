import "./SearchSetting.scss";

import { useState, useEffect } from "react";

const SearchSettingList = ({ options, changeSelected }) => {
    const [selected, setSelected] = useState([options[0]]); // in every options array first element is "Any", and we want it to be on on default

    const handleSelect = (e) => {
        if (selected[0] === "Any") setSelected([e.target.textContent]);
        else setSelected([...selected, e.target.textContent]);
    };
    const handleUnSelect = (e) => {
        console.log(selected);
        if (selected.length === 1)
            setSelected(["Any"]); // it will prevent array from being empty
        else
            setSelected(
                selected.filter((item) => item !== e.target.textContent)
            );
    };

    useEffect(() => {
        changeSelected(selected);
    }, [selected]);

    return (
        <div className="select-search-body">
            <input type="text" className="search-select" />
            <div className="block-all-panel"></div>
            <div className="select-options">
                {options.map((option) => {
                    return selected.includes(option) ? (
                        <button
                            onClick={handleUnSelect}
                            className="search-select-option selected-option"
                            key={option}
                        >
                            {option}
                        </button>
                    ) : (
                        <button
                            onClick={handleSelect}
                            className="search-select-option"
                            key={option}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchSettingList;
