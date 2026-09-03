import React from "react";
import "./Book.css";

function Book(props) {
    return (
        <div className="book-card">
            <img
                src={props.imgUrl}
                alt={props.name}
                className="book-cover"
                referrerPolicy="no-referrer"
            />
            <h1>{props.name}</h1>
            <h2>총 {props.numOfPage} 페이지</h2>
        </div>
    );
}

export default Book;