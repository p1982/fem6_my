import React from 'react';
import {Formik, Field, Form} from 'formik'
import {fields} from './fields'

const LoginForm = () => {
    const initialValues = {
        name: '',
        lastName: '',
        gender: "man",
        email: '',
        password: '',
        submit: "Регистрация"
    };
    const genderOptions = ["man", "woman"].map(item => <option>{item}</option>)
    const onSubmit = (values, {resetForm}) => {
        console.log(values) 
        resetForm(initialValues)
    };

    return (
        <Formik {...{initialValues, onSubmit}}>
            <Form>
                <Field {...fields.name}/>
                <Field {...fields.lastName}/>
                <Field {...fields.email}/>
                <Field name="gender" as="select" children={genderOptions} />
                <Field {...fields.password}/>
                <Field {...fields.submit}/>
            </Form>
        </Formik>
    )
}

export default LoginForm