import {useState} from "react";

export const useReducer = (reducer, initialState)=> {
    const [state, setState] = useState(initialState);

    const dispatch = (action) => {
        const newState = reducer(state, action);
        setState(newState);
    };

    return [state, dispatch];
}