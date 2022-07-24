import "./pageSelect.scss";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const PageSelect = ({ currentPage, lastPage }) => {
    const navigate = useNavigate();

    const handleEvent = (e) => {
        e.preventDefault();
        const newPage = e.target.value;
        if (Number(newPage)) {
            navigate(`/animelist/${newPage}`, { replace: true });
        }
    };

    return (
        <div className="page-select">
            <Link
                className={`${currentPage === 1 ? "on-this-page" : ""}`}
                to={`/animelist/${1}`}
            >
                {1}
            </Link>
            {currentPage > 4 && (
                <input
                    className="search-page"
                    placeholder="..."
                    onBlur={handleEvent}
                />
            )}
            {currentPage > 3 && (
                <Link to={`/animelist/${currentPage - 2}`}>
                    {currentPage - 2}
                </Link>
            )}
            {currentPage > 2 && (
                <Link to={`/animelist/${currentPage - 1}`}>
                    {currentPage - 1}
                </Link>
            )}
            {currentPage != 1 && (
                <Link className="on-this-page" to={`/animelist/${currentPage}`}>
                    {currentPage}
                </Link>
            )}
            {currentPage < lastPage - 1 && (
                <Link to={`/animelist/${currentPage + 1}`}>
                    {currentPage + 1}
                </Link>
            )}
            {currentPage < lastPage - 2 && (
                <Link to={`/animelist/${currentPage + 2}`}>
                    {currentPage + 2}
                </Link>
            )}
            <input
                className="search-page"
                placeholder="..."
                onBlur={handleEvent}
            />
            <Link to={`/animelist/${lastPage}`}>{lastPage}</Link>
        </div>
    );
};

export default PageSelect;
