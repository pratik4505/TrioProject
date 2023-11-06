import LoginComponent from "../Components/LoginCom"
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
export default function Login(){
    return (
        <div>
            <LoginComponent />
        </div>
            
    )
}