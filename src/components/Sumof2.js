import React,{useState} from "react";


const Sumof2 = ()=>{

let[number1,setNumber1] = useState(0)

let[number2,setNumber2] = useState(0)

return(
    <div>
       <input type="text"  placeholder="Enter first no"
      onChange={(event)=>{setNumber1(event.target.value)}}
      />
    <input type="text"  placeholder="Enter Second no"
    onChange={(event)=>{setNumber2(event.target.value)}}  
    />

    <button>Sum</button>
    <h1>Sum is{+number1+ +number2}</h1>
   </div>
)


}

export default Sumof2;





