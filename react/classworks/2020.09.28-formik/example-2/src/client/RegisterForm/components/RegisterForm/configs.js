import {errorsMsg} from "./errorsMsg";

export const initialValues = {
    name: "",
    lastName: "",
    gender: "",
    submit: "Вход"
  };

export const validate = (values)=> {
    const errors = {};
    if(!values.lastName) {
      errors.lastName = "Поле обязательно к заполнению"
    }
    // if(!values.email.includes("@")) {
    //   errors.email = errorsMsg.email;
    // }
    return errors;
  }