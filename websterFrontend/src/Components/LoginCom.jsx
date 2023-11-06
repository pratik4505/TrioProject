import React from "react"
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../api/auth"

import '../sass/styling.scss'
export default function LoginComponent(){
  const nav=useNavigate()
    function handle(){
      //actual function to come here
      //just temp for checking
      if(formData.email!=""){
      nav("/")}else{
      console.log(err)
      }
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