import AddCaseForm from "../AddCaseForm";
import CaseStatus from "../CasesStatus";
import React from 'react';
import ToDoTable from "../ToDoTable";

const ToDoList = () => {
    
    return (
        <div className="to-do-list">
            <AddCaseForm />
            <CaseStatus />
            <ToDoTable />
        </div>
    )
};

export default ToDoList;