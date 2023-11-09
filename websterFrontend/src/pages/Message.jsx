import React from 'react'
import Navbar from '../Components/Navbar'
import NoteContext from '../context/NoteContext'
import { useNavigate } from "react-router-dom";

export default function Message(){
    const nav=useNavigate()
    const a=React.useContext(NoteContext)
    
    console.log(a.nameState)
    let response=true
    async function check(){
       response=await (a.nameState) 
       console.log(response)
       if(response===false)
      nav("/Message")
    }
    check()
    
    return <div>
        <Navbar></Navbar>
       <p > This is Messages section</p>
    </div>
}
