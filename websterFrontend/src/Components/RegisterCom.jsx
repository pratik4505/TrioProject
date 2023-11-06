import React from "react"
import { useNavigate } from "react-router-dom";
import { RegisterAPI } from "../api/auth"

import '../sass/styling.scss'
export default function RegisterComponent(){
    const nav=useNavigate()
    async function handle(){
      try{
        let response=await RegisterAPI(formData)
        if(response==="ok"){
        //nav("/OTP")
        }else{
          console.log(response)
        }
      }catch(error){
        console.log(`${error}`)
      } 
    }
    const [formData,setFormData]=React.useState({
        username:"",
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
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            <div className="input">
                <input 
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="Enter Your Username"
                  onChange={change}
                />
            </div>
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
              <div className="submit" onClick={handle}>Sign up</div>
            </div>
            
            </div>
        </div>
    )
}