import React, {useReducer} from 'react';

import WelcomeText from "../../../../shared/components/WelcomeText";
import LoginForm from "../../../LoginForm/components/LoginForm";

import {initialState} from "./initialState";
import {autorization} from "./autorization";
// import {useReducer} from "../../../../shared/hooks/useReducer";

const HomePage = ()=> {

    const [user, dispatch] = useReducer(autorization, initialState);

    const actions = {
        logOut: ()=> dispatch({type: "LOGOUT"}),
        logIn: (value)=> dispatch({type: "LOGIN", value})
    };

    const content = user.isAuth ? <WelcomeText {...user} logOut={actions.logOut} /> : <LoginForm logIn={actions.logIn} />;
    
    return (
        <>
        {content}
        </>
    )
}

export default HomePage;