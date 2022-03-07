
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"
import Account from "./AccountSummary/Account"

function App() {


  return (
    <Router>
        <Routes >
          <Route path="/" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Account" element={<Account/>}/>
        </Routes >
    </Router>
  );
}

export default App;