import React from "react";
import Navbar from "../Components/Navbar";
import "../sass/HomeDesign.scss";
import NoteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";



import Feeds from '../Components/post/Feeds';


export default function Home() {



  return (

    <div>
       <Navbar></Navbar>
      <Feeds/>
    </div>
     
   
  );
}
