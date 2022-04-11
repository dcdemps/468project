import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";
export default class Account extends React.Component {
  // States
  constructor(props) {
    super(props)
    this.state = {
      savingsBalance: '',
      checkingBalance: '',
      username: 'username'
    };
    this.accountSummary = this.getAccountSummary.bind(this)
  }

  async getAccountSummary(username) {
    await fetch('http://localhost:3001/users/account', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(username)
    })
    .then(data => data.json())
  }
  //TODO: Take information from database and add to page
  /**
   * savingsBalance
   * checkingBalance
   * username
   */
  
  render() {
    return (
      <div className="app">
        <div className="login-form">
          
          <div className = "title">Hello, {this.state.username}</div>
          <div className = "Balances">

            Your current balances are: 

            <div className = "acc-title">Savings: $</div>

            <div className = "saving-balance">
              <input readOnly value= {this.state.savingsBalance} />
            </div>
          
            <div className = "acc-title">Checking: $</div>

            <div className = "checking-balance">
              <input readOnly value={this.state.checkingBalance} />
            </div>
              
          </div>

          <div className = "buttons">
            <Link to ="/Deposit">
              <button>
                <label>Deposit</label>  
              </button>
            </Link>

            <Link to ="/Withdraw">
              <button>
                <label>Withdraw</label>  
              </button>
            </Link>

            <Link to ="/Transfer">
              <button>
                <label>Transfer</label>  
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};