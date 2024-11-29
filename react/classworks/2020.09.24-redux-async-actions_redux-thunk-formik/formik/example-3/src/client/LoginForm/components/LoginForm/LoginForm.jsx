import React from 'react';
import {Formik, Field, Form} from "formik";

import Input from "../../../../shared/components/Input";
import {fields} from "./fields";

const LoginForm = ()=> {

  const initialValues = {
      email: "",
      password: "",
      submit: "Вход"
    };

    const onSubmit = (values)=> {
      console.log(values);
    };
  
    return (
      <Formik {...{ initialValues, onSubmit }}>
        <Form>
          <Field {...fields.email} />
          <Field {...fields.password} />
          <button type="submit">Submit</button>   
        </Form>
      </Formik>
    );
  };

  export default LoginForm;