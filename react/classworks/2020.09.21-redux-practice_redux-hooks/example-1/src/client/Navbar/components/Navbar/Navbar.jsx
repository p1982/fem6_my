import React from 'react';
import {connect} from "react-redux";
import "./Navbar.scss";

import Logo from "../../../../shared/components/Logo";
import CompanyName from "../../../../shared/components/CompanyName";
import Button from "../../../../shared/components/Button"

import {openModalCreator} from "../../../../store/actionCreators/openModalCreator";

const Navbar =({openModal}) => {

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

const mapDispatchToProps = (dispatch)=> {
    return {
        openModal: ()=> dispatch(openModalCreator("modal"))
    }
};

export default connect(null, mapDispatchToProps)(Navbar);