import React from 'react'
import Navbar from '../Components/Navbar'
import "../sass/HomeDesign.scss"
import NoteContext from '../context/NoteContext'
import { useNavigate } from "react-router-dom";

export default function Home(){
    
    return <div>
        <Navbar></Navbar>
        <p>This is home section and about </p>
    </div>
}