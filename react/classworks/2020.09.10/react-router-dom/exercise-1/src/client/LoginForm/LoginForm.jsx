import React, {useState} from 'react'
import Input from '../../shared/components/Input'
import {fields} from './fields'
import {useHistory} from 'react-router-dom'

const LoginForm = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            // email: email,
            // password: password
            email,
            password
        }
        fetch('http://danit.com.ua/login', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(body)
            
        })
        .then(response => response.json())
        .then(result =>{
            if(result.status !== 'Success'){
                setErrorMessage('login error')
            }
            else{
                history.push('/my-account')
            }
        })
    };
    
    return(
        <>
        <form onSubmit={handleSubmit}>  
            <Input {...fields.email} value={email} onChange={({target}) =>{setEmail(target.value)}} />
            <Input {...fields.password} value={password} onChange={({target}) => {setPassword(target.value)}} />
            <Input {...fields.submit} />
        </form>
        <p>{errorMessage}</p>
        </>
    )
    
}

export default LoginForm