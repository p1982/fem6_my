import {CLOSE_MODAL_LOGIN} from "../actions";

export const closeModalCreator = (payload) => {
    return {
        type: CLOSE_MODAL_LOGIN, 
        payload
    }
};