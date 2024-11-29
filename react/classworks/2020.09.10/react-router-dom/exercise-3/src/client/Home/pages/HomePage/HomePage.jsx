import React from 'react'
import LoginForm from '../../../LoginForm/LoginForm'

const HomePage = () => {
    const isForm = !!localStorage.getItem('token') ? <h1>Wellcome</h1> : <LoginForm />
    return(
        <>
            <h2>Home</h2>
            {isForm}
        </>
    )
}

export default HomePage