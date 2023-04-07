import React, { useState } from 'react'
import About from '../pages/Login'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import Footer from './Footer'
import Contact from '../pages/Contact'
import "../App.css"


function Navbar() {
    const [page, setPage] = useState("About")
    const handleClick = (click) => {
        const {target} = click
        setPage (target.textContent)
    }
  return (
    <div>
        <nav>
            <div className="navWrapper">
                <ul className="navLinks">
               {page === "About" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>About</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>About</a></li>)}
                {page === "Projects" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Projects</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Projects</a></li>)}
                {page === "Contact" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Contact</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Contact</a></li>)}
                {page === "Resume" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Resume</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Resume</a></li>)}
                </ul>
            </div>
        </nav>
        {
            {
                "About":<About/>,
                "Projects":<Projects/>,
                "Resume":<Resume/>,
                "Contact":<Contact/>
            }
            [page]
        }
        <Footer/>
    </div>
  )
}

export default Navbar
