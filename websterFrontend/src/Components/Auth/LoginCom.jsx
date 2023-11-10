import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../../api/auth";
import { setCookie } from '../../utils/cookieData';
import { AiOutlineUser } from 'react-icons/ai';
import {BsKey} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import NoteContext from '../../context/NoteContext'

import '../../sass/styling.scss';



export default function LoginComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  
  const change = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const googleLoginHandler=async ()=>{
   
    window.open('http://localhost:3000/auth/google',"_self");
    
    
  }

  const handleLogin = async () => {
    setLoading(true);
    try {
      
      const response = await LoginAPI({email:formData.email, password:formData.password});
      const data = await response.json();
      if (response.ok) {
        
       
        setCookie('token', data.token, 2); 
        setCookie('userId', data.userId, 2);
        navigate('/')
      } else {
        
        setResponseMessage(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setResponseMessage('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Log in</h1>
        <div className="input-group">
          <div className="input-field">
            <AiOutlineUser className="react-icons" />
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={change}
            />
          </div>
          <div className="input-field">
            <BsKey className="react-icons" />
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={change}
            />
          </div>
          <p>
            Lost password <a href="#">Click Here!</a>
          </p>
          <div className="submit-container">
            {loading ? (
              <div className="loading-spinner">Loading...</div>
            ) : (
              <div className="submit" onClick={handleLogin}>
                Log in
              </div>
            )}
            <div className="submitG" onClick={googleLoginHandler}>Log in with Google</div>
           
          </div>
          <div className="register" >
            Don't have an account? <Link to="/Register">Register</Link>
          </div>
        </div>
      </div>
      {responseMessage && (
        <div className="error-message">{responseMessage}</div>
      )}
    </div>
  );
}
