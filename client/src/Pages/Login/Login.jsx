import { Link, useNavigate } from 'react-router-dom'
import './login.scss'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setError('');
		if (!email || !password) {
			setError('All fields are required!');
			return;
		}
		try {
			const res = await axios.post('http://localhost:4000/api/auth/signin', {
				email,
				password
			});
			if (res.data.status === "OK") {
				console.log("data:", res.data);
				localStorage.setItem('user', JSON.stringify(res.data));
				localStorage.setItem('token', res.data.token);
				navigate('/');
			} else {
				setError('Login failed. Please check your email and password.');
			}
		} catch (err) {
			console.error('Login error:', err);
		}
	}
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="title">
					<span>
						Login in to your account to chat with your friends  🙋‍♂️.
					</span>
				</div>
				<div className="formeLogin">
					<form onSubmit={handleLogin}>
						<div className="formGroup">
							<label htmlFor="">Email</label>
							<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className="formGroup">
							<label htmlFor="">Password</label>
							<input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
						</div>
						{error && <span>{error}</span>}
						<div className="btnLogin">
							<button type='submit'>Login</button>
						</div>

						<div className="newAccount">
							<Link to='/register'>
								<p>Create new account!</p>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
