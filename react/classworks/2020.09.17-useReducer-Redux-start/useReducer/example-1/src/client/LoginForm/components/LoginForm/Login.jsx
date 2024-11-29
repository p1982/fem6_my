import React, {useState} from 'react';

import Input from "../../../../shared/components/Input";

import {fields} from "./fields";
const {nameProps, lastNameProps, submitProps} = fields;

const LoginForm = ({logIn})=> {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault();
        const body = {name, lastName};
        logIn(body);
    };

    return(
        <form onSubmit={handleSubmit}>
            <Input {...nameProps} onChange={({target})=>setName(target.value)} />
            <Input {...lastNameProps} onChange={({target})=>setLastName(target.value)} />
            <Input {...submitProps} />
        </form>
    )
}

export default LoginForm; 