import React from 'react';
import {useSelector} from "react-redux";

const CasesStatus = ()=> {
    const toDoItems = useSelector(state => state.toDoItems);
    const {length: importCount} = toDoItems.filter(({important}) => important);
    const {length: doneCount} = toDoItems.filter(({done}) => done);
    return (
        <p>
            Всего дел: {toDoItems.length}.
            Из них важных - {importCount}.
            Из них сделанных - {doneCount}.
        </p>
    )
}

export default CasesStatus;