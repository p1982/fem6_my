import React from 'react';

import "./HeaderMenu.css";

const HeaderMenu = ({menuList}) => {
    const headerMenuElements = menuList.map(item =>
        <li className="header-menu-item">
            <a href="#" className="header-menu-link">
                {item}
            </a>
        </li>);
    return (
        <ul className="header-menu">
            {headerMenuElements}
        </ul>        
    )
}

export default HeaderMenu;