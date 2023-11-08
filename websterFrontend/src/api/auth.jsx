export async function LoginAPI(props){
    let user=props.username
    let pass=props.password
    let item={user,pass}
    try{
        let result=await fetch("http://locahost:3000/login",{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
     })
     result =await result.json()
     if(result.status=="202"){
        return "ok"
     }else{
        return "password or mail id wrong"
     }
    }catch(error){
        return `${error}`
    }
}
export async function RegisterAPI(props){
    let mail=props.email
    let user=props.username
    let pass=props.password
    let item={mail,user,pass}
    try{   
    let result= await fetch("http://localhost:3000/signup",{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body :JSON.stringify(item)
    })
    result =await result.json() 
    if(result.status==="202"){
        return "ok";
    }else{
        return "email already registered";
    }
    }catch(error){
        return `${error}`;
    }
    
}

