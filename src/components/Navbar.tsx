import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <Link to="/" className="navbar-brand">MovieSup</Link>
      <Link to="/home" className='nav-link'>Home</Link>
      <Link to="/login" className='nav-link'>Login</Link>
      <Link to="/signup" className='nav-link'>SignUp</Link>
      <Link to="/feedback" className='nav-link' style={{borderRight:'1px solid black',paddingRight:'20px'}}>Feedback</Link>
    </div>
    </>
  )
}

export default Navbar