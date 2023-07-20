import React from "react";
import react,{useState} from "react";

 
const SimpleForm=()=>{
   let [name,setName] = useState("")


//   function manageName(event){
//     setName(event.target.value)

//   }
return (
    <div>
      <input type ="text" placeholder="Enter your name"
         onChange={(event)=>setName(event.target.value)}
        value={name}  // because name is assign empty there
        /> 
       <button onClick={()=>setName("")}>Clear</button>
       <h1>{name.toUpperCase()}</h1>
    </div>
       

)

}
export default SimpleForm;