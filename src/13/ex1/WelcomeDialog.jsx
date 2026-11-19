import React from "react";
import FancyBorder from "./FancyBorder";
import "./WelcomeDialog.css";

function WelcomeDialog() {
    return (
        <div className="Dialog-wrapper">
            <FancyBorder color={"blue"}>
                <h1 className={"Dialog-title"}>
                    어서오세요
                </h1>
                <p className={"Dialog-message"}>
                    우리 사이트에 방문하신 것을 환영합니다!
                </p>
            </FancyBorder>
            <FancyBorder color={"blue"}>
                <h1 className={"Dialog-title"}>
                    반갑습니다
                </h1>
                <p className={"Dialog-message"}>
                    우리 사이트에 방문하신 것을 환영합니다!
                </p>
            </FancyBorder>
        </div>
    )
}

export default WelcomeDialog;