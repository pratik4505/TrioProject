import React from 'react'
import Navbar from '../Components/Navbar'
import "../sass/HomeDesign.scss"
import NoteContext from '../context/NoteContext'
import { useNavigate } from "react-router-dom";
import Post from '../Components/post/Post';

export default function Home() {
const [postData, setPostData] = React.useState(null);
  const postId = "65486a026baa1d9b279b4d00"; 
  
  React.useEffect(() => {
   
    fetch(`http://localhost:3000/getPost/${postId}`)
      .then((response) => response.json())
      .then((data) => {
       
        setPostData(data);
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      });
  }, []);

  return (
    <React.Fragment>
      <Navbar></Navbar>
      {postData&&<Post postData={postData}></Post>}
    </React.Fragment>
  )
};
