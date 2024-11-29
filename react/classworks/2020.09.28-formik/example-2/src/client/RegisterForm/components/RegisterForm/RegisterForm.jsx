import React from 'react';
import {Formik, Form, Field} from "formik";

import FormErrorMessage from "../../../../shared/components/FormErrorMessage";

import {initialValues, validate} from "./configs";

const RegisterForm = ()=> {

      const onSubmit = (values, {resetForm})=> {
        resetForm();
      };

      return (
          <Formik {...{initialValues, onSubmit, validate}}>
              <Form>
                  <Field name="name" type="text" 
                    placeholder="Введите имя" />                    
                  <Field name="lastName" type="text" 
                    placeholder="Введите фамилию" />
                   <FormErrorMessage name="lastName" />
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