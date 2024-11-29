import "./Navbar.scss";

import CompanyName from "../../../../shared/components/CompanyName";
import Logo from "../../../../shared/components/Logo";
import NavbarUserProfile from "../NavbarUserProfile";
import React from 'react';

const Navbar =() => {

    return (
        <nav className="navbar">
            <div className="div container">
                <div className="navbar-row">
                    <Logo />
                    <CompanyName />
                    <NavbarUserProfile />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;