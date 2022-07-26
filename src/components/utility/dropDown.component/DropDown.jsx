import "./dropDown.scss";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { resolveReadonlyArrayThunk } from "graphql";

import { client } from "../../../App";

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
                        <NavLink
                            className="nav-item"
                            onClick={() => {
                                client.clearStore(); // when user goes from anime page to manga page we need to clear cache, so anime won't be shown on manga page on and vice versa
                            }}
                            to="/animelist"
                        >
                            Anime
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav-item"
                            onClick={() => {
                                client.clearStore();
                            }}
                            to="/mangalist"
                        >
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
