import {ADD_CASE, DELETE_CASE, TOGGLE_CASE_IMPORTANT} from "../constants";

const initialState = [];

export const toDoListReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_CASE:
            return [...state, payload];
        case DELETE_CASE:
            // const newState = [...state.slice(0, idx), ...state.slice(idx+1)];
            // const newState = [...state];
            // newState.splice(payload, 1);
            return [...state.slice(0, payload), ...state.slice(payload+1)];
        case TOGGLE_CASE_IMPORTANT:
            const newState = state.map(item => ({...item}));
            const currentCase = newState[payload];
            currentCase.important = !currentCase.important;
            return newState;
        default: 
            return state;
    }
};