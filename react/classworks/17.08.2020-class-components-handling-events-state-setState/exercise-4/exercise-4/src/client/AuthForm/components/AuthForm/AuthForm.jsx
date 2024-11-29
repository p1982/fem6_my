import React, {Component} from 'react';
import Input from "../../../../shared/components/Input";
import Button from "../../../../shared/components/Button";

import {fields} from "./fields";

class AuthForm extends Component {

    state = {
        email: "",
        password: "",
        successAuth: false
    };

    handleChange = ({target}) => {
        /*
        const obj = {};
        obj[fieldName] = target.value;
        const obj = {
            [fieldName]: target.value
        }
        */
        this.setState({
            [target.name]: target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        if(email.includes("@") && password.length >= 6) {
            this.setState({
                successAuth: true,
                email: "",
                password: ""
            })
        };
    }

    render() {
        const {email, password, submit} = fields;
        const {successAuth, email: emailValue, password: passwordValue} = this.state;
        const {handleChange, handleSubmit} = this;
        let afterForm = "";
        if(successAuth) {
            afterForm = <p>Поздравляю, вы авторизированы!</p>
        }        
        return (
            <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Input {...email} value={emailValue} handleChange={handleChange} />
                </div>
                <div>
                <Input {...password} value={passwordValue} handleChange={handleChange} />
                </div>
                
                <Button {...submit} />
            </form>
            {afterForm}
            </>
        )
    }
}

export default AuthForm;