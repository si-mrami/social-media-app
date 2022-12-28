import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import './Notification.css'


export default function Notification () {
    return (
        <>
        <Topbar/>
        <div className="notification">
            <Sidebar/>
            <div className="notif-container">
                <h3>Your Notification</h3>
            <div className="notif-list">
                
            </div>
            </div>
        </div>
        </>
    )
}