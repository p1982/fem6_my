import {authReducer} from "./authReducer";
import {combineReducers} from "redux";
import {toDoListReducer} from "./toDoListReducer";

export default combineReducers({
    toDoItems: toDoListReducer,
    auth: authReducer
});
