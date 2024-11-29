import React, {useState} from 'react';
import {useFormik} from "formik";

import Input from "../../../../shared/components/Input";
import {fields} from "./fields";

const LoginForm = ()=> {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit(values) {

    }
  });
  
    return (
      <form onSubmit={formik.handleSubmit}>
        <Input {...fields.email} 
          value={formik.values.email}
          onChange={formik.handleChange} />
        <Input {...fields.password} 
          value={formik.values.password}
          onChange={formik.handleChange} />            
        <button type="submit">Submit</button>             
      </form>
    );
  };

  export default LoginForm;