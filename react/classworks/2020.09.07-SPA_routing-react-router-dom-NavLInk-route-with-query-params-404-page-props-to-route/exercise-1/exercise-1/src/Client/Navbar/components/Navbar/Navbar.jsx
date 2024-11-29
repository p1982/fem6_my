import React, {useState} from "react";

import "./Navbar.css";

import {menuItems} from "./menuItems";
import NavbarMenuItem from "../NavbarMenuItem";

const Navbar = () => {

    const navbarMenuElements = menuItems.map(item => <NavbarMenuItem {...item} />);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-row">
                    <ul className="navbar-menu">
                        {navbarMenuElements}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

