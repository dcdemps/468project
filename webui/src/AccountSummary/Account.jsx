import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Account.css";
const Account = () =>{
  //TODO Take information from database and add to page
  const depositClick =(onClick) =>{};
  const withdrawClick =(onClick) =>{};
  const transferClick =(onClick) =>{};
  

  return (
    <div className="app">
      <div className="login-form">
        
        <div className = "title">Hello, </div>
        <div className = "Balances"> Your current balances are: 


          <div className = "acc-title"> Savings: </div>
          [//savings from database]
          <div className = "saving-balance">
            <input readOnly value={"$20"} />
          </div>
        


          <div className = "acc-title">Checking: </div>
            [//checkings from database]
            <div className = "checking-balance">
            <input readOnly value={"$20"} />
          </div>
            
        </div>
        <div classNames = "buttons">
          <Link to ="/Deposit"><button>
            <label>Deposit</label>  
          </button>
          </Link>

          <Link to ="/Withdraw"><button>
            <label>Withdraw</label>  
          </button>
          </Link>

          <Link to ="/Transfer"><button>
            <label>Transfer</label>  
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;