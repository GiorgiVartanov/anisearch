import "./SearchSetting.scss";

import { useState, useEffect } from "react";

const SearchSettingList = ({ name, options, changeSelected }) => {
    // in some situation we want it to be array, in others just a value
    const [selected, setSelected] = useState("Any"); // in every options array first element is "Any", and we want it to be on on default

    const handleSelect = (e) => {
        setSelected(e.target.children[e.target.selectedIndex].value);
    };

    useEffect(() => {
        changeSelected(selected);
    }, [selected]);

    return (
        <select name={name} id={name} onChange={handleSelect}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SearchSettingList;
