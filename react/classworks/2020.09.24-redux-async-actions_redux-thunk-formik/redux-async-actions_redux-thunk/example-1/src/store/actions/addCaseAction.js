import {ADD_CASE} from "../constants";

export const addCaseAction = (payload)=> {
    return {
        type: ADD_CASE,
        payload
    }
};