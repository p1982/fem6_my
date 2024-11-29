import "./ToDoItem.css";

import Input from "../../../../shared/components/Input";
import React from 'react';

const ToDoItem = (props) => {
    const {caseName, important, done, handleDelete} = props;
    const text = important ? <strong>{caseName}</strong> : <span>{caseName}</span>
    return (
        <li className="case-list-item">
            {text}
            <Input type="checkbox" label="Важное" checked={important} />
            <Input type="checkbox" label="Выполнено" checked={done} />
            <span className="delete-case" onClick={handleDelete}>X</span>
        </li>        
    )
};

export default ToDoItem;