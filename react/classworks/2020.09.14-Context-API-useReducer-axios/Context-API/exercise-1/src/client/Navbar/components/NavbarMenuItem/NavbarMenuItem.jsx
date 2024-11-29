import React from 'react';
import "./NavbarMenuItem.scss";

import {NavLink} from "react-router-dom";

const NavbarMenuItem = ({to, text})=> {
    return (
        <li>
            <NavLink to={to} className="navbar-nav-link" 
                activeClassName="active">{text}</NavLink>
        </li>
    )
}

export default NavbarMenuItem;