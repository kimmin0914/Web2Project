import React from "react";
import Book from "./Book";

function Library() {
    return (
        <div className="book-container">
            <Book
                name="처음 만난 파이썬"
                numOfPage={300}
                imgUrl="https://image.yes24.com/goods/38097960/XL"
            />
            <Book
                name="처음 만난 AWS"
                numOfPage={400}
                imgUrl="https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2FB9493989392_l.jpg&w=512&q=100"
            />
            <Book
                name="처음 만난 React"
                numOfPage={500}
                imgUrl="https://image.yes24.com/goods/172506733/XL"
            />
            <Book
                name="처음 만난 자바스크립트"
                numOfPage={250}
                imgUrl="https://image.yes24.com/momo/TopCate1076/MidCate010/107597186.jpg"
            />
            <Book
                name="처음 만난 HTML/CSS"
                numOfPage={180}
                imgUrl="https://image.aladin.co.kr/product/12517/98/cover500/k402532166_1.jpg"
            />
        </div>
    );
}

export default Library;