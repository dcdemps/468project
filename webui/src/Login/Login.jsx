import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  // States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // temp info, will replace with link to actual database
  const database = [
    { username: "test",
      password: "pwtest" },
    { username: "test2",
      password: "pwtest2" }
  ];

  const errors = {
    usernameError: "invalid username",
    passwordError: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { usernameError, passwordError } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === usernameError.value);

    // Compare user info
    if (userData) {
      if (userData.password !== passwordError.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.passwordError });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.usernameError });
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
          <label>Username </label>
          <input type="text" name="usernameError" required />
          {renderErrorMessage("usernameError")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="passwordError" required />
          {renderErrorMessage("passwordError")}
        </div>
        <div className="sign-up-button">
          <Link to={"/SignUp"}>
            Click here to Sign Up  
          </Link>
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
        <div className="title">Sign In</div>
        {isSubmitted ? <div>Success</div> : renderLoginForm}
      </div>
    </div>
  );
}

export default Login;