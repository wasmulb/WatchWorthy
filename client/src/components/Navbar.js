import React, { useState } from 'react'
import Login from '../pages/Login'
import AllLists from '../pages/AllLists'
import MyLists from '../pages/MyLists'
import Signup from '../pages/Signup'

import "../App.css"

function Navbar() {
    const [page, setPage] = useState("Login")
    const handleClick = (click) => {
        setPage (click)
    }
  return (
    <div>
        <nav>
            <div className="navWrapper">
                <ul className="navLinks">
                {page === "Login" ? (<li className="nav-item active"><a className="nav-link">Login</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={ () => {handleClick("Login")}}>Login</a></li>)}
                {page === "Signup" ? (<li className="nav-item active"><a className="nav-link">Signup</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={ () => {handleClick("Signup")}}>Signup</a></li>)}
                {page === "MyLists" ? (<li className="nav-item active"><a className="nav-link">My Lists</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={ () => {handleClick("MyLists")}}>My Lists</a></li>)}
                {page === "AllLists" ? (<li className="nav-item active"><a className="nav-link">All Lists</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={ () => {handleClick("AllLists")}}>All Lists</a></li>)}
               
               </ul>
            </div>
        </nav>

        {page === "Login" && <Login/>},
        {page === "Signup" && <Signup/>},
        {page === "AllLists" && <AllLists/>},
        {page === "MyLists" && <MyLists/>},
    </div>
  )
}

export default Navbar
