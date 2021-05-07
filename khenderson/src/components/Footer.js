import React from "react";
import "../App.css";

function Footer() {
    return (

            <footer className="footer text-center" style={{ backgroundColor: "#04174f", height: "100px" }}>
                <div className="container mx-auto">
                    <span className="text-white">
                        
                            <a href="https://www.facebook.com/kelly.henderson.3975/"><i class="fa fa-facebook-official"
                                style={{fontSize:"36px", color:"white", paddingLeft: "0.5em"}}> </i></a>

                            <a href="http://www.linkedin.com/in/kelly-henderson-9b353016a"><i class="fa fa-linkedin"
                                style={{fontSize:"36px", color:"white", paddingLeft: "0.5em"}}> </i></a>

                            <a href="https://github.com/khendersonPC"><i class="fa fa-github"
                                style={{fontSize:"36px",color:"white", paddingLeft: "0.5em"}}> </i></a>
                        
                    </span>
                </div>
            </footer>
        
      
    );
                            
}
                            
export default Footer;
