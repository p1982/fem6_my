import axios from "axios";

export class AuthService {
  loginWithFirebase(data) {
    return new Promise((resolve) => {
      data.returnSecureToken = true;
      resolve(
        axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIRE_BASE_URL}`,
          data
        )
      );
    });
  }

  handleError(error) {
    const { message } = error.error.error;
    console.log(message);
    switch (message) {
      case "INVALID_EMAIL":
        return "Неверный email";
      case "INVALID_PASSWORD":
        return "Неверный пароль";
      case "EMAIL_NOT_FOUND":
        return "Такого email нет";
      default:
        return "Ops...";
    }
  }
}
