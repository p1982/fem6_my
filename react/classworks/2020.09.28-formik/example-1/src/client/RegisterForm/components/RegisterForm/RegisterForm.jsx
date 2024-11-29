import React from 'react';
import {Formik, Form, Field} from "formik";

import {initialValues} from "./initialValues";

const RegisterForm = ()=> {

      const onSubmit = (values, {resetForm})=> {
        console.log(values);
        resetForm();
      };

      return (
          <Formik {...{initialValues, onSubmit}}>
              <Form>
                  <Field name="name" 
                    placeholder="Введите имя" />
                  <Field name="lastName" type="text" 
                    placeholder="Введите фамилию" />
                  <Field name="gender" as="select">
                      <option value="man">Man</option>
                      <option value="women">Women</option>
                  </Field>
                  <Field name="submit" type="submit" />                                         
              </Form>
          </Formik>
      )
}

export default RegisterForm;