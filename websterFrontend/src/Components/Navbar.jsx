import React from 'react'
import "../sass/NavbarDesign.scss"
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import {BsBriefcase} from 'react-icons/bs';
import {BiUserCircle} from 'react-icons/bi';
import {BiSolidMessageDetail} from 'react-icons/bi';
import {IoIosNotifications} from 'react-icons/io';
import {MdEmojiPeople} from 'react-icons/md';

export default function Navbar(){
    return (
        <div className="navbar-container">
            <div className='nav-bar'>
                <img src="/linked.png"></img>
              <div className='link-bar'>
                <a href="/">< AiFillHome size={40} className="react-icons"/></a>
                <span><a href="/">Home</a></span>
               </div>
               <div className='link-bar'>
                <a href="/Jobs">< BsBriefcase size={40} className="react-icons"/></a>
                <span><a href="/Jobs">Jobs</a></span>
               </div>
               <div className='link-bar'>
                <a href="/Requests">< MdEmojiPeople size={40} className="react-icons"/></a>
                <span><a href="/Requests">Request</a></span>
               </div>
               <div className='link-bar'>
                <a href="/Message">< BiSolidMessageDetail size={40} className="react-icons"/></a>
                <span><a href="/Message">Message</a></span>
               </div>
               <div className='link-bar'>
                <a href="/Notifications">< IoIosNotifications size={40} className="react-icons"/></a>
                <span><a href="/Notifications">Notifty</a></span>
               </div>
               <div className='link-bar'>
                <a href="/Profile">< BiUserCircle size={40} className="react-icons"/></a>
                <span><a href="/Profile">Profile</a></span>
               </div>
            </div>
        </div>
    )
}