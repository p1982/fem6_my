import React, {useState} from 'react';

const LoginFormHook = ({onSubmit}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    /*
    const [fields, setFields] = useState({
        login: "",
        password: ""
    });
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({login, password});
        setLogin("");
        setPassword("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=> setLogin(e.target.value)} type="text" name="login" placeholder="Введите логин" value={login} />
            <input onChange={(e)=> setPassword(e.target.value)} type="password" name="password" placeholder="Введите пароль" value={password} />
            <button type="submit">Авторизация</button>
        </form>
    )
}
 
export default LoginFormHook;