import "./navBar.scss";

// import DropDown from "../../utility/dropDown.component/DropDown";
import { useState } from "react";

import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const detectStroll = () => {
        if (window.scrollY >= 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener("scroll", detectStroll);

    return (
        <header className={scrolled ? "header-scrolled " : ""}>
            <Link to="/">
                <h1>AniSearcher</h1>
            </Link>

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
