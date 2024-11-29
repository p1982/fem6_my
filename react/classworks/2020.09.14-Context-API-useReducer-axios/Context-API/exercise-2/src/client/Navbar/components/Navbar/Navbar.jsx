import React from 'react';
import "./Navbar.scss";

import Logo from "../../../../shared/components/Logo";
import NavbarMenu from "../NavbarMenu";
import UserProfile from "../UserProfile";
import SelectCurrency from '../../../../shared/components/SelectCurrency';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-row">
                    <Logo />
                    <NavbarMenu />
                    <UserProfile />
                    <SelectCurrency />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;