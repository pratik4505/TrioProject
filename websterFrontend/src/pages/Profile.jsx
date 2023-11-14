import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import UserProfile from "../Components/userProfile/userProfile";
export default function Profile( props) {
  //props give ownerId
  return (
    <>
      <Navbar></Navbar>
      <UserProfile ownerId={props.ownerId}/>
    </>
  );
}