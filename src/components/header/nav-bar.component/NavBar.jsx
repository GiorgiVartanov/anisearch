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
        // <nav className="d-flex justify-content-center py-2 bg-light border-bottom">
        //     <ul className="nav nav-pills gap-3">
        //         <li className="nav-item bg-dark rounded">
        //             <NavLink className="nav-link text-light" to="/">
        //                 Home
        //             </NavLink>
        //         </li>
        //         <li className="nav-item bg-dark rounded">
        //             <div className="dropdown show">
        //                 <a
        //                     className="btn fix-btn btn-secondary dropdown-toggle bg-dark"
        //                     href="#"
        //                     role="button"
        //                     id="dropdownMenuLink"
        //                     data-toggle="dropdown"
        //                     aria-haspopup="true"
        //                     aria-expanded="false"
        //                 >
        //                     Search
        //                 </a>

        //                 <div
        //                     className="dropdown-menu"
        //                     aria-labelledby="dropdownMenuLink"
        //                 >
        //                     <NavLink
        //                         className="dropdown-item Secondary link"
        //                         to="/animelist"
        //                     >
        //                         Anime
        //                     </NavLink>
        //                     <NavLink
        //                         className="dropdown-item Secondary link"
        //                         to="/mangalist"
        //                     >
        //                         Manga
        //                     </NavLink>
        //                     <NavLink
        //                         className="dropdown-item Secondary link"
        //                         to="/characterlist"
        //                     >
        //                         Characters
        //                     </NavLink>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="nav-item bg-dark rounded">
        //             <NavLink className="nav-link text-light" to="/about">
        //                 About
        //             </NavLink>
        //         </li>
        //     </ul>
        // </nav>
    );
};

export default NavBar;
