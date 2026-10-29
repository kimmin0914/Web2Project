import React from "react";
import "./Mailbox.css";

function Mailbox(props) {
    const unreadMessages = 3;

    return (
        <main className="mailbox-page">
            <div className="mailbox-stack">
                <section
                    className="mailbox-letter"
                    aria-labelledby="mailbox-title"
                >
                    <div className="mailbox-topline">
                        <span>THE DAILY POST</span>
                        <span>SMALL WORDS. GOOD DAYS.</span>
                    </div>

                    <header className="mailbox-header">
                        <div className="mailbox-heading">
                            <p className="mailbox-eyebrow">
                                오늘의 당신에게 보내는 작은 소식
                            </p>

                            <h1 id="mailbox-title">
                                안녕하세요<span>!</span>
                            </h1>
                        </div>

                        <div className="mailbox-postage" aria-hidden="true">
                            <div className="mailbox-stamp">
                                <span>PRIORITY MAIL</span>

                                <svg viewBox="0 0 48 48" fill="none">
                                    <rect
                                        x="7"
                                        y="12"
                                        width="34"
                                        height="25"
                                        rx="1"
                                    />
                                    <path d="m8 14 16 12 16-12M8 36l12-13M40 36 28 23" />
                                </svg>

                                <span>A NOTE FOR YOU</span>
                            </div>

                            <div className="mailbox-postmark">
                                <span>
                                    HANDLE
                                    <br />
                                    WITH CARE
                                </span>
                            </div>
                        </div>
                    </header>

                    <div className="mailbox-address">
                        <span>TO.</span>
                        <span>조금은 설레는 오늘의 나</span>
                    </div>

                    <div className="mailbox-body">
                        <div className="mailbox-counter" aria-hidden="true">
                            <strong>
                                {String(unreadMessages).padStart(2, "0")}
                            </strong>

                            <span>
                                UNREAD
                                <br />
                                LETTERS
                            </span>
                        </div>

                        <div className="mailbox-message">
                            <p className="mailbox-message-label">
                                {unreadMessages > 0
                                    ? "YOU'VE GOT MAIL"
                                    : "ALL CAUGHT UP"}
                            </p>

                            {unreadMessages > 0 && (
                                <h2>
                                    현재 <span>{unreadMessages}개</span>의 읽지 않은
                                    <br />
                                    메시지가 있습니다.
                                </h2>
                            )}

                            <p className="mailbox-description">
                                {unreadMessages > 0
                                    ? "아직 펼쳐보지 않은 이야기가 당신을 기다리고 있어요."
                                    : "모든 소식을 확인했어요. 다음 이야기를 기다려 주세요."}
                            </p>
                        </div>
                    </div>

                    <footer className="mailbox-footer">
                        <div>
                            <p>TAKE YOUR TIME.</p>
                            <span>
                                좋은 소식은 천천히 읽어도 괜찮아요.
                            </span>
                        </div>

                        <div className="mailbox-barcode" aria-hidden="true" />
                    </footer>
                </section>
            </div>
        </main>
    );
}

export default Mailbox;