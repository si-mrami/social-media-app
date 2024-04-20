import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="title">
					<span>
						Login in to your account to chat with your friends  🙋‍♂️.
					</span>
				</div>
				<div className="formeLogin">
					<form action="">
						<div className="formGroup">
							<label htmlFor="">Email</label>
							<input type="email" name="email" id="" />
						</div>
						<div className="formGroup">
							<label htmlFor="">Password</label>
							<input type="password" name="password" id="" />
						</div>
						<div className="btnLogin">
							<button>Login</button>
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
