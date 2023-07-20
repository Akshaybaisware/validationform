import React,{useState} from "react";


const StateWithArray =()=>{

let [favourite,setFavourite] = useState(["apple","mango","banana"])

function addToFavourite(event)
{
    setFavourite([...favourite,event.target.value]) 
}


return (
   <div>
      <input type ="text" placeholder="Enter favourite fruit"
       onChange={addToFavourite}
       />
   <button>Add to fovourite</button>

   <h1>{favourite.join(",")}</h1>

   
   </div>

    
)


}
export default StateWithArray;