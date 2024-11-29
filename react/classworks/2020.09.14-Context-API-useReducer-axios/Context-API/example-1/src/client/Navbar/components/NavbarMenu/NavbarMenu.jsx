import React from 'react';
import "./NavbarMenu.scss";

import {v4} from "uuid";
import NavbarMenuItem from "../NavbarMenuItem";
import {menuItems} from "./menuItems";

const NavbarMenu = ()=> {
    const menuElements = menuItems.map (item =>
        <NavbarMenuItem key={v4()} {...item} />)
    return (
        <ul className="navbar-nav">
            {menuElements}
        </ul>
    )
}

export default NavbarMenu;