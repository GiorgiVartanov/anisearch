import "./navBar.scss";

import DropDown from "../../utility/dropDown.component/DropDown";

import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className="nav-item" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <DropDown name={"Search"} />
                </li>
                <li>
                    <NavLink className="nav-item" to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
