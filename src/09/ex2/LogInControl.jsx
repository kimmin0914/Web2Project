import React, { useState } from "react";
import LogOutButton from "./LogOutButton";
import Greeting from "../ex1/Greeting";
import LogInButton from "./LogInButton";
import "./LogInControl.css";

function LogInControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    };

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    };

    let button;

    if (isLoggedIn) {
        button = <LogOutButton onClick={logOutClickListener} />;
    } else {
        button = <LogInButton onClick={logInClickListener} />;
    }

    return (
        <main className="login-page">
            <div className="login-wrap">
                <p className="login-kicker">A SPACE FOR YOU</p>

                <section
                    className={`login-card ${
                        isLoggedIn ? "is-logged-in" : ""
                    }`}
                    aria-labelledby="login-greeting"
                >
                    <div className="login-top">
                        <span className="login-mark" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M14 4h5v16h-5M4 12h11M11 8l4 4-4 4" />
                            </svg>
                        </span>

                        <span className="login-status" role="status">
                            <span className="login-dot" />
                            {isLoggedIn ? "ONLINE" : "OFFLINE"}
                        </span>
                    </div>

                    <p className="login-eyebrow">
                        {isLoggedIn ? "WELCOME BACK" : "HELLO, STRANGER"}
                    </p>

                    <div className="login-greeting" id="login-greeting">
                        <Greeting isLoggedIn={isLoggedIn} />
                    </div>

                    <p className="login-description">
                        {isLoggedIn
                            ? "당신의 공간이 준비됐어요. 오늘도 좋은 하루 보내세요."
                            : "잠깐의 클릭, 새로운 시작. 당신만의 공간으로 들어오세요."}
                    </p>

                    <div className="login-actions">{button}</div>

                    <p className="login-meta">
                        {isLoggedIn
                            ? "다시 만나서 반가워요"
                            : "새로운 시작은 여기에서"}
                    </p>
                </section>

                <footer className="login-footer">
                    <span>YOUR SPACE, YOUR PACE.</span>
                    <span>01 / ACCESS</span>
                </footer>
            </div>
        </main>
    );
}

export default LogInControl;