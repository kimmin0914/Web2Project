import React from "react";
import Avartar from "./Avartar";
import "./UserInfo.css"

function UserInfo(props){
    return(
        <div className="user-info-wrapper">
            <Avartar user={props.user}/>
            <div className="user-info-name">
                {props.user.name}
            </div>
        </div>
    );
}

export default UserInfo;