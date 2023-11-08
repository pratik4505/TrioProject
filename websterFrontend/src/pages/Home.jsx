import React from 'react'
import Navbar from '../Components/Navbar'
import "../sass/HomeDesign.scss"
import NoteContext from '../context/NoteContext'
import { useNavigate } from "react-router-dom";
import Post from '../Components/post/Post';

<<<<<<< HEAD
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
||||||| 6ffbf52
export default function Home(){
    
    return <div>
        <Navbar></Navbar>
        <p>This is home section and about </p>
    </div>
}
=======
export default function Home(){
    const nav=useNavigate()
    const a=React.useContext(NoteContext)
    
    console.log(a.nameState)
    let response=true
    async function check(){
       response=await (a.nameState) 
       console.log(response)
       if(response===false)
      nav("/Login")
    }
    check()
    return <div>
        <Navbar></Navbar>
        <p>This is home section and about </p>
    </div>
}
>>>>>>> b3564449b9ffa7e0b8f6e6e225a602e09bb36741
