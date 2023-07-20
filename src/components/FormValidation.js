import react,{useState} from "react";


const FormValidation =()=>{
//   let [name, setName]=useState("")
//   let [email, setEmail]=useState("")
//   let [password, setPassword]=useState("")
//   let [confirmpassword,  setConfirmpassword] =("")
    
  let [user ,setUser] =useState({name:"",email:"", password:"",confirmPassword:""})
   let [error , setError] =useState("")

  function validateForm(event)//user interaction
  {
    event.preventDefault()
    if(user.name.length<3 || user.name.length>30) 
     {
        return setError("Name should be min 3 character and maximum 30 character")
     }
    else if(!user.email.includes("@") || !user.email.includes(".")) 
     {
        return setError("Email should contain @ and ")
     }
     else if(user.password.length<0 || user.password.length>15)
      {
        return setError("password should be min 3 character and maximum 15 character")
      }
      else if(user.password !== user.confirmPassword)
       {
        return setError("password and confirmm password should be same")
       }
    
  }
  
  return(
             <div>
                {<h1> Error is: {error}</h1>}
                 <form onSubmit ={validateForm}> 
                    <input type="text" placeholder="Enter Your Name"
                     onChange={(event)=>setUser({...user , name: event.target.value})} />
                    
                    <input type="email" placeholder="Enter Your Email"
                    onChange={(event)=>setUser({...user , email: event.target.value})}/>
                    
                    <input type="password" placeholder="Enter Your passwsord"
                    onChange= {(event)=>setUser({...user, password: event.target.value})} />
                    
                    <input type="password" placeholder="Confirm your password"
                    onChange= {(event)=>setUser({...user, confirmPassword: event.target.value})}/>
                    
                    <button type="submit">Submit</button>
                </form>
             </div>
    )
}
export default FormValidation;