import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Index.jsx'
import Mine from './pages/mine/Mine.jsx'
function App () {
	return (
		<div className="App">
			<div>
				<Link to="/home">about</Link>
				<Link to="/mine">about</Link>
			</div>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/mine" element={<Mine />} />
			</Routes>
		</div>
	)
}

export default App
