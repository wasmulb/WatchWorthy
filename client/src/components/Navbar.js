import React, { useState } from 'react'
import Login from '../pages/Login'
import Footer from './Footer'

import "../App.css"

function Navbar() {
    const [page, setPage] = useState("Login")
    const handleClick = (click) => {
        const {target} = click
        setPage (target.textContent)
    }
  return (
    <div>
        <nav>
            <div className="navWrapper">
                <ul className="navLinks">
                {page === "Login" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Login</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Login</a></li>)}
               </ul>
            </div>
        </nav>
        {
            {
                "Login":<Login/>,
            }
            [page]
        }
        <Footer/>
    </div>
  )
}

export default Navbar
