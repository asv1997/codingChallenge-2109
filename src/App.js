// External packages
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

// Relative imports
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Home from "./components/Home";


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Q1" element={<Question1/>} />
            <Route path="/Q2" element={<Question2/>} />
        </Routes>
    </Router>
  );
}

export default App;
