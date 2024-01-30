import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Surveys from './pages/Earn/Surveys';
import Items from './pages/Shop/Items';

function App() {
	return (
		<Router>
			<div className='App'>
				<>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/surveys' element={<Surveys />}></Route>
						<Route path='/items' element={<Items />}></Route>
					</Routes>
				</>
			</div>
		</Router>
	);
}

export default App;
