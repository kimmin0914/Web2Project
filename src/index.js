import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import TodoListApp from "./01/TodoListApp";
import reportWebVitals from './reportWebVitals';
import Toolbar from "./09/finalEX/Toolbar";
import LandingPage from "./09/finalEX/LandingPage";
// import LogInControl from "./09/ex2/LogInControl";
// import Mailbox from "./09/ex3/Mailbox";
// import MainPage from "./09/ex4/MainPage";
// import TextInputWithFocusButton from "./07/02/TextInputWithFocusButton";
// import Library from "./03/Library";
// import Library from "./03/enhanced_css/Library";
// import "./03/enhanced_css/Book.css"
// import Clock from "./04/Clock";
// import ConfirmDialog from "./04/ConfirmDialog";
// import Welcome from "./05/Welcome";
// import WelcomeList from "./05/exam01/WelcomList";
// import BookList from "./05/exam02/BookList";
// import UserInfoList from "./05/exam03/UserInfoList";
// import NotificationList from "./06/NotificationList";
// import Counter from "./07/01/Counter";
// import TextInputWithFocusButton from "./07/02/TextInputWithFocusButton"
// import Accommodate from "./07/Accommodate";
// import Toggle from "./08/Toggle";
// import ConfirmButton from "./08/ConfirmButton";
// import ConfirmButton2 from "./08/ConfirmButton2";
// import MessageSender from "./08/MessageSender";
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=> {
    root.render(
        <React.StrictMode>
            <LandingPage/>
        </React.StrictMode>
    )}, 1000
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();