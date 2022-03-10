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


  async handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    // TODO: check if username is valid
    // if (username !== validUsername) {
      // setErrorMessages({ name: "usernameError", message: errors.usernameError });
    // }

    const url = "http://localhost:3001/users/create";





    if (this.state.passwordOne !== this.state.passwordTwo) {
      this.setState({ 
        error: {name: "passwordError", message: "The passwords do not match"}
      });
    } else {
      await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.passwordOne
        })
      });

      console.log("----------------------------");
      console.log("UserData submitted:");
      console.log("Username: " + this.state.username)
      console.log("PasswordOne: " + this.state.passwordOne)
      console.log("PasswordTwo: " + this.state.passwordTwo)
      console.log("----------------------------");
      this.setState({ isSubmitted: true});
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
