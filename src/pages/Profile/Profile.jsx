import React from "react";
import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import { Posts } from "../../dummyData";
import Post from "../../components/post/Post";

const Profile = () => {
	return (
		<>
			<Topbar />
			<div className="profile">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								className="profileCoverImg"
								src="assets/post/3.jpeg"
								alt=""
							/>
							<img
								className="profileUserImg"
								src="assets/person/person1.png"
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">Mohamed Rami</h4>
							<span className="profileInfoDesc">Hello my friends!</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Rightbar profile />
					</div>
					<button className="rightbarButton">Show more Friends</button>
					<div className="posts scrollbar scrollbar-primary">
						{Posts.map(p => (
							<Post key={p.id} post={p} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
