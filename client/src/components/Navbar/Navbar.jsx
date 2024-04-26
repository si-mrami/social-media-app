import { useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);

	}

	return (
		<div className="navbar">
			<div className="left">
				<div className="logo">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFPfg2Ab6W-YM1xHcW743dYdCc84IRw18eQ&s" alt="" />
				</div>
				<div className="searchInput">
					<input type="text" placeholder='search...' />
				</div>
			</div>
			<div className="right">
				<div className="btnCreate">
					<button>Create</button>
				</div>
				<div className="profile" onClick={toggleActive}>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFPfg2Ab6W-YM1xHcW743dYdCc84IRw18eQ&s" alt="" />
				</div>
				<div className={`userProfileList ${isActive ? 'active' : ''}`}>
					<ul>
						<li>Settings</li>
						<li>Log Out</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
