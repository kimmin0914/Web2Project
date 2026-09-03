import React from "react";
import "./Clock.css";

function Clock() {
    return (
        <div className="clock-wrapper">
            <div className="clock-card">
                <span className="dept-tag">DEPARTMENT OF AI SOFTWARE</span>
                <h1 className="dept-title">인공지능소프트웨어과</h1>
                <div className="divider"></div>
                <div className="time-section">
                    <span className="time-label">LOCAL TIME</span>
                    <h2 className="time-display">{new Date().toLocaleTimeString()}</h2>
                </div>
            </div>
        </div>
    );
}

export default Clock;