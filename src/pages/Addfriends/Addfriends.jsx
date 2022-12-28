import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Addfriends.css";
import pe1 from "../../images/deyane.jpg";
// import person from "../../images/person1.png";

export default function Addfriends() {
  return (
    <>
      <Topbar />
      <div className="addfriend">
        <Sidebar />
        <div className="addfriend-container">
          <h3>All Requests</h3>
          <div className="addfriend-top">
            <div className="addfriend-list">
              <div className="addfriendreq">
                <img src={pe1} alt="" className="profileimg" />
                <span className="requ-name">Billale GB</span>
                <span className="mutail">4 mutuail friends</span>
                <button className="conf-button">Confirm</button>
                <button className="del-button">Delete</button>
                <div className="listright">2h</div>
              </div>
              <div className="addfriendreq">
                <img src={pe1} alt="" className="profileimg" />
                <span className="requ-name">HaliLo Me</span>
                <span className="mutail">4 mutuail friends</span>
                <button className="conf-button">Confirm</button>
                <button className="del-button">Delete</button>
                <div className="listright">2w</div>
              </div>
            </div>
          </div>
          <h5>People You May Know</h5>
          <div className="addfriend-bottom">
            <div className="addfriend-list">
              <div className="addfriendreq">
                <img src={pe1} alt="" className="profileimg" />
                <span className="requ-name">Billale GB</span>
                <span className="mutail">4 mutuail friends</span>
                <button className="conf-button">Add Friend</button>
                <button className="del-button">Remove</button>
              </div>
              <div className="addfriendreq">
                <img src={pe1} alt="" className="profileimg" />
                <span className="requ-name">Kallid GB</span>
                <span className="mutail">13 mutuail friends</span>
                <button className="conf-button">Add Friend</button>
                <button className="del-button">Remove</button>
              </div>
              <div className="addfriendreq">
                <img src={pe1} alt="" className="profileimg" />
                <span className="requ-name">Ayoub Sed</span>
                <span className="mutail">8 mutuail friends</span>
                <button className="conf-button">Add Friend</button>
                <button className="del-button">Remove</button>
              </div>
              <div className="addfriendreq">
                <img src={pe1} alt="" className="profileimg" />
                <span className="requ-name">Fatih Najji</span>
                <span className="mutail">1 mutuail friends</span>
                <button className="conf-button">Add Friend</button>
                <button className="del-button">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
