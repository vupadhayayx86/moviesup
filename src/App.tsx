import Navbar from "./components/Navbar";
import {useState} from 'react'

import {Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { UserContext } from "./usercontext";
function App(){
  const [jwtToken,setJwtToken]=useState<any>()
  const [useremail,setUseremail]=useState("")
  return(
    <>
    <UserContext.Provider value={[useremail,setUseremail]} >
    <Navbar  jwtToken={jwtToken}/>
    <div className="container">
    <Routes>
    <Route path="/" element={<Home  jwtToken={jwtToken} setJwtToken={setJwtToken}/>} />
    <Route path="/home" element={<Home jwtToken={jwtToken} setJwtToken={setJwtToken} />} />
    <Route path="/feedback" element={jwtToken? <Feedback /> : <Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    <Footer />
    </UserContext.Provider>
   
    </>
    
  )
}

export default App;