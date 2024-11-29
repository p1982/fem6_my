import React from 'react';
import "./Navbar.scss";

import Logo from "../../../../shared/components/Logo";
import NavbarMenu from "../NavbarMenu";
import UserProfile from "../UserProfile";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-row">
                    <Logo />
                    <NavbarMenu />
                    <UserProfile />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;