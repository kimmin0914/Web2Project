import React from 'react';

const unitNames = {
    km: "킬로미터",
    mile: "마일"
};

function DistanceInput(props) {
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    };

    const inputId = `distance-${props.unit}`;

    return (
        <div className="distance-input">
            <label
                className="distance-label"
                htmlFor={inputId}
            >
                {unitNames[props.unit]}
            </label>

            <div className="distance-input-row">
                <input
                    id={inputId}
                    className="distance-value"
                    type="text"
                    inputMode="decimal"
                    value={props.distance}
                    onChange={handleChange}
                    placeholder="거리를 입력하세요"
                    autoComplete="off"
                />

                <span className="distance-unit">
                    {props.unit === "km" ? "km" : "mi"}
                </span>
            </div>
        </div>
    );
}

export default DistanceInput;