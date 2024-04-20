import './Register.scss';
import { Link } from 'react-router-dom'

const Register = () => {

	return (
		<div className="register">
			<div className="registerWrapper">
				<div className="title">
					<span>
						Register in to your account to chat with your friends  👥.
					</span>
				</div>
				<div className="formeregister">
					<form action="">
						<div className="formGroup">
							<label htmlFor="">UserName</label>
							<input type="text" name="username" id="" />
						</div>
						<div className="formGroup">
							<label htmlFor="">Email</label>
							<input type="email" name="email" id="" />
						</div>
						<div className="formGroup">
							<label htmlFor="">Password</label>
							<input type="password" name="password" id="" />
						</div>
						<div className="formGroup">
							<label htmlFor="">Confirm Password</label>
							<input type="password" name="password" id="" />
						</div>
						<div className="btnregister">
							<button>Register</button>
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
