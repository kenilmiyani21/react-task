import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav-bar">
            <nav className="navbar navbar-expand-lg bg-black navbar-dark">
                <div className="container ">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <li>
                            <NavLink className="navbarlink p-3" to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navbarlink p-3" to="/corona">
                                CORONA
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navbarlink p-3" to="/gujarat">
                                GUJRAT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navbarlink p-3" to="/ahmedabad">
                                AHMEDABAD
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navbarlink p-3" to="/business">
                                BUSINESS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navbarlink p-3" to="/world">
                                WORLD
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navbarlink p-3" to="/technology">
                                TECHNOLOGY
                            </NavLink>
                        </li>
                        <li className="navbarlink nav-item dropdown text-white p-3">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                OTHER
                            </NavLink>
                            <ul className="dropdown-menu ">
                                <li>
                                    <NavLink className="dropdown-item" to="/food">
                                        FOOD
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/entertainment">
                                        ENTERTAINMENT
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/beauty">
                                        BEAUTY
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
