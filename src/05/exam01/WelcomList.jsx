import React from "react";
import Welcome from "./Welcome";

function WelcomeList(){
    return(
        <div>
            <Welcome name="김인공"/><br/>
            <Welcome name="박폴리"/><br/>
            <Welcome name="이정수"/><br/>
        </div>
    );
}

export default WelcomeList;