import { UserContext } from "../usercontext"
import { useContext, useState } from "react"
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
interface Props{
  jwtToken:String,
  setJwtToken(cookies:string):void
}

interface ItemProps{
  feedback:String,
  subject:String,
  createAt:String
}

const Home = ({jwtToken,setJwtToken}:Props) => {
  const [cookies] = useCookies(['jwtcookie']);
  const [useremail]=useContext<any>(UserContext)
  const [userFeedbacks,setUserfeedbacks]=useState([])
  useEffect(()=>{
    setJwtToken(cookies.jwtcookie)
    console.log(cookies.jwtcookie)
  if(jwtToken){
   axios.get("https://feedbackapp-5ehr.onrender.com/feedback/",{withCredentials:true,params:{username:useremail}})
   .then((response)=>setUserfeedbacks(response.data.allFeedbacks))
   .catch((error)=>console.log(error))
  } else{
    axios.get("https://feedbackapp-5ehr.onrender.com/all",{withCredentials:true})
    .then((response)=>setUserfeedbacks(response.data.allFeedbacks))
    .catch((error)=>console.log(error))
  }
  
  },[cookies,jwtToken])
  

  return (
    <div>
    {userFeedbacks.map((item:ItemProps,index)=>(
      
      <div key={index} className="feed-component">
        <h2>{item.subject}</h2>
        <p>{item.feedback}</p>
        <div>Posted on : {item.createAt.slice(0,10)}<span> {item.createAt.slice(11,19)} IST</span></div>
      </div>
      
    ))}
    </div>
  )
}

export default Home