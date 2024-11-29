import Form from "./form.js";
import {Input} from "../formFields/index.js";

class LoginForm extends Form{
    emailProps = {
        type: "email",
        name: "user-email",
        required: true,
        className: "form-control",
        placeholder: "Введите email",
        errorText: "Enter email!"
    }
    passwordProps = {
        type: "password",
        name: "user-password",
        required: true,
        className: "form-control",
        placeholder: "Введите password",
        errorText: "Enter password!"
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.elem.querySelector(`input[name="user-email]"`).value;
        const password = this.elem.querySelector(`input[name="user-password]"`).value;
        if(!email) {
            login.insertAdjacentHTML("afterend", `< style="color: red">Поле email должно быть заполнено!</p>`);
        }
        if(!password) {
            password.insertAdjacentHTML("afterend", `< style="color: red">Поле пароль должно быть заполнено!</p>`);
        }        
    }

    render(){
        const {emailProps, passwordProps} = this;
        const emailInput = new Input(emailProps);
        const passwordInput = new Input(passwordProps);
        const form = super.render(this.props);
        form.append(emailInput.render(), passwordInput.render());
        return form
    }
}

export default LoginForm;