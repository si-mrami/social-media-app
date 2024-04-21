import './App.scss'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from './Pages/Register/Register';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ element }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		setIsAuthenticated(!!token);
	}, []);

	return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<PrivateRoute element={<Home />} />} />

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</div>
	);

}

export default App
