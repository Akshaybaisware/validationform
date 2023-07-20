import react,{useState}from "react";

const StateWithObject =()=>{

let [count ,setCount]=useState({gold:0,Silver:0,bronge:0})

function increaseGold(){
setCount({gold:count.gold+1});
}
function increaseSilver(){
   setCount({Silver:count.Silver+1});
   }
   function increasebronge(){
      setCount({bronge:count.bronge+1});
      }


return (
         <div>
            <h1>gold:{count.gold} Silver:{count.Silver} bronze:{count.bronge}</h1>
            <button onClick={increaseGold}>Increase gold</button>
            <button onClick={increaseSilver}>Increase Silver</button>
            <button onClick ={increasebronge}>Increase bronge</button>
         </div>
)


}
export default StateWithObject;
