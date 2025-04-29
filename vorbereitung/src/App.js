import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Topic from "./components/Topic";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topicId" element={<Topic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

