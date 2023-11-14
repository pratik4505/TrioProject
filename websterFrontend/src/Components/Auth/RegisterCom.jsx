import React,{useState} from "react"
import { useNavigate } from "react-router-dom";
import { RegisterAPI } from "../../api/auth"
import NoteContext from '../../context/NoteContext'
import '../../sass/styling.scss';
import { AiOutlineUser } from 'react-icons/ai';
import { CiMail } from "react-icons/ci";
import {BsKey} from 'react-icons/bs';

export default function RegisterComponent() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSignUp = async () => {
    setLoading(true);
    try {
      
      const response = await RegisterAPI(userName, email, password);

      if (response.ok) {
        
        navigate('/Login');
      } else {
       
        const data = await response.json();
        setResponseMessage(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setResponseMessage('An error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <img className="login-lync-logo" src="/Lyncwoback.png"></img>
        <h1>Sign up</h1>
        <div className="input-group">
          <div className="input-field">
            <AiOutlineUser className="react-icons-loginPG" />
            <input
            type="text"
            name="username"
            value={userName}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div className="input-field">
            <CiMail className="react-icons-loginPG"/>
            <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className="input-field">
            <BsKey className="react-icons-loginPG" />
            <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          
          <div className="submit-container">
          {loading ? (
            <div className="loading-spinner">Loading...</div>
          ) : (
            <div className="submit" onClick={handleSignUp}>
              Sign up
            </div>
          )}
          </div>
        </div>
      </div>
      {responseMessage && (
        <div className="error-message">{responseMessage}</div>
      )}
    </div>
  );
}





