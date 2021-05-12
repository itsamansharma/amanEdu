import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <NavLink className="navbar-brand brand-name text-dark mx-5" to="/">Aman</NavLink>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div className="navbar-collapse collapse " id="navbarSupportedContent">

                                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                    <li className="nav-item ">
                                        <NavLink activeClassName='menu-active' className="nav-link active" to="/home" aria-current="page">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName='menu-active' className="nav-link active" to="/About">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName='menu-active' className="nav-link active" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName='menu-active' className="nav-link active" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;