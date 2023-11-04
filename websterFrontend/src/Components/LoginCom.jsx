import React from "react"
import { LoginAPI } from "../api/auth"

import '../sass/styling.scss'
export default function LoginComponent(){
    function handle(){
        let result=LoginAPI()
        console.log(result)
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
                <div className="text">Sign In</div>
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
              <div className="submit" onClick={handle}>Login</div>
            </div>
            
            </div>
        </div>
    )
}