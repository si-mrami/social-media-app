import React from "react";
import "./Videos.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import image from "../../images/deyane.jpg";
import { MoreVert } from "@material-ui/icons";
import like from "../../images/like.png";
import love from "../../images/heart.png";
import vid from "../../images/vid.mp4";
import { useState } from "react";

export default function Videos({vide}) {

  const [liked, setLiked] = useState("");
  const [isLiked, setisLiked] = useState(false);

  const hendellikeClick = () =>{
        setLiked(isLiked ? liked-1 : liked+1);
        setisLiked(!isLiked);
  }

  return (
    <>
      <Topbar />
      <div className="videos">
        <Sidebar />
        <div className="video-container">
          <h2>Top Videos</h2>
          <div className="video-list">
            <div className="videoTop">
              <div className="videoTopleft">
                <img src={image} alt="" className="profile-img" />
                <span className="videoUsername">Mohammed Diyane</span>
                <span className="videoDate">5 min ago</span>
              </div>
              <div className="videoTopRight">
                <MoreVert />
              </div>
            </div>
            <div className="videoCenter">
              <span className="videodesc">New Video.</span>
              <video controls className="video">
                <source src={vid} type="video/mp4" />
              </video>
            </div>
            <div className="videobottom">
              <div className="videobottomleft">
                <img src={like} alt="" className="imgicon" onClick={hendellikeClick}/>
                <img src={love} alt="" className="imgicon" onClick={hendellikeClick}/>
                <span className="videoCounter">{liked} Peaple Like it</span>
              </div>
              <div className="videobottomrigh">
                <span className="CommentText">12 Comments</span>
              </div>
            </div>
          </div>
          <button className="rightbarButton">Show more Videos..</button>
        </div>
      </div>
    </>
  );
}
