import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <footer style={{background:"#04174f", height: "100px"}} class="footer text-center">
        <div class='social-icons' class="container mx-auto">
        <br/>
            <Link
              class='social-icon-link github'
              to={{pathname: 'https://github.com/khendersonPC'}}
              target='_blank'
              aria-label='github'
            >
              <i class="fa fa-github" style={{fontSize:"36px", color:"white", paddingLeft: "0.5em"}}/>
            </Link>
            <Link
              class='social-icon-link drive'
              to={{pathname: 'https://www.facebook.com/kelly.henderson.3975/'}}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook-official'  style={{fontSize:"36px", color:"white", paddingLeft: "0.5em"}}/>
            </Link>
            <Link
              class='social-icon-link linkedin'
              to={{pathname: 'http://www.linkedin.com/in/kelly-henderson-9b353016a'}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class="fa fa-linkedin"style={{fontSize:"36px", color:"white", paddingLeft: "0.5em"}} />
            </Link>
          </div>

       
            </footer>
    );
                            
}


                            
export default Footer;
