import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className='text-center text-lg-start bg-light text-muted'>
    <div className="text-center p-4 text-dark">
    © 2021 Copyright:
    <Link className=" footer-text text-reset fw-bold" to="/"> MovieSup.com</Link>
    </div>
    </footer>
  )
}

export default Footer