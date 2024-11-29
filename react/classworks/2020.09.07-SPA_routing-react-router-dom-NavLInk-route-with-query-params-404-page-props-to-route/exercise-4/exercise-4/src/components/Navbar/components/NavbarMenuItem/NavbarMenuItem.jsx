import React from 'react';
import "./NavbarMenuItem.css";

import {NavLink} from "react-router-dom";

const NavbarMenuItem = ({to, text}) => {
    return (
        <li className="navbar-nav-item">
            <NavLink exact to={to} className="navbar-nav-link" activeClassName="active">
                {text}
            </NavLink>
        </li>
    )
}

export default NavbarMenuItem;