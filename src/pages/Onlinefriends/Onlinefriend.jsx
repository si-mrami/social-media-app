import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Onlinefriend.css'
import { Users } from '../../dummyData'
import Online from '../../components/online/Online'


export default function Onlinefriend () {
  return (
    <>
    <Topbar/>
    <div className="Online">
        <Sidebar/>
        <div className="Online-container">
            <h1>Your Online Friends</h1>
            <div className="Online-list">
                <ul className='onlinefriends'>
                  {Users.map (u=> (
                    <Online key={u.id} user={u}/>
                  ))}
                </ul>
                <button className="rightbarButton">Show All Friends</button>
            </div>
        </div>
    </div>
    </>
  );
}
