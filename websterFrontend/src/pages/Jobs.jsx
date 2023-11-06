import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
export default function Jobs(){
    const nav=useNavigate()
    const a=React.useContext(NoteContext)
    
    return <div>
        <Navbar></Navbar>
       <p> This is Jobs section </p>
    </div>
}