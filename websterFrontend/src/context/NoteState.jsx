import React from "react";
import NoteContext from "./NoteContext";

const NoteState= (props)=>{
    
    const [nameState,setNameState]=React.useState(false)
    function update(){
        setNameState(prev=>!prev)
    }
   return(
    <NoteContext.Provider value={{nameState,update}}>
      {props.children}
    </NoteContext.Provider>
   )
}

export default NoteState
