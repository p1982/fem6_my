import React from 'react';
import {Formik, Form, Field} from 'formik';
import {fields} from './fields';
import './AddProductForm.css'
import {initialValues} from './initialValues'

const AddProductForm = ({addProduct}) => {
    const onSubmit = (values, {resetForm}) => {
        addProduct(values);
        resetForm()
    }
    const categoryOptions = fields.category.options.map(({value, text})=>   
                                <option value={value}>{text}</option>)
    return (
        <Formik {...{initialValues, onSubmit}}>
            <Form className='product-form'>
                <Field {...fields.name}/>
                <Field {...fields.code}/>
                <Field {...fields.price}/>
                <Field as='select' {...fields.category}>
                    {categoryOptions}
                </Field>
                <div>
                   
                <div>Discount</div>
                    <label>Yes</label>
                <Field {...fields.discount} value='yes'/>
                     <label>No</label>
                <Field {...fields.discount} value='no'/>
                </div>
                <div><label>Delivery</label>
                <Field {...fields.delivery}/>
                </div>
                <Field as='textarea' {...fields.description}/>
                <Field {...fields.submit}/>
            </Form>
        </Formik>

    )
}
export default AddProductForm