import {addDoneToCase} from "./addDoneToCase";
import {addIdToCase} from "./addIdToCase";

export const createCase = ({dispatch, getState}) => {
    const createStep = (nextStep) => {
        const step = (action) => {
            const doneCase = addDoneToCase(action);
            const fullCase = addIdToCase(doneCase);
            return nextStep({type: "ADD_CASE", payload: doneCase})
        }
        return step;
    };

    return createStep;
}