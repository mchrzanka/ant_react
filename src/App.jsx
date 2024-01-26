import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return (
		<Router>
			<div className='App'>
				<>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
					</Routes>
				</>
			</div>
		</Router>
	);
}

export default App;
