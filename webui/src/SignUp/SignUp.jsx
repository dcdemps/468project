import React, { useState } from "react";
import "./SignUp.css";

const Login = () => {
  // States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    usernameError: "invalid username",
    passwordError: "passwords do not match"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { username, passwordOne, passwordTwo } = document.forms[0];

    // TODO: check if username is valid
    // if (username !== validUsername) {
      // setErrorMessages({ name: "usernameError", message: errors.usernameError });
    // }

    if (passwordOne.value !== passwordTwo.value) {
      setErrorMessages({ name: "passwordError", message: errors.passwordError });
    } else {
      console.log("----------------------------");
      console.log("UserData submitted:");
      console.log("Username: " + username.value)
      console.log("PasswordOne: " + passwordTwo.value)
      console.log("PasswordTwo: " + passwordOne.value)
      console.log("----------------------------");
      setIsSubmitted(true);
      // TODO: if username is valid and passwords match add new user to database
    }
  };

  // Generate code error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  //login form
  const renderLoginForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">

          <label> Username </label>
          <input type="text" name="username" required />
          {
            renderErrorMessage("usernameError")
          }

        </div>
        <div className="input-container">

          <label> Password </label>
          <input type="password" name="passwordOne" required />

        </div>
        <div className="input-container">

          <label> Enter Password Again  </label>
          <input type="password" name="passwordTwo" required />
          {
            renderErrorMessage("passwordError")
          }

        </div>
        <div className="button-container">

          <input type="submit" />

        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>🚀🚀🚀Success🚀🚀🚀</div> : renderLoginForm}
      </div>
    </div>
  );
}

export default Login;