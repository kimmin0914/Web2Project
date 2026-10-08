import React, { useState, useEffect } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate의 역할을 동시에 수행
    useEffect(() => {
        // 브라우저 탭의 제목(Title)을 변경
        document.title = `총 ${count}번 클릭했습니다.`;
    });

    return (
        <div style={{ padding: 16 }}>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

export default Counter;