import React, { useState, useCallback } from "react";
import { useSubmit } from "../../hooks/use-submit";
import { FormControl } from "../FormControl";

import { fields } from "./fields";
import { AuthService } from "../../services/auth.service";
import { Spinner } from "../../shared/Spinner";

const { loginWithFirebase } = new AuthService();

export const Form = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { sendData, loading, data, errors, clearMessage } = useSubmit();

  const handleChange = useCallback(
    (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    },
    [values]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(loginWithFirebase(values)).then(() => clearMessage());
  };

  const formItems = fields.map((props) => (
    <FormControl key={props.name} handleChange={handleChange} {...props} />
  ));

  const spinner = loading && <Spinner />;
  const errorsMessage = errors && (
    <div className="alert alert-danger d-block" role="alert">
      Неверный логин или пароль!
    </div>
  );
  return (
    <>
      {spinner}
      <pre>{data && JSON.stringify(data)}</pre>
      <form onSubmit={handleSubmit}>
        {formItems}
        {errorsMessage}
        <button type="submit" className="btn btn-primary btn-block">
          Sign In
        </button>
      </form>
    </>
  );
};
