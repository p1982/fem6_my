import React, {useState} from 'react'

import Input from "../../../../shared/components/Input";
import {fields} from "./fields";

const LoginForm = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const body = {email, password};
      // отправка AJAX-запроса
      setEmail("");
      setPassword("");
    };

    return (
      <form onSubmit={handleSubmit}>
          <Input {...fields.email} 
            value={email}
            onChange={({target}) => setEmail(target.value)} />
          <Input {...fields.password} 
            value={password}
            onChange={({target}) => setPassword(target.value)} />            
          <button type="submit">Submit</button>             
      </form>
    );
  };

  export default LoginForm;