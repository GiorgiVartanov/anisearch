import "./navBar.scss";

// import DropDown from "../../utility/dropDown.component/DropDown";

import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink className="nav-item" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" to="/search">
                            Search
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
