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
                <li className="nav-item active"><Link to='/allLists' className="nav-link">All Lists</Link></li>
                <li className="nav-item active"><Link to='/myLists' className="nav-link">My Lists</Link></li>
                <li onClick={Auth.logout}>Logout</li>
                  </>
                ) : (
                  <>
                  <li className="nav-item active"><Link to='/' className="nav-link">Login</Link></li>
                <li className="nav-item active"><Link to='/signup' className="nav-link">Signup</Link></li>
                  </>
                )}
               </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
