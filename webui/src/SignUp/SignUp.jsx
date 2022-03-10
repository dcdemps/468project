import React from "react";
import "./SignUp.css";

export default class SignUp extends React.Component {
  // States
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      passwordOne: '',
      passwordTwo: '',
      error: {},
      isSubmitted: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }


  handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    var { username, passwordOne, passwordTwo } = document.forms[0];

    // TODO: check if username is valid
    // if (username !== validUsername) {
      // setErrorMessages({ name: "usernameError", message: errors.usernameError });
    // }

    if (passwordOne.value !== passwordTwo.value) {
      this.setState({ 
        error: {name: "passwordError", message: "The passwords do not match"}
      });
    } else {
      console.log("----------------------------");
      console.log("UserData submitted:");
      console.log("Username: " + username.value)
      console.log("PasswordOne: " + passwordTwo.value)
      console.log("PasswordTwo: " + passwordOne.value)
      console.log("----------------------------");
      this.setIsSubmitted(true);
      // TODO: if username is valid and passwords match add new user to database
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value}
    );
  }

  // Generate code error message
  renderErrorMessage(name) {
    if(name === this.state.error.name) {
      return (
        <div className="error">{this.state.error.message}</div>
      );
    }
  }

  //login form
  renderLoginForm() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">

            <label> Username </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            { this.renderErrorMessage("usernameError") }

          </div>
          <div className="input-container">

            <label> Password </label>
            <input
              type="password"
              name="passwordOne"
              value={this.state.passwordOne}
              onChange={this.handleChange}
              required
            />

          </div>
          <div className="input-container">

            <label> Enter Password Again  </label>
            <input 
              type="password"
              name="passwordTwo"
              value={this.state.passwordTwo}
              onChange={this.handleChange}
              required
            />
            { this.renderErrorMessage("passwordError") }

          </div>
          <div className="button-container">

            <input type="submit" />

          </div>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign Up</div>
          {
            this.state.isSubmitted ? <div>🚀🚀🚀Success🚀🚀🚀</div> : this.renderLoginForm()
          }
        </div>
      </div>
    );
  }
}
