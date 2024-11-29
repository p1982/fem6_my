import {useState} from "react";

export const useReducer = (reducer, startState)=> {
    const [state, setState] = useState(startState);

    const dispatch = ({type, value})=> {
        const newState = reducer(state, {type, value});
        setState(newState);
    }

    return [state, dispatch];
}