import React from "react";
import "../App.css";
import Card from "./Card";
import passImg from "./Images/password.png";
import quizImg from "./Images/quiz.png";
import plannerImg from "./Images/dayPlanner.png";
import weatherImg from "./Images/weather.png";
import invImg from "./Images/inventory.png"; 
import jabsImg from "./Images/jabs.png"; 
import me from "./Images/IMG_300.jpg"; 

function Main() {
    return(
        <div className="main" >
            <div>
                <div className="container-fluid pr-7 ">
                    <br />
                    <h1 style={{ textAlign: "center" }}>About</h1>
                    <hr style={{ width: "40%", marginLeft: "auto", marginRight: "auto", height: "10px" }} />
                    <br /><br />
                    <div className="row py-6">
                        <div className="col-sm-4" style={{ paddingLeft: "3em" }}>
                            <img src={me} className="img-fluid" alt="author" />
                        </div>

                        <div className="col-sm-6">
                            <br /><br />
                            Currently, I teach computer science (Java, Python) to rowdy groups of teenagers and have been
                            doing so for 15 years. As
                            such,
                            I enjoy a challenge. I am a pro-active problem-solver who likes to use time effectively and
                            efficiently.
                                    <br /><br />
                            I am passionate about getting more girls into computer science classes and thus, more women into
                            the
                    field. I believe in practicing what I preach. <span style={{ color: "#2C4373" }}><strong>I am ready to
                            make the jump from teaching to industry.</strong></span><br /><br />

                            I appreciate perfectly groomed mountain trails, workouts that leave my body feeling like jelly
                            and
                    getting to know cities all over the world.<br /><br />
                            <span style={{ fontSize: "x-large", fontFamily: "Lucida Sans" }}>I
                        constantly strive to learn more and do better.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio" style={{ marginTop: "8em", backgroundColor: "#F2F7F7", paddingTop: "5em", paddingBottom: "5em" }}>
                <div className="container">
                    <h1 style={{ textAlign: "center" }}>Portfolio</h1>
                    <hr style={{ width: "40%", marginLeft: "auto", marginRight: "auto", height: "10px" }} />
                    <br /> <br />

                    <div className="card-group">
                        <Card hrefDeployed= "https://khendersonpc.github.io/passwordGen/" imag={passImg} title="Password Generator" text="I wanted to learn how JS and html interact, as well as tackle the fun logic element to this project." hrefGit= "https://github.com/khendersonPC/passwordGen"/>

                        <Card hrefDeployed= "https://khendersonpc.github.io/programmingQuiz/" imag={quizImg} title="Interactive Quiz" text="To program this quiz site I learned how to create objects, store them to an array and use JSON." hrefGit= "https://github.com/khendersonPC/programmingQuiz"/>
                        
                        <Card hrefDeployed= "https://khendersonpc.github.io/dayPlanner/" imag={plannerImg} title="Day Planner" text="Daily Planner utilizes JS to dynamically write the HTML/CSS. Local storage is also utilized." hrefGit= "https://github.com/khendersonPC/dayPlanner"/>
                    </div>    
                    <div className="card-group">
                        <Card hrefDeployed= "https://khendersonpc.github.io/weatherApp/" imag={weatherImg} title="Weather App" text="The focus of this project was to use APIs and local storage. I also added my own images using Adobe Illustrator and animation. I wanted a calm and clean look." hrefGit="https://github.com/khendersonPC/weatherApp" />
                    
                        <Card hrefDeployed= "https://krcook1980.github.io/Inventory-Organization-Utility/" imag={invImg} title="Steel Inventory" text="This project was completed for a steel manufacturer who needed help organzing their steelyard. My role was to learn how to use the Google Maps API and create overlays." hrefGit= "https://github.com/krcook1980/Inventory-Organization-Utility"/>
                        
                        <Card hrefDeployed= " https://jab-effects.herokuapp.com/" imag={jabsImg} title="Jab Effects" text="Jab Effects is an online survey meant to collect and visualize data relating to the side effects of the different vaccines." hrefGit= "https://github.com/krcook1980/Jabs"/>
                        
                        
                    </div>
                          
                </div>
            </div>

            <div id="contact">
                <div className="container-fluid">
                    <br /><br />
                    <h1 style={{ textAlign: "center" }}>Contact</h1>
                    <hr style={{ width: "40%", marginLeft: "auto", marginRight: "auto", height: "10px" }} />
                    <br />
                    <h2 style={{ textAlign: "center" }}>Have a question or want to work together?</h2>
                    <div className="row">
                        <div className="col-sm-5 ">
                        </div>

                        <div className="col-sm-7 align-middle">
                            <div className="row">
                            </div>

                            <div className="row">
                                <form>
                                    <br /><br />
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <input type="text" className="form-control" id="exampleFormControlTextarea1" placeholder="Message" />
                                    </div>
                                </form>
                            </div>

                            <div className="row" style={{ textAlign: "center" }}>
                                <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#04174f" }}>Submit</button>
                            </div>
                        </div>

                        <div className="col-sm-4">
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
     
    );                                                                                                         
}

export default Main;