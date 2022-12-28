import "./rightbar.css";
import { Users } from '../../dummyData'
import Online from "../online/Online";


export default function Rightbar({profile}) {
 
  const HomeRightbar = () => {
    return(
      <>
       <div className="birthdayContainer">
        <img src="assets/gift.png" alt="" className="birthdayImg" />
        <span className="birthdayText"><b>Fatima Fati</b> and <b>4 other friends</b> have a birthday today.</span>
      </div>
      <img src="assets/ad.png" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
       {Users.map(u=> (
        <Online key={u.id} user={u}/>
       ))}
      </ul>
      </>
    )
  }

  const ProfileRight =() => {
    return(
      <>
      <h4 className="rightbarTitle">User Informations</h4>
      <div className="rightbarInfo">
        <div className="righbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">El Jadida</span>
          <br/>
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Oulad Boussakken</span>
          <br/>
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="friends">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/deyane.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mohammed Diyane</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/farhan.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ayoub Farhan</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/fatima.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Fatima Fatima</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/ideriss.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lafram Idriss</span>
        </div>
      </div>
      {/* 1:59:32 */}
      </>
    )
  }

  return (
    <div className="rightbar">
     <div className="rightbarWrapper">
     {profile ? <ProfileRight/> : <HomeRightbar/>}
     </div>
    </div>
  );
}
