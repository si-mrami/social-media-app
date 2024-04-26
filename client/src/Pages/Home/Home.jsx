import Feed from '../../components/Feed/Feed'
import Navbar from '../../components/Navbar/Navbar'
import Sedbar from '../../components/Sidebar/Sidebar'
import './Home.scss'

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<div className="homeContainer">
				<Sedbar />
				<div className="homeFeed">
					<Feed />
				</div>
			</div>
		</div>
	)
}

export default Home
