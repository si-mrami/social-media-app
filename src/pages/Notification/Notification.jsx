import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import './Notification.css'
import person from "../../images/person1.png";


export default function Notification () {
    return (
        <>
        <Topbar/>
        <div className="notification">
            <Sidebar/>
            <div className="notif-container">
                <h3>Your Notification</h3>
            <div className="notif-list">
            <div className="friendlist">
                <img src={person} alt="" className="profileimg" />
                <span className="friendName">Hammza Farhan</span>
                <span className="messege">4 people like you profile</span>
              </div>
              <div className="friendlist">
                <img src={person} alt="" className="profileimg" />
                <span className="friendName">Hammza Farhan</span>
                <span className="messege">4 people like you profile</span>
              </div>
              <div className="friendlist">
                <img src={person} alt="" className="profileimg" />
                <span className="friendName">Hammza Farhan</span>
                <span className="messege">4 people like you profile</span>
              </div>
              <div className="friendlist">
                <img src={person} alt="" className="profileimg" />
                <span className="friendName">Hammza Farhan</span>
                <span className="messege">4 people like you profile</span>
              </div>
              <div className="friendlist">
                <img src={person} alt="" className="profileimg" />
                <span className="friendName">Hammza Farhan</span>
                <span className="messege">4 people like you profile</span>
              </div>
              <div className="friendlist">
                <img src={person} alt="" className="profileimg" />
                <span className="friendName">Hammza Farhan</span>
                <span className="messege">4 people like you profile</span>
              </div>
              <button className="rightbarButton">Show more</button>
            </div>
            </div>
        </div>
        </>
    )
}