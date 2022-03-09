import React from "react";
import { Link } from "react-router-dom";
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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

      const database = [
        { username: "test",
          password: "1234" },
        { username: "test",
          password: "pwtest" },
        { username: "test2",
          password: "pwtest2" }
      ];

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

    var databaseTest = database.map(x => (x.username === this.state.username) ? true : false)

    // Checks if username is in database
    if (databaseTest.includes(true)) {

      // This also only works if there are unique usernames
      var usernameIndex = databaseTest.indexOf(true)

      // Checks if password is in database
      if (database[usernameIndex]["password"] !== this.state.password) {
        this.setState({ 
          error: {name: "passwordError", message: "invalid password"}
        });
      } else {
        this.setState({
          isSubmitted: true
        });
      }

    } else {
      this.setState({ 
        error: { name: "usernameError", message: "invalid username" }
      });
    }
    
  };

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
            <label>Username </label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
            {this.renderErrorMessage("usernameError")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
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