import React, { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"
import Account from "./AccountSummary/Account"
import Deposit from "./Deposit/Deposit";
import Withdraw from "./Withdraw/Withdraw";
import Transfer from "./Transfer/Transfer";

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return (
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />}/>
        <Route path="/signup" element={<SignUp setToken={setToken} />}/>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Account/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/deposit" element={<Deposit/>}/>
      <Route path="/withdraw" element={<Withdraw/>}/>
      <Route path="/transfer" element={<Transfer/>}/>
    </Routes>
  );
}

export default App;