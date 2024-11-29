import {DELETE_CASE} from "../constants";

export const deleteCaseAction = (payload) => {
    return {
        type: DELETE_CASE,
        payload
    }
}