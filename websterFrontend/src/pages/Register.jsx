import RegisterComponent from "../Components/RegisterCom"
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";
export default function Register(){
    const nav=useNavigate()
    return (
        <div>
            <Navbar></Navbar>
            <RegisterComponent />
        </div>
            
    )
}