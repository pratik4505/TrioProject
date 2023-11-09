import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
import EducationContainer from '../Components/Profile/EducationContainer';
import ExperienceContainer from '../Components/Profile/ExperienceContainer';
import SkillContainer from '../Components/Profile/SkillContainer';
import "../sass/ProfileDesign.scss"
export default function Profile(){

    /*const nav=useNavigate()
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
    
    */

    const data=
    {
    userName:"Ayush Kumar",
    summary:"Web Developer",
    industry:"Software",
    imageUrl:"",
    experience:[{
        title:"Web developer",
        description:"developes Web",
        startDate:"14/07/23",
        endDate:"up till now"
    },
    {
        title:"Web developer",
        description:"developes Web",
        startDate:"04/07/19",
        endDate:"13/07/23"
    }
    ],
    education:[
    {
        place:"MNNIT",
        startDate:"4/11/22",
        endDate:"6/6/26"
    },
    {
        place:"DPS",
        startDate:"4/11/10",
        endDate:"6/6/20"
    }
    ]
}
    
    console.log("rendered")
    const[profileData,setprofileData]=React.useState(data)
    console.log(profileData)
    const updateData=(newData)=>{
      const newEd=[]
      for(let i=0;i<profileData.education.length;i++){
        const currentSquare=profileData.education[i]
        newEd.push(currentSquare)
      }
      newEd.push(newData)
      console.log(newEd)
      
      setprofileData(prev=>{
        return{
          ...prev,
          education:newEd
        }
      })
    }

    
    const updateData1=(newData)=>{
      const newEx=[]
      for(let i=0;i<profileData.experience.length;i++){
        const currentSquare=profileData.experience[i]
        newEx.push(currentSquare)
      }
      newEx.push(newData)
      console.log(newEx)
      
      setprofileData(prev=>{
        return{
          ...prev,
          experience:newEx
        }
      })
    }
    
    /*
    React.useEffect(()=>{
       fetch("http://localhost:3000/getAllUser",{
        method:"GET"
      })
      
      .then((res)=> res.json())
      .then((data)=>{
        console.log("atleat no error")
        console.log(data.allUser)
        setprofileData(data.allUser)
      })
    },[])
    */
    let user_name=profileData.userName
    let summary=profileData.summary
    let industry=profileData.industry
    let experience=profileData.experience
    console.log(profileData.education)
    //let skills=profileData.skills
    
   
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
        <h1>{user_name}</h1>
        <p>{summary}</p>
        <p>{`${industry} industry`}</p>
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
    <EducationContainer    
     education={profileData.education}
     onDataUpdate={updateData}
     />
     <hr></hr>
      <ExperienceContainer
     experience={profileData.experience}
     onDataUpdate={updateData1}
     />
     
  </div>
      </div>
       
     <hr></hr>
       { /*
        <br></br>
        <SkillContainer
        skill={skill}
        />
        <br></br>
      <ExperienceContainer
      experience={experience}
      />
    */}
  </div>
    )
}