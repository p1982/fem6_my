import {CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL} from "../constants";

const initialState = false;

export const loginModalReducer = (state = initialState, {type}) => {
    switch(type) {
        case OPEN_LOGIN_MODAL: 
            return true;
        case CLOSE_LOGIN_MODAL:
            return false;
        default:
            return state;
    }
}