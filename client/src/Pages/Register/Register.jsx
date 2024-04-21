import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [confirmPassword, setConfirmPassword] = useState()
	const [err, setErr] = useState(false)
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		setErr('');
		if (password !== confirmPassword) {
			setErr('Passwords do not matsh')
		}
		try {
			const res = await axios.post('http://localhost:4000/api/auth/signup', {
				username,
				email,
				password
			})
			if (res.data.status === "OK") {
				navigate('/login');
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="register">
			<div className="registerWrapper">
				<div className="title">
					<span>
						Register in to your account to chat with your friends  👥.
					</span>
				</div>
				<div className="formeregister">
					<form onSubmit={handleRegister}>
						<div className="formGroup">
							<label htmlFor="">UserName</label>
							<input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
						</div>
						<div className="formGroup">
							<label htmlFor="">Email</label>
							<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className="formGroup">
							<label htmlFor="">Password</label>
							<input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
						</div>
						<div className="formGroup">
							<label htmlFor="">Confirm Password</label>
							<input type="password" name="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
							{err && <span>{err}</span>}
						</div>
						<div className="btnregister">
							<button type="submit">Register</button>
						</div>

						<div className="newAccount">
							<Link to='/login'>
								<p>do you have an account!</p>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}


export default Register
