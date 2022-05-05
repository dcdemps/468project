import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Login.css";

export default class Login extends React.Component {
  // States
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: {},
      isSubmitted: false
    };
    this.loginUser= this.loginUser.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  async loginUser(credentials) {
    return fetch('http://128.105.146.169:8081/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
  }

  async handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();


    // TODO: Check if user is actually in database

    const username = this.state.username;
    const password = this.state.password;

    const token = await this.loginUser({
      username,
      password
    });

    this.props.setToken(token);
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value}
    );
  }

  renderErrorMessage(name) {
    if(name === this.state.error.name) {
      return (
        <div className="error">{this.state.error.message}</div>
      );
    }
  }
   
  renderLoginForm() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            {this.renderErrorMessage("usernameError")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            {this.renderErrorMessage("passwordError")}
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
  }

  render() {
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {this.state.isSubmitted ? <div>Success</div> : this.renderLoginForm()}
        </div>
      </div>
    );
  }
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}