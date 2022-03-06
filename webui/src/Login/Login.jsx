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
      password: "1234" },
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

    var { username, password } = document.forms[0];

    // Find user login info
    /**
     * TODO: this is broken when usernames are the same.
     * 
     *    This works
     *    username: test
     *    password: 1234
     * 
     *    But this doesn't work
     *    username: test
     *    password: pwtest
     * 
     *  the test that is working is in the database array first
     * 
     *  this is because of the databaseTest var but the if 
     *  statements are written to only work with unique usernames.
     * 
     *  I want to be able to have duplicate usernames
     * 
     *  probably doesn't need to get fixed because
     *  it will have to get changed when we introduce the database
     */

    var databaseTest = database.map(x => (x.username === username.value) ? true : false)

    // Checks if username is in database
    if (databaseTest.includes(true)) {

      // This also only works if there are unique usernames
      var usernameIndex = databaseTest.indexOf(true)

      // Checks if password is in database
      if (database[usernameIndex]["password"] !== password.value) {
        setErrorMessages({ name: "passwordError", message: errors.passwordError });
      } else {
        setIsSubmitted(true);
      }

    } else {
      setErrorMessages({ name: "usernameError", message: errors.usernameError });
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
          <input type="text" name="username" required />
          {renderErrorMessage("usernameError")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
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