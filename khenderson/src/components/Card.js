import React from "react";
import "../App.css";


//need to add href, image, title, text

function Card(props) {
    return (
        <div className="card" style={{ width: "20px" }}>
            <a href={props.hrefDeployed} target="_blank"><img className="card-img-top thumb" id="weaImg" src={props.imag} alt="Card image" style={{ width: "100%"}} /></a>
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
                <a href={props.hrefGit} target="_blank" className="card-link">Github Repo</a>
            </div>
        </div>
    );

}

export default Card;