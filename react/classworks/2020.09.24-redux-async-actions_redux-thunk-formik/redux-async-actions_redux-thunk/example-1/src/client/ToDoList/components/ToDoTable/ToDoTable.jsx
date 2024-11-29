import {useDispatch, useSelector} from "react-redux";

import React from 'react';
import ToDoItem from "../ToDoItem";
import {deleteCaseAction} from "../../../../store/actions";

const ToDoTable = () => {
    const toDoItems = useSelector(state => state.toDoItems);
    const dispatch = useDispatch();
    const deleteCase = (idx) => dispatch(deleteCaseAction(idx));  
      
    const toDoElements = toDoItems.map((item, index) => 
        <ToDoItem {...item} handleDelete={() => deleteCase(index)} />)
    return (
        <ul>
            {toDoElements}
        </ul>
    )
}

export default ToDoTable;