import React, { useState } from 'react'
import Auth from '../utils/auth'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import "../App.css"

function Navbar() {
  return (
    <div>
        <nav>
            <div className="navWrapper">
                <ul className="navLinks">
                {Auth.loggedIn() ? (
                  <>                
                <li className="nav-item active"><Link to='/all-lists' className="navLinks">All Lists</Link></li>
                <li className="nav-item active"><Link to='/my-lists' className="navLinks">My Lists</Link></li>
                <li className="nav-item active" onClick={Auth.logout} >Logout</li>
                  </>
                ) : (
                  <>
                  <li className="nav-item active"><Link to='/' className="navLinks">Login</Link></li>
                <li className="nav-item active"><Link to='/signup' className="navLinks">Signup</Link></li>
                  </>
                )}
               </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
