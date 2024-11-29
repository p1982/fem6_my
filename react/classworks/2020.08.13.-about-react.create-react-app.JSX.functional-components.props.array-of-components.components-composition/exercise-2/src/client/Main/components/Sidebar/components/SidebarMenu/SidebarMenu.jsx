import React from 'react';

const SidebarMenu = ({menuList}) => {
    const menuItems = menuList.map(item =>
        <li className="menu-item">
        <a className="menu-link" href={item.href}>{item.text}</a>
        </li>)
    return (
        <ul className="sidebar-menu">
            {menuItems}
        </ul>
    )
}

export default SidebarMenu;