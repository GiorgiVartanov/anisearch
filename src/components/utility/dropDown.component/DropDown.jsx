import "./dropDown.scss";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const DropDown = ({ name }) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="drop-down">
            <button className="drop-down-button">
                {name} <span className="dropdown-sign">v</span>
            </button>
            <div className={`drop-down-content ${isOpened ? "border" : ""}`}>
                <ul>
                    <li>
                        <NavLink className="nav-item" to="/animelist">
                            Anime
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" to="/mangalist">
                            Manga
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" to="/characterlist">
                            Characters
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropDown;
