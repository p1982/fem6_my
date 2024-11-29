import React from 'react'
import {Link} from "react-router-dom";
import "./NavbarMenuItem.css";

// const Link = ({text}) => {
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     history.push()
    // }
//     return <a onClick={handleClick} href="">{text}</a>
// }

const NavbarMenuItem = ({href, text}) => {
    return (
        <li className="navbar-menu-item">
            <Link to={href} className="navbar-menu-link">{text}</Link>
        </li>
    )
}

export default NavbarMenuItem;