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
                
                style={{fontFamily:'Verdana'}}>
            
                About
                </Link>
            </li>
           
            <li className="nav-item">
                <Link to="portfolio" spy={true} smooth={true} className={location.pathname==="about.html#portfolio" ? "nav-link active" : "nav-link"} 
                style={{fontFamily:'Verdana'}}>
                Portfolio
                </Link> 
                    
            </li>

            <li className="nav-item">
                <Link to="contact" spy={true} smooth={true} className={location.pathname==="#contact" ? "nav-link active" : "nav-link"} 
                style={{fontFamily:'Verdana'}}>
                Contact
                </Link>    
            </li>
            
            <li className="nav-item">
            <a href={resume} target="_blank" rel="noopener noreferrer" download>
                Resume
            </a>
            </li>

            <li className="nav-item">
                <Link to="/interact" spy={true} smooth={true} className={location.pathname==="/interact" ? "nav-link active" : "nav-link"} 
                style={{fontFamily:'Verdana'}}>
                Interact
                </Link>    
            </li>
        </ul>
    </nav>

  );
}

export default NavBar;
