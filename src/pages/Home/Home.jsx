import React from 'react';
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css';

const Home = () => {
	return (
		<>
			<Topbar />
			<div className="homeContianer">
				<Sidebar/>
				<Feed />
				<Rightbar />
			</div>
		</>
	);
}

export default Home;
