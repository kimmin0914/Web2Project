import React from "react";
import Book from "./Book";

function Library() {
    return(
        <div>
            <Book name="처음 만난 Java" numOfPage={200}/>
            <Book name="난생 처음 자바" numOfPage={100}/>
            <Book name="처음 보는 React" numOfPage={300}/>
        </div>
    );
}

export default Library;