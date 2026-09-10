import React from "react";
import "./Welcome.css";

function Welcome(props){
    return(
        <div className="welcome-container">

            <h1 className="welcome-text">
                안녕하세요,
                <span className="highlight">{props.name}</span>님!
            </h1>

        </div>
    );
}

export default Welcome;