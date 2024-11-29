import React from 'react';
import SidebarMenu from '../SidebarMenu'

const Sidebar = ({sidebarMenu}) => {
    console.log(sidebarMenu)
    return (
        <SidebarMenu menuList={sidebarMenu} />
    )
}

export default Sidebar;