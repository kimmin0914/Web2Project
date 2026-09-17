import React from "react";
import "./Avartar.css"

function Avartar(props){
    return(
        <img className={"avatar"}
            src={props.user.avartarUrl}
        />
    );
}


export default Avartar;