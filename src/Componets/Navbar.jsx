import React from 'react'
import "../CSS_files/navbar.css"
import '../Common-files/common.css'
import logo from '../Images/cred-logo.png'
const Navbar = () => {
  return (
    <>
    <div className='nav-bar flex '>
    <div className="leftside">
            <img src={logo} alt="logo" />
    </div>
    <div className="rightside flex">
            <ul className='flex center'>
              <li><a href="#">credit score check</a></li>
              <li><a href="#">CRED pay</a></li>
            </ul>
    </div>
      
      </div>
    </>
  )
}

export default Navbar