import "./navBar.scss";

// import DropDown from "../../utility/dropDown.component/DropDown";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ImMenu, ImCross } from "react-icons/im";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpened, setDropdownOpened] = useState(false);

    useEffect(() => {
        const detectStroll = () => {
            // if page is scrolled navbar will became thinner and transparent
            if (window.scrollY >= 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", detectStroll);

        return () => {
            // When using the useEffect hook, we’re adding
            // that event listener when the component mounts,
            // but when it unmounts, that event listener is
            // still hanging out waiting for events.

            // so to clean it up, we can return a new function
            // which removes that event listener
            window.removeEventListener("scroll", detectStroll);
        };
    }, []);

    return (
        <header className={scrolled ? "header-scrolled " : ""}>
            <Link to="/">
                <h1>AniSearcher</h1>
            </Link>

            <button
                className="dropdown-button"
                aria-label="dropdown button"
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
