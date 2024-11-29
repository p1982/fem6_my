import React, {useState} from 'react';

import Input from '../../../shared/components/Input/Input'
import {actionLogin} from '../../../store/actions/actionLogin'
import {connect} from 'react-redux'
import {fields} from './fields'

const LoginForm  = ({logIn}) => {
    const [userData, setUserData] = useState({
        login: '',
        password: '',
    });
    const handleChange = ({target}) => {
        setUserData({
            ...userData,
            [target.name]: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {login, password} = userData;
        if (login && password ) {
            logIn(userData);
        } else {
            
        }
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <Input {...fields.login} onChange={handleChange} />
            <Input {...fields.password} onChange={handleChange}/>
            <Input {...fields.submit}/>
        </form>
        )
};

function mapDispatchToProps(dispatch) {
    return {
        logIn: (userData)=> dispatch(actionLogin(userData))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);