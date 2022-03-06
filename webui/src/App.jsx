
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"

function App() {


  return (
    <Router>
        <Routes >
          <Route path="/" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes >
    </Router>
  );
}

export default App;