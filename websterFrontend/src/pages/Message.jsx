import React from 'react'
import Navbar from '../Components/Navbar'
import NoteContext from '../context/NoteContext'
import { useNavigate } from "react-router-dom";

export default function Message(){
    const nav=useNavigate()
    const a=React.useContext(NoteContext)
    
    return <div>
        <Navbar></Navbar>
        <button onClick={a.update}> submit</button>
       <p > This is Messages section {a.nameState.name}</p>
    </div>
}