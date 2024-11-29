import {OPEN_MODAL_LOGIN} from "../actions";

export const openModalCreator = (payload) => {
    return {
        type: OPEN_MODAL_LOGIN, 
        payload
    }
};