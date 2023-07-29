
import "./feed.css";
import Share from '../share/Share'
import Post from "../post/Post";
import { Posts } from '../../dummyData';

export default function Feed() {
	return (
		<div className="feed">
			{/* <Sidebar /> */}
			<div className="feedWrapper scrollbar scrollbar-primary ">
				<Share />
				{Posts.map(p => (
					<Post key={p.id} post={p} />
				))}
			</div>
		</div>
	);
}
