import React from "react";
import { Link } from "react-router-dom";
import "./Transfer.css";

export default class Transfer extends React.Component {
  // States
  constructor(props) {
    super(props)
    this.state = {
      isSubmitted: false,
      transferAmount: 0,
      transferUser: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  
  //TODO: Change handleSubmit to interact with database
  
  handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    console.log('Amount transferred: ' + this.state.transferAmount);
    console.log('User transferred to: ' + this.state.transferUser);
    this.setState({ isSubmitted: true});


  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value}
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="app">
          <div className="login-form">
            
            <div className = "title">
              Transfer,
            </div>

            <div className = "acc-title">Enter amount to Transfer: </div>

            <input
              name="transferAmount"
              value={this.state.transferAmount}
              onChange={this.handleChange}
            />
            
            <div className = "acc-title">Enter user to transfer to: </div>

            <input
              name="transferUser"
              value={this.state.transferUser}
              onChange={this.handleChange}
            />

            <div className="sign-up-button">
              <Link to={"/Account"}>
                Account Overview  
              </Link>
            </div>

            <div className = "buttons">
              <input type="submit" />
            </div>
          </div>
        </div>
      </form>
    );
  }
};