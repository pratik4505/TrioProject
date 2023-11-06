import RegisterComponent from "../Components/RegisterCom"
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext'
export default function Register(){
    const nav=useNavigate()
    return (
        <div>
            <RegisterComponent />
        </div>
            
    )
}