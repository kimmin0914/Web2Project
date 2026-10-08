import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import "./Accommodate.css";

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        console.log("===== useEffect 확인용 =====");
        console.log("useEffect 실행됨: 컴포넌트가 마운트될떄, 업데이트될때");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div className="card-container">
            <div className="card-header">
                <span className="status-pill">
                    <span className={`status-dot ${isFull ? "full" : "available"}`}></span>
                    {isFull ? "정원 초과" : "입장 가능"}
                </span>
                <span className="capacity-label">실시간 수용 인원</span>
            </div>

            <div className="count-section">
                <span className="count-number">{count}</span>
                <span className="count-max">/ {MAX_CAPACITY}명</span>
            </div>

            {/* 수용 인원 게이지 바 */}
            <div className="gauge-track">
                <div
                    className={`gauge-fill ${isFull ? "full" : ""}`}
                    style={{ width: `${(count / MAX_CAPACITY) * 100}%` }}
                />
            </div>

            <div className="button-group">
                <button
                    className="btn btn-enter"
                    onClick={increaseCount}
                    disabled={isFull}
                >
                    입장 +
                </button>
                <button
                    className="btn btn-leave"
                    onClick={decreaseCount}
                    disabled={count === 0}
                >
                    퇴장 -
                </button>
            </div>

            {isFull && (
                <div className="alert-banner">
                    ⚠️ 수용시설 정원이 가득 찼습니다.
                </div>
            )}
        </div>
    );
}

export default Accommodate;