import {useContext} from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from "react-router-dom";
import GlobalContext from '../context/GlobalContext';

export default function Requests(){
   
   
  const navigate = useNavigate();
  const gloContext = useContext(GlobalContext);
  if(!gloContext.isLoggedIn){
    navigate('/Login')
  }

    return <div>
        <Navbar></Navbar>
       <p> This is Request section </p>
    </div>
}