import React from "react"
import { LoginAPI } from "../api/auth"
import img1 from '/Linkedin.png'
import '../sass/styling.scss'
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
        <div className="main-container">
            <div className="image-container"> 
                <img src={img1} />
            </div>
            <div className="form-container">
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
            
            <button onClick={handle}>sign in</button>
            <button onClick={handle}>sign in with google</button>
            </div>
        </div>
    )
}