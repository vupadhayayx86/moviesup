import Navbar from "./components/Navbar";
import {Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App(){
  return(
    <>
    
    <Navbar />
    <div className="container">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/feedback" element={<Feedback />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App;