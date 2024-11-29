import React from 'react'

import {fields} from "./loginFromFields";
import Input from "../../../../shared/components/Input";

const LoginForm = () => {
    return (
        <form action="#">
            <Input {...fields.email} />
            <Input {...fields.password} />
            <button>Авторизация</button>
        </form>
    )
}