import React, { useState } from "react";
import "./FruitSelect.css";

function FruitSelect() {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("선택한 과일: " + value);
    };

    return (
        <main className="fruit-page">
            <form className="fruit-card" onSubmit={handleSubmit}>
                <p className="fruit-eyebrow">
                    THE LITTLE FRUIT SHOP
                </p>

                <div className="fruit-tray" aria-hidden="true">
                    <span>🍎</span>
                    <span>🍌</span>
                    <span>🍇</span>
                    <span>🍈</span>
                </div>

                <h2>
                    오늘은 어떤
                    <br />
                    과일이 좋아요?
                </h2>

                <p className="fruit-description">
                    좋아하는 과일 하나를 골라주세요.
                </p>

                <label className="fruit-label" htmlFor="fruit-choice">
                    과일을 선택하세요
                </label>

                <div className="fruit-select-wrap">
                    <select
                        id="fruit-choice"
                        value={value}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                            과일을 골라주세요
                        </option>
                        <option value="apple">사과</option>
                        <option value="banana">바나나</option>
                        <option value="grapes">포도</option>
                        <option value="melon">참외</option>
                    </select>
                </div>

                <button className="fruit-submit" type="submit">
                    선택 완료
                    <span aria-hidden="true">↗</span>
                </button>

                <p className="fruit-footer">
                    작은 선택, 상큼한 하루.
                </p>
            </form>
        </main>
    );
}

export default FruitSelect;