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

            <img className='lyncImg' src="/Lyncwoback.png"></img>
            
            <div className='nav-bar'>

               <div className='link-bar'>
                <Link to='/'>< AiFillHome size={40} className="react-icons-navbar"/></Link>
                <span><Link className='nav-link-name' to='/'>Home</Link></span>
               </div>

               <div className='link-bar'>
                <Link to="/Jobs"><BsBriefcase size={40} className="react-icons-navbar"/></Link>
                <span><Link className='nav-link-name' to="/Jobs">Jobs</Link></span>
               </div>

               <div className='link-bar'>
                <Link to="/Requests">< MdEmojiPeople size={40} className="react-icons-navbar"/></Link>
                <span><Link className='nav-link-name' to="/requests">Request</Link></span>
               </div>

               <div className='link-bar'>
                <Link to="/Message">< BiSolidMessageDetail size={40} className="react-icons-navbar"/></Link>
                <span><Link className='nav-link-name' to="/Message">Message</Link></span>
               </div>

               <div className='link-bar'>
                <Link to="/Notifications">< IoIosNotifications size={40} className="react-icons-navbar"/></Link>
                <span><Link className='nav-link-name' to="/Notifications">Notify</Link></span>
               </div>

               <div className='link-bar'>
                <Link to="/Profile">< BiUserCircle size={40} className="react-icons-navbar"/></Link>
                <span><Link className='nav-link-name' to="/Profile">Profile</Link></span>
               </div>
               
            </div>
        </div>
    )
}

/* 
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
            <nav className='nav-bar'>

                <img src="/Lyncwoback.png"></img>

                <ul>
                    <li className='link-bar'><Link to='/'>< AiFillHome size={20} className="react-icons"/>Home</Link></li>

                    <li className='link-bar'><Link to='/jobs'><BsBriefcase size={20} className="react-icons"/>Jobs</Link></li>

                    <li className='link-bar'><Link to='/Requests'>< MdEmojiPeople size={20} className="react-icons"/>Request</Link></li>

                    <li className='link-bar'><Link to="/Message">< BiSolidMessageDetail size={20} className="react-icons"/>Message</Link></li>

                    <li className='link-bar'> <Link to="/Notifications">< IoIosNotifications size={20} className="react-icons"/>Notify</Link></li>

                    <li className='link-bar'><Link to="/Profile">< BiUserCircle size={20} className="react-icons"/>Profile</Link></li>
                </ul>

            </nav>
        </div>
    )
}

*/