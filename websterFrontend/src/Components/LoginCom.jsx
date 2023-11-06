import React from "react"
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../api/auth"
<<<<<<< HEAD
import { AiOutlineUser } from 'react-icons/ai';
import {BsKey} from 'react-icons/bs';


=======
import NoteContext from '../context/NoteContext'
>>>>>>> 6ffbf52173d523286647e005f63389149b2a02ba
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
          
          <div className="form-box">

            <h1>Log in</h1>   

            <div className="input-group">
              

              <div className="input-field">
              < AiOutlineUser  className="react-icons"/>
                <input 
                  type="text" 
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={change}      
                />
              </div>

              <div className="input-field">
              < BsKey className="react-icons"/>
                <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={change}
                />
              </div>

              <p>Lost password <a href="#">Click Here!</a></p>

              <div className="submit-container">
                <div className="submit" onClick={handle}>Log in</div>
                <div className="submitG">Log in with Google</div>
              </div>

              <div className="register">Dont have an account? <a href="/register"> Register</a></div>

              
            </div>
          
          </div>
        </div>
    )
}