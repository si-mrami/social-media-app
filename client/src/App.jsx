import './App.scss';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register/Register';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ element }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token')); // Initialize based on token presence

	useEffect(() => {
		const token = localStorage.getItem('token');
		setIsAuthenticated(!!token); // Update state based on token
	}, []); // No dependency changes needed for consistent behavior

	return isAuthenticated ? element : <Navigate to="/login" />; // Redirect if not authenticated
};

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<PrivateRoute element={<Home />} />} /> {/* Protected route */}

					{/* Public routes for login and register */}
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					{/* Catch-all route */}
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
