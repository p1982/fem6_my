import {applyMiddleware, createStore} from "redux";

import {createCase} from "./createCase";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(createCase));

 export default store;