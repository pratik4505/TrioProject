import {useContext} from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import UserProfile from "../Components/userProfile/userProfile";
import GlobalContext from "../context/GlobalContext";
import { useParams } from 'react-router-dom';
export default function Profile() {
 
 
  const navigate = useNavigate();
  const gloContext = useContext(GlobalContext);
  if(!gloContext.isLoggedIn){
    navigate('/Login');
  }

  const { ownerId} = useParams();
 
  return (
    <>
      <Navbar></Navbar>
      <UserProfile ownerId={ownerId}/>
    </>
  );
}