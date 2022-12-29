import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Chats.css";
import pe1 from "../../images/deyane.jpg";
import story from "../../images/story.png";
import person from "../../images/person1.png";

export default function Chats() {
  return (
    <>
      <Topbar />
      <div className="chats">
        <Sidebar />
        <div className="chats-container">
          <h3>Your Chats</h3>
          <div className="chats-top">
            <div className="chats-list">
              <img src={story} alt="" className="profileimg" />
              <span className="iconstory">+</span>
              <span className="username">Add to Story</span>
              <img src={pe1} alt="" className="profileimg" />
              <span className="iconOnline"></span>
              <span className="username">Ayoub Farhan</span>
              <img src={pe1} alt="" className="profileimg" />
              <span className="iconOnline"></span>
              <span className="username">Mohamed Deyane</span>
              {/* <img src={pe1} alt="" className="profileimg" />
              <span className="iconOnline"></span>
              <span className="username">Ayoub Rami</span> */}
              {/* <img src={pe1} alt="" className="profileimg" />
              <span className="iconOnline"></span>
              <span className="username">Idriss Laframe</span> */}
            </div>
          </div>
          <div className="chats-center">
            <div className="chats-list">
              <div className="friendlist">
                <img src={pe1} alt="" className="profileimg" />
                <span className="friendName">Mohamed Diyane</span>
                <span className="messege-time">1min</span>
                <span className="messege">Hello friend How are Yoy ?</span>
              </div>
              <div className="friendlist">
                <img src={person} alt="" className="profileimg" />
                <span className="friendName">Hammza Farhan</span>
                <span className="messegetime"></span>
                <span className="messege">Ohhh My Good</span>
              </div>
              <div className="friendlist">
                <img src={person} alt="" className="profileimg" />
                <span className="friendName">Hammza Farhan</span>
                <span className="messegetime"></span>
                <span className="messege">Ohhh My Good</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
