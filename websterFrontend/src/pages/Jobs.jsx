import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
import MainJob from '../Components/Jobs/Jobss';
export default function Jobs(){
    
    
    return (
    <div>
        <Navbar></Navbar>
       <MainJob/>
    </div>
    );
}