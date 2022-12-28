import { Link } from "react-router-dom";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Mrami</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
          <Search className="searchIcon1" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Home</span>
          </Link>
          <Link to="/onlinefriend" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Online</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Link to="/friend-request" style={{ textDecoration: "none" }}>
              <Person className="iconbar" />
              <span className="topbarIconBadge">2</span>
            </Link>
          </div>

          <div className="topbarIconItem">
            <Link to="/chats" style={{ textDecoration: "none" }}>
              <Chat className="iconbar" />
              <span className="topbarIconBadge">2</span>
            </Link>
          </div>

          <div className="topbarIconItem">
          <Link to="/notification" style={{ textDecoration: "none" }}>
            <Notifications className="iconbar" />
            <span className="topbarIconBadge">9+</span>
            </Link>
          </div>
        </div>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <img src="/assets/person/person1.png" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
