import React from 'react';
import "./Navbar.css";
import {navbarMenuItems} from "./navbarMenuItems";

import NavbarMenuItem from "../NavbarMenuItem";

const Navbar = () => {

    const navbarMenuElements = navbarMenuItems.map(item => 
        <NavbarMenuItem {...item} />);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-row">
                    <ul className="navbar-nav">
                        {navbarMenuElements}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;