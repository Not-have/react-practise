import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Index.jsx";
import Mine from "./pages/mine/Mine.jsx";
import State from "./pages/setState是异步的/Index.jsx";
import StateModify from "./pages/state中数组的修改/Index.jsx";
function App() {
  return (
    <div className="App">
      <div className="menu">
        <Link to="/home">about</Link>
        <Link to="/mine">mine</Link>
        <Link to="/state">state</Link>
        <Link to="/stateModify">stateModify</Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="/state" element={<State />} />
        <Route path="/stateModify" element={<StateModify />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
