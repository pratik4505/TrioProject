import React from "react";
import Navbar from "../Components/Navbar";
import "../sass/HomeDesign.scss";
import NoteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";
import Post from "../Components/post/Post";
import { setCookie } from "../utils/cookieData";
import getJwtTokenFromCookie from "../utils/cookieData";
const jwtToken = getJwtTokenFromCookie;
import Feeds from '../Components/post/Feeds';
export default function Home() {
  const [postData, setPostData] = React.useState(null);
  const postId = "65486a026baa1d9b279b4d00";

  // React.useEffect(() => {
  //   const queryParameters = new URLSearchParams(window.location.search);
  //   const token = queryParameters.get("token");
  //   const userId = queryParameters.get("userId");

  //   // Set the token and userId in your component's state
  //   console.log(token);
  //   if (token) {
  //     setCookie("token", token, 2);
  //     setCookie("userId", userId, 2);
  //   }
  // }, []);























  return (
    <div>
       <Navbar></Navbar>
      <Feeds/>
    </div>
     
   
  );
}
