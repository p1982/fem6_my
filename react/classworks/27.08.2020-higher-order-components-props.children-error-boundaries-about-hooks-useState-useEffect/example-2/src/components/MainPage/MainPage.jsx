import React, { Component } from 'react'
import Navbar from "../Navbar";
import Logo from "../Logo";
import AuthPanel from "../AuthPanel";

class mainPage extends Component {
    render(){
        return (
            <>
            <Navbar text={"Лого текст"}>
                <Logo />
                <AuthPanel />
            </Navbar>
            </>
        )
    }
}