import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import { UserContext } from '../usercontext'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
interface Props{
  jwtToken:String,
}

const Navbar = ({jwtToken}:Props) => {
  const [useremail,setUseremail]=useContext<any>(UserContext)
  const [cookies, setCookie, removeCookie] = useCookies(['jwtcookie']);
  const navigate=useNavigate()
  const handleLogout=()=>{
    removeCookie('jwtcookie', { path: '/', domain: 'localhost' });
    navigate("/")
  }
  return (
    <>
    <div className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <Link to="/" className="navbar-brand">MovieSup</Link>
      <Link to="/home" className='nav-link'>Home</Link>

      {
        !jwtToken && <>
        <Link to="/login" className='nav-link'>Login</Link>
        <Link to="/signup" className='nav-link'>SignUp</Link>
        </> 
      }

      {
        jwtToken && <>
        <Link to="/feedback" className='nav-link' style={{borderRight:'1px solid black',paddingRight:'20px'}}>Feedback</Link>
        <div >
        <button className="btn btn-light logoutbtn" type='button' onClick={handleLogout}>Logout</button>
        <span className='username'>{useremail}</span>
        </div>
        </>
      }
    </div>
    
    </>
  )
}

export default Navbar