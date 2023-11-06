import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
export default function Notifications(){
    const nav=useNavigate()
    const a=React.useContext(NoteContext)
    
    return <div>
        <Navbar></Navbar>
       <p> This is Nottifications section </p>
    </div>
}