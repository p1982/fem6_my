import {LOGIN} from '../constants'

const initinalState = '';

export const loginReducer = (state = initinalState, {type, payload}) => {
    switch (type) {
        case LOGIN:
            return payload.login;
        default:
            return state;
    }
};
