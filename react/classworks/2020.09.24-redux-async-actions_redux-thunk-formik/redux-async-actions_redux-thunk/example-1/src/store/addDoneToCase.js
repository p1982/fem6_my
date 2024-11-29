export const addDoneToCase = (action)=> {
    const doneCase = {...action.payload, done: false};
    return doneCase;
}