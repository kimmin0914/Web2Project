import React, { useState } from "react";
import "./Reservation.css";

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`아침 식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}명`);
    };

    return (
        <main className="reservation-page">
            <form className="reservation-card" onSubmit={handleSubmit}>
                <header className="reservation-header">
                    <div className="reservation-topline">
                        <span>STAY NOTE / RESERVATION</span>

                        <span
                            className="reservation-monogram"
                            aria-hidden="true"
                        >
                            R
                        </span>
                    </div>

                    <h2>
                        잠시 쉬어갈
                        <br />
                        당신을 위해.
                    </h2>

                    <p>머무는 동안의 작은 취향을 알려주세요.</p>
                </header>

                <div className="reservation-fields">
                    <label className="reservation-row">
                        <span className="reservation-field-text">
                            <strong>아침식사</strong>
                            <small>조식 포함 여부를 선택해 주세요.</small>
                        </span>

                        <span className="reservation-switch">
                            <input
                                type="checkbox"
                                checked={haveBreakfast}
                                onChange={(event) => {
                                    setHaveBreakfast(event.target.checked);
                                }}
                            />

                            <span
                                className="reservation-slider"
                                aria-hidden="true"
                            />
                        </span>
                    </label>

                    <label className="reservation-row">
                        <span className="reservation-field-text">
                            <strong>방문자 수</strong>
                            <small>함께하는 인원을 입력해 주세요.</small>
                        </span>

                        <span className="reservation-guest-field">
                            <input
                                type="number"
                                min="1"
                                required
                                value={numberOfGuest}
                                onChange={(event) => {
                                    setNumberOfGuest(event.target.value);
                                }}
                            />
                            <span aria-hidden="true">명</span>
                        </span>
                    </label>
                </div>

                <div className="reservation-summary">
                    <span>YOUR STAY</span>

                    <strong>
                        {haveBreakfast ? "조식 포함" : "조식 제외"}
                        <span aria-hidden="true"> · </span>
                        {numberOfGuest || "—"}명 방문
                    </strong>
                </div>

                <button className="reservation-submit" type="submit">
                    예약 내용 확인
                    <span aria-hidden="true">↗</span>
                </button>

                <footer className="reservation-footer">
                    <span>좋은 쉼의 시작.</span>
                    <span aria-hidden="true">✳</span>
                </footer>
            </form>
        </main>
    );
}

export default Reservation;