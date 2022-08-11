import "./SearchSetting.scss";

const SearchSettingList = ({ name, options, changeSelected }) => {
    return (
        <div className="search-select-holder">
            <label className="search-select-name" htmlFor={name}>
                {name}
            </label>
            <select
                className="search-select"
                name={name}
                id={name}
                onChange={changeSelected}
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
