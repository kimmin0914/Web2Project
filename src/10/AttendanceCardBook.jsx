import React from "react";
import "./AttendanceCardBook.css";

const students = [
    {
        id: 1,
        name: "Inje",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Steve",
        grade: 2,
        major: "시각디자인",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 3,
        name: "Bill",
        grade: 1,
        major: "전기전자공학",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 4,
        name: "Jeff",
        grade: 4,
        major: "국어국문학",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    }
];

function AttendanceCardBook(props) {
    return (
        <main className="attendance-page">
            <section
                className="attendance-book"
                aria-labelledby="attendance-title"
            >
                <header className="attendance-header">
                    <div>
                        <p className="attendance-eyebrow">
                            THE CLASSROOM / STUDENT DIRECTORY
                        </p>

                        <h2 id="attendance-title">
                            학생 출석부<span>.</span>
                        </h2>

                        <p className="attendance-description">
                            함께 배우는 우리 반의 얼굴들
                        </p>
                    </div>

                    <div className="attendance-count">
                        <strong>
                            {String(students.length).padStart(2, "0")}
                        </strong>
                        <span>등록 학생</span>
                    </div>
                </header>

                <div className="attendance-section-label">
                    <span>우리 반 학생</span>
                    <span>CLASS MEMBERS</span>
                </div>

                <div className="attendance-grid">
                    {students.map(student => (
                        <article
                            className="attendance-card"
                            key={student.id}
                        >
                            <div className="attendance-card-top">
                                <span className="attendance-card-label">
                                    STUDENT CARD
                                </span>

                                <span className="attendance-grade">
                                    {student.grade}학년
                                </span>
                            </div>

                            <div className="attendance-profile">
                                <img
                                    className="attendance-avatar"
                                    src={student.avatar}
                                    alt={`${student.name} 프로필`}
                                    loading="lazy"
                                />

                                <div className="attendance-info">
                                    <h3>{student.name}</h3>
                                    <p>{student.major}</p>
                                </div>
                            </div>

                            <footer className="attendance-card-footer">
                                <span>
                                    No. {String(student.id).padStart(3, "0")}
                                </span>

                                <span
                                    className="attendance-card-mark"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </footer>
                        </article>
                    ))}
                </div>

                <footer className="attendance-footer">
                    <span>서로 다른 꿈, 함께하는 교실.</span>
                    <span>END OF DIRECTORY</span>
                </footer>
            </section>
        </main>
    );
}

export default AttendanceCardBook;