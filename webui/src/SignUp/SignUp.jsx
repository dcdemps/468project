import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
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
    this.loginUser= this.loginUser.bind(this)
    this.signUpUser= this.signUpUser.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  async loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
  }

  async signUpUser(credentials) {
    await fetch('http://localhost:3001/users/create', {
      method: 'POST',
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
  }


  async handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    // TODO: check if username is valid
    // if (username !== validUsername) {
      // setErrorMessages({ name: "usernameError", message: errors.usernameError });
    // }






    if (this.state.passwordOne !== this.state.passwordTwo) {
      this.setState({ 
        error: {name: "passwordError", message: "The passwords do not match"}
      });
    } else {
      const username = this.state.username;
      const password = this.state.passwordOne;

      const credentials = {
        username,
        password
      };

      this.signUpUser(credentials);

      console.log("----------------------------");
      console.log("UserData submitted:");
      console.log("Username: " + this.state.username)
      console.log("PasswordOne: " + this.state.passwordOne)
      console.log("PasswordTwo: " + this.state.passwordTwo)
      console.log("----------------------------");


      this.setState({ isSubmitted: true});

      // const token = await this.loginUser(credentials);
  
      // this.props.setToken(token);
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
          {
            this.state.isSubmitted ?
            <>
              <Navigate to={'/'}/>
            </>
              
            :
            <>
              <div className="title">Sign Up</div>
              {this.renderLoginForm()}
            </>
          }
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  setToken: PropTypes.func.isRequired
}