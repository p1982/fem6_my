import {initialState} from "./initialState";

export const autorization = (state, {type, value})=> {
    switch(type) {
        case "LOGOUT":
            return initialState;            
        case "LOGIN":
            return {...value, isAuth: true};
        default: 
            return initialState;
    }
};