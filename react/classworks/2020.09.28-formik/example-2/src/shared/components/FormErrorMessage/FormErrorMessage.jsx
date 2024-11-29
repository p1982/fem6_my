import React from 'react';
import "./FormErrorMessage.css";
import {ErrorMessage} from "formik";

const FormErrorMessage = ({name})=> {
    return (
        <ErrorMessage name={name}>
            {(errMsg) => <p className="form-error-message">{errMsg}</p>}
        </ErrorMessage>
    )

}

export default FormErrorMessage;