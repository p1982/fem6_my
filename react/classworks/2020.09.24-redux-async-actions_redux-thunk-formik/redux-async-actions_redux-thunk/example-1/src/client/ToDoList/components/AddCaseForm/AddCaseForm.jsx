import React, {useState} from 'react';

import Input from "../../../../shared/components/Input";
import {addCaseAction} from "../../../../store/actions";
import {fields} from "./fields";
import {initialState} from "./initialState"
import {useDispatch} from "react-redux";

const AddCaseForm = ()=> {
    const {caseName, important, submit} = fields;
    const [caseData, setCaseData] = useState(initialState);
    const dispatch = useDispatch();
    
    const handleChange = ({target}) => {
        const {value, checked, name} = target;
        const result = (name === "caseName") ? value : checked;
        setCaseData({
            ...caseData, 
            [name]: result
        });
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
    //    const fullCaseData = {...caseData, done: false}
        // const action = addCaseAction(caseData);
        dispatch({type: "ADD_CASE", payload: caseData});
        setCaseData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input {...caseName} 
                value={caseData.caseName} onChange={handleChange} />
            <Input {...important} 
                checked={caseData.important} onChange={handleChange} />
            <Input {...submit} onChange={handleChange} />
        </form>
    )
};

export default AddCaseForm;