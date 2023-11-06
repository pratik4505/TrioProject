import React from "react";
import NoteContext from "./NoteContext";

const NoteState= (props)=>{
    const s1={
        "name":"ayush",
        "class":"5b",
        auth:true
    }
    const [nameState,setNameState]=React.useState(s1)
    function update(){
        setNameState((prev)=>{
           return(
            {
                ...prev,
                auth:true
            }
           )
        })
    }
   return(
    <NoteContext.Provider value={{nameState,update}}>
      {props.children}
    </NoteContext.Provider>
   )
}

export default NoteState