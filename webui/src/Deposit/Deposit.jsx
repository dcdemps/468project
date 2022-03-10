import React from "react";
import { Link } from "react-router-dom";
import "./Deposit.css";

export default class Deposit extends React.Component {
  // States
  constructor(props) {
    super(props)
    this.state = {
      isSubmitted: false,
      depositAmount: 0
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  
  //TODO: Change handleSubmit to interact with database

  handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    console.log('Amount deposited: ' + this.state.depositAmount);
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
              Deposit,
            </div>

            <div className = "acc-title">Enter amount to deposit: </div>

            <div className = "saving-balance">
              <input  
                name="depositAmount"
                value={this.state.depositAmount}
                onChange={this.handleChange}
              />
            </div>

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