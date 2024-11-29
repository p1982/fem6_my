import {v4} from "uuid";

export const addIdToCase = (action)=> {
    const caseWithId = {...action.payload, id: v4()};
    return caseWithId;
}