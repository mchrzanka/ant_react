import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

//styling

//components
import Navbar from './components/Navbar';
import CustomHeader from './components/layout/Header';
import CustomFooter from './components/layout/Footer';

//pages
import Home from './pages/Home';
import Surveys from './pages/Earn/Surveys';
import Items from './pages/Shop/Items';

function App() {
	return (
		<Router>
			<Layout hasSider>
				<Sider
					style={{
						overflow: 'auto',
						height: '100vh',
						position: 'fixed',
						left: 0,
						top: 0,
						bottom: 0,
					}}
				>
					<div className='demo-logo-vertical' />
					<Navbar />
				</Sider>
				<Layout className='custom-layout'>
					<Header className='custom-header'>
						<CustomHeader />
					</Header>

					<Content className='custom-content'>
						<Routes>
							<Route path='/' element={<Outlet />}>
								<Route index element={<Home />} />
							</Route>
							<Route path='/surveys' element={<Outlet />}>
								<Route index element={<Surveys />} />
							</Route>
							<Route path='/items' element={<Outlet />}>
								<Route index element={<Items />} />
							</Route>
						</Routes>
					</Content>
					{/* <Footer className='custom-footer'>
						<CustomFooter />
					</Footer> */}
				</Layout>
			</Layout>
		</Router>
	);
}

export default App;
