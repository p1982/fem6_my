import {initialState} from "./initialState";
import {CLOSE_MODAL_LOGIN, OPEN_MODAL_LOGIN} from "./actions";

export const reducer = (state = initialState, action)=> {
    switch(action.type) {
        case OPEN_MODAL_LOGIN:
            return {...state, modalIsOpen: true};
            case CLOSE_MODAL_LOGIN:
                return {...state, modalIsOpen: false};            
        default: 
            return state;
    }
};