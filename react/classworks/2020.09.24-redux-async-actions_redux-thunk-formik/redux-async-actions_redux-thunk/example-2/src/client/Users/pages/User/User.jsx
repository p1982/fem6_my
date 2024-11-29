import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import {getUser} from "../../../../store/actions/getUser";

const url = "http://danit.com.ua/pirates/";
const User = () => {

    const dispatch = useDispatch();
    const action = getUser(url, 1);
    /*
    action = async (dispatch) => {
        const response = await fetch(`${url}${id}`)
        const result = await response.json();         
        dispatch({ type: "GET_USER", payload: result });
    }    
    */
    dispatch(action);    
    /*
    if(typeof action === "function") {
        action(dispatch)
    }
    else {
        dispatch(action)
    }
    */

    const {user, preloader, error} = useSelector(state => ({
        user: state.user, 
        preloader: state.preloader,
        error: state.error}));
        let content = "";
        if(error) {
            content = <p>{error}</p>
        }
        else {
            const content = preloader ? <p>Данные загружаются</p> :
            <>
            <h2>Имя: {user.name}</h2>
            <p>Описание: {user.fullDescription} </p>
            </>;
        }
        
    return (
        {content}
    )

}

export default User;