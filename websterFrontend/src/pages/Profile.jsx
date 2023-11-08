import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
export default function Profile(){

    const nav=useNavigate()
    const a=React.useContext(NoteContext)
    console.log(a.nameState)
    function handle(){
        a.update()
        nav("/")
    }
    let response=true
    async function check(){
       response=await (a.nameState) 
       console.log(response)
       if(response===false)
      nav("/Profile")
    }
    check()
    
    return (
    <div>
        <Navbar></Navbar>
        <div className='temp'>
        <div className="main-container">
        <div className='image-container'>
            <h1>image comes here</h1>
        </div>
        <div className='primary-description'>
            <p> name of the user</p>
            <p>something...</p>
            <p>something...</p>
        </div>
      </div>
      <div className='secondary-description'>
        <p>something more....</p>
        <p>something more.....</p>
        <button onClick={handle}>Logout</button>
      </div>
    </div>
    </div>
    )
}