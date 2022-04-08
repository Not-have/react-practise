import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Index.jsx";
import Mine from "./pages/mine/Mine.jsx";
function App() {
  return (
    <div className="App">
      <div className="menu">
        <Link to="/home">about</Link>
        <Link to="/mine">mine</Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mine" element={<Mine />} />
      </Routes>
    </div>
  );
}

export default App;
