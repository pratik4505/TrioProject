import React from "react";
import "../sass/NavbarDesign.scss";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { MdEmojiPeople } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-bar">
        <img src="/Lyncwoback.png"></img>
        <div className="link-bar">
          <Link to="/">
            <AiFillHome size={40} className="react-icons" />
          </Link>
          <span>
            <Link to="/">Home</Link>
          </span>
        </div>
        <div className="link-bar">
          <Link to="/Jobs">
            <BsBriefcase size={40} className="react-icons" />
          </Link>
          <span>
            <Link to="/Jobs">Jobs</Link>
          </span>
        </div>
        <div className="link-bar">
          <Link to="/Requests">
            <MdEmojiPeople size={40} className="react-icons" />
          </Link>
          <span>
            <Link>Request</Link>
          </span>
        </div>
        <div className="link-bar">
          <Link to="/Message">
            <BiSolidMessageDetail size={40} className="react-icons" />
          </Link>
          <span>
            <Link to="/Message">Message</Link>
          </span>
        </div>
        <div className="link-bar">
          <Link to="/Notifications">
            <IoIosNotifications size={40} className="react-icons" />
          </Link>
          <span>
            <Link to="/Notifications">Notify</Link>
          </span>
        </div>
        <div className="link-bar">
          <Link to="/Profile">
            <BiUserCircle size={40} className="react-icons" />
          </Link>
          <span>
            <Link to="/Profile">Profile</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
