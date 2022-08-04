import "./SearchSetting.scss";

import { useState, useEffect } from "react";

const SearchSettingList = ({ name, options, changeSelected }) => {
    const [selected, setSelected] = useState("Any");

    const handleSelect = (e) => {
        setSelected(e.target.children[e.target.selectedIndex].value);
    };

    useEffect(() => {
        changeSelected(selected);
    }, [selected, changeSelected]);

    return (
        <div className="search-select-holder">
            <label className="search-select-name" htmlFor={name}>
                {name}
            </label>
            <select
                className="search-select"
                name={name}
                id={name}
                onChange={handleSelect}
            >
                {options.map((option) => (
                    <option key={option.name} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SearchSettingList;
