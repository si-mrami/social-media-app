import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Videos from "./pages/Videos/Videos";
import Onlinefriend from "./pages/Onlinefriends/Onlinefriend";
import Chats from "./pages/Chats/Chats";
import Addfriends from "./pages/Addfriends/Addfriends";
import Notification from "./pages/Notification/Notification";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  return (
    <>
    {/* <Topbar/>
    <div className="app-container">
    // <Sidebar/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/videos" element={<Videos/>}/>
      <Route path="/onlinefriend" element={<Onlinefriend/>}/>
      <Route path="/chats" element={<Chats/>}/>
      <Route path="/friend-request" element={<Addfriends/>}/>
      <Route path="/notification" element={<Notification/>}/>
    </Routes>
    {/* </div> */}
    </>
  );
}

export default App;
