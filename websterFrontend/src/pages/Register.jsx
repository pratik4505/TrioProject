import React from "react";
import RegisterComponent from "../Components/RegisterCom"
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
export default function Register(){
    const nav=useNavigate()
    const a=React.useContext(NoteContext)
    
    console.log(a.nameState)
    let response=true
    async function check(){
       response=await (a.nameState) 
       console.log(response)
       if(response===false)
      nav("/Register")
    }
    check()

    return (
        <div>
            <RegisterComponent />
        </div>
            
    )
}