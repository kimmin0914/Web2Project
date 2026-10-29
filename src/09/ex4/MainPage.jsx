import React, { useState } from "react";
import WarningBanner from "./WarningBanner";
import "./Mainpage.css";

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const btnListener = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    };

    return (
        <main className="warning-page">
            <section className="warning-demo">
                <p className="warning-eyebrow">
                    WARNING / CONTROL PANEL
                </p>

                <h1 className="warning-title">
                    경고 표시 제어
                </h1>

                <div className="warning-stage">
                    <WarningBanner warning={showWarning} />

                    {!showWarning && (
                        <p className="warning-empty">
                            경고 배너가 숨겨져 있어요.
                        </p>
                    )}
                </div>

                <button
                    type="button"
                    className={`warning-toggle ${
                        showWarning ? "is-showing" : ""
                    }`}
                    onClick={btnListener}
                >
                    {showWarning ? "감추기" : "보이기"}
                </button>
            </section>
        </main>
    );
}

export default MainPage;