import React from 'react';
import "./ToggleMenu.css";

const ToggleMenuItem = (props) => {
    const {href, text, active, handleClick} = props;
    const className = `toggle-menu-link ${(active ? "active" : "")}`;
    return (
        <li className="toggle-menu-item">
            <a onClick={handleClick} 
                className={className} href={href}>
                {text}
            </a>
        </li>
    )
};

export default ToggleMenuItem;