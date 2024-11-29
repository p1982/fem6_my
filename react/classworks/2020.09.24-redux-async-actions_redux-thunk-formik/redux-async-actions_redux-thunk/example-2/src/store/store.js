import {applyMiddleware, createStore} from "redux";

import {reducer} from "./reducer";
import thunk from "redux-thunk";

/*
action => dispatch => reducer(state, action);

action => dispatch => thunk(action)

const thunk = (action) => {
    if(typeof action === "function") {
        action();
    }
    else reducer(state, action);
};
*/
const store = createStore(reducer, applyMiddleware(thunk));

export default store;