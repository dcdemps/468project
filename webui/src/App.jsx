
import {
  BrowserRouter as Router,
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


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/Deposit" element={<Deposit/>}/>
          <Route path="/Withdraw" element={<Withdraw/>}/>
          <Route path="/Transfer" element={<Transfer/>}/>
        </Routes>
    </Router>
  );
}

export default App;