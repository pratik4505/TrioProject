import React from "react"
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../api/auth"
import NoteContext from '../context/NoteContext'
import '../sass/styling.scss'
export default function LoginComponent(){
  const a=React.useContext(NoteContext)
  
  const nav=useNavigate()
    function handle(){
      
      nav("/")
    }
    const [formData,setFormData]=React.useState({
        email:"",
        password:"",
    })
    function change(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(formData)
    return(
        <div className="container">
            <div className="header">
                <div className="text">Log In</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            <div className="input">
              <input 
                type="text" 
                name="email"
                value={formData.email}
                placeholder="Enter Your Email"
                onChange={change}      
              />
            </div>
            <div className="input">
              <input
               type="password"
               name="password"
               value={formData.password}
               placeholder="Password"
               onChange={change}
              />
            </div>
            
            <div className="submit-container">
              <div className="submit" onClick={handle}>Login</div>
            </div>
            
            </div>
        </div>
    )
}