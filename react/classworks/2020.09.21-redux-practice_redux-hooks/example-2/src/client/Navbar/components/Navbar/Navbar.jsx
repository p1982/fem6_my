import "./Navbar.scss";

import Button from "../../../../shared/components/Button"
import CompanyName from "../../../../shared/components/CompanyName";
import Logo from "../../../../shared/components/Logo";
import React from 'react';
import {openModalCreator} from "../../../../store/actionCreators/openModalCreator";
import {useDispatch} from "react-redux";

const Navbar =() => {
    const dispatch = useDispatch();
    const openModal = ()=> dispatch(openModalCreator("modal"));

    return (
        <nav className="navbar">
            <div className="div container">
                <div className="navbar-row">
                    <Logo />
                    <CompanyName />
                    <Button onClick={openModal} text="Open Modal" />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;