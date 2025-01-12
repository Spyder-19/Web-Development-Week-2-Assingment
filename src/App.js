import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from './Create.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
