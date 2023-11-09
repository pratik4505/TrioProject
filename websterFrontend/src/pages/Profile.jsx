import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
import EducationContainer from '../Components/Profile/EducationContainer';
import ExperienceContainer from '../Components/Profile/ExperienceContainer';
import SkillContainer from '../Components/Profile/SkillContainer';
import "../sass/ProfileDesign.scss"
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
      <div className="full-body">
      <Navbar></Navbar>
      <div className='info'>
      <div className="container mt-3">
    <div className="row">
      <div className="col-md-4">
        <div className="profile-picture">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile Picture"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
      <div className="col-md-8">
        <h1>John Doe</h1>
        <p>Software Developer</p>
        <p>Location: New York, NY</p>
        <p>Connections: 500+</p>
        <p>LinkedIn Member Since: 2010</p>
      </div>
    </div>
    
    <div className="row mt-4">
      <div className="col-md-12">
        <h2>About</h2>
        <p>
          I am a software developer with a passion for coding and creating
          innovative software solutions.
        </p>
      </div>
    </div>
    <hr></hr>
    {/* Add more profile sections as needed */}
  </div>
      </div>
      <div>
        <EducationContainer/>
        </div>
        <br></br>
        <SkillContainer/>
        <br></br>
      <ExperienceContainer/>
  </div>
    )
}