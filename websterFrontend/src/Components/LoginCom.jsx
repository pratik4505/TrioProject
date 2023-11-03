import React from "react"
import { LoginAPI } from "../api/auth"

export default function LoginComponent(){
    function handle(){
        let result=LoginAPI()
        console.log(result)
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
        <div>
            <h1>Login</h1>
            <input 
             type="text" 
             name="email"
             value={formData.email}
             placeholder="Enter Your Email"
             onChange={change}      
            />
            <input
             type="text"
             name="password"
             value={formData.password}
             placeholder="password"
             onChange={change}
            />
            
            <button onClick={handle}>submit</button>
        </div>
    )
}