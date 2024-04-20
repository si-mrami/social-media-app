import './App.scss'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from './Pages/Register/Register';

const App = () => {
	const userLogin = false;
	return (
		<div>
			<Router>
				<Routes>
					{userLogin ? (
						<Route path='/' element={<Home />} />
					) : (
						<Route path='/' element={<Navigate to='/login' />} />
					)}
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App
