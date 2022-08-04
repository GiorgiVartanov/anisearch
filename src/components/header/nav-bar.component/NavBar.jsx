import "./navBar.scss";

// import DropDown from "../../utility/dropDown.component/DropDown";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ImMenu, ImCross } from "react-icons/im";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpened, setDropdownOpened] = useState(false);

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

            <button
                className="dropdown-button"
                onClick={() => {
                    setDropdownOpened(!dropdownOpened);
                }}
            >
                {dropdownOpened ? <ImCross /> : <ImMenu />}
            </button>

            <nav className={dropdownOpened ? "dropdown-opened" : ""}>
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
