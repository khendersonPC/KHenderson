import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "../App.css";
import resume from '../files/resume.pdf';

function NavBar() {

  const location = useLocation();

  return (

    <nav className="navbar fixed-top navbar-light navbar-custom">

        <ul className="nav justify-content-end fixed">
            <li className="nav-item">
                <Link to="about" spy={true} smooth={true} className={location.pathname==="/about" ? "nav-link active" : "nav-link"} 
                
                style={{fontFamily:'Verdana', color:"white"}}>
            
                About
                </Link>
            </li>
           
            <li className="nav-item">
                <Link to="portfolio" spy={true} smooth={true} className={location.pathname==="about.html#portfolio" ? "nav-link active" : "nav-link"} 
                style={{fontFamily:'Verdana', color:"white"}}>
                Portfolio
                </Link> 
                    
            </li>

            <li className="nav-item">
                <Link to="contact" spy={true} smooth={true} className={location.pathname==="#contact" ? "nav-link active" : "nav-link"} 
                style={{fontFamily:'Verdana', color:"white"}}>
                Contact
                </Link>    
            </li>
            
            <li className="nav-item">
            <a href={resume} style={{fontFamily:'Verdana', color:"white"}} target="_blank" rel="noopener noreferrer" download>
                Resume
            </a>
            </li>
            {/* <Link to="google.com"  className={location.pathname==="google.com" ? "nav-link active" : "nav-link"} 
                style={{fontFamily:'Verdana', color:"white"}}>
                Interact
                </Link>     */}

            <li className="nav-item">
                <a href="https://khendersonpc.github.io/KHenderson/"  className={location.pathname==="https://khendersonpc.github.io/KHenderson/" ? "nav-link active" : "nav-link"} 
                style={{fontFamily:'Verdana', color:"white"}}>
                Interact
                </a>
            </li>
        </ul>
    </nav>

  );
}

export default NavBar;
