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
				<Layout
					style={{
						marginLeft: 200,
					}}
				>
					<Header
						style={{
							padding: 0,
							background: 'lightgrey',
						}}
					/>
					<Content
						style={{
							overflow: 'initial',
							background: 'tomato',
						}}
					>
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
					<Footer
						style={{
							textAlign: 'center',
							background: 'lightgrey',
						}}
					>
						Ant Design ©{new Date().getFullYear()} Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		</Router>
		// <>
		// 	<Router>
		// 		<Navbar />
		// 		<Routes>
		// 			<Route path='/' element={<Home />}></Route>
		// 			<Route path='/surveys' element={<Surveys />}></Route>
		// 			<Route path='/items' element={<Items />}></Route>
		// 		</Routes>
		// 	</Router>
		// </>
	);
}

export default App;
