import React, { useState } from 'react';
import DistanceInput from './DistanceInput';
import './DistanceConverter.css';

function toKilometers(mile) {
    return mile * 1.609344;
}

function toMiles(km) {
    return km / 1.609344;
}

function tryConvert(distance, convert) {
    if (distance.trim() === "") {
        return "";
    }

    const input = Number(distance);

    if (!Number.isFinite(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}

function DistanceConverter() {
    const [distance, setDistance] = useState("");
    const [unit, setUnit] = useState("km");

    const handleKilometerChange = (value) => {
        setDistance(value);
        setUnit("km");
    };

    const handleMileChange = (value) => {
        setDistance(value);
        setUnit("mile");
    };

    const kilometers =
        unit === "mile"
            ? tryConvert(distance, toKilometers)
            : distance;

    const miles =
        unit === "km"
            ? tryConvert(distance, toMiles)
            : distance;

    return (
        <div className="distance-page">
            <main className="distance-card">
                <span className="distance-badge">
                    실시간 단위 변환
                </span>

                <h1 className="distance-title">
                    거리 단위 변환기
                </h1>

                <p className="distance-description">
                    킬로미터 또는 마일을 입력해 보세요.
                    <br />
                    반대쪽 단위로 자동 계산됩니다.
                </p>

                <DistanceInput
                    unit="km"
                    distance={kilometers}
                    onDistanceChange={handleKilometerChange}
                />

                <div
                    className="distance-divider"
                    aria-hidden="true"
                >
                    <span className="distance-arrow">
                        ⇅
                    </span>
                </div>

                <DistanceInput
                    unit="mile"
                    distance={miles}
                    onDistanceChange={handleMileChange}
                />

                <div className="distance-info">
                    <span className="distance-info-label">
                        변환 기준
                    </span>

                    <span className="distance-info-value">
                        1마일 = 1.609344킬로미터
                    </span>
                </div>

                <p className="distance-note">
                    변환 결과는 소수점 셋째 자리까지 반올림됩니다.
                </p>
            </main>
        </div>
    );
}

export default DistanceConverter;