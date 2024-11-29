import React from 'react';
import HeaderLogo from "../HeaderLogo";
import HeaderMenu from "../HeaderMenu";

import "./Header.css";

 const Header = (props)=> {
    const {headerLogo, headerMenu} = props;
    return (
    <header className="header">
        <div className="container">
            <HeaderLogo {...headerLogo} />
            {/* <HeaderLogo text={headerLogo.text} href={headerLogo.href} /> */}
            <HeaderMenu menuList={headerMenu.menuList} />
        </div>
    </header>)
};

export default Header;
