import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
export default function Requests(){
    const nav=useNavigate()
    const a=React.useContext(NoteContext)
    
    return <div>
        <Navbar></Navbar>
       <p> This is Request section </p>
    </div>
}