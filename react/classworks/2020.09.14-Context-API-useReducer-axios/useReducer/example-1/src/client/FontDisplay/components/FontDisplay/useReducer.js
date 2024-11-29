import {useState} from "react";

export const useReducer = (reducer, startState)=> {
    const [state, setState] = useState(startState);
    const dispatch = ({type, value})=> {
        const newValue = reducer(state, {type, value});
        const newState = {...state, newValue};
        setState(newState);
    }

    return [state, dispatch];
}