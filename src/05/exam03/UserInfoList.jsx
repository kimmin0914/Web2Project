import React from "react";
import UserInfo from "./UserInfo";
import "./UserInfoList.css"


const user = [
    {
        name: "Jang Wonyoung",
        avartaUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
        comment: "Positivbe mindset, lucky vibe~"
    },
    {
        name: "Ahn Yujin",
        avartaUrl: "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801864_1280.png",
        comment: "I think likes me. ^^"
    },
    {
        name: "Park Liz",
        avartaUrl: "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801872_1280.png",
        comment: "Sleeping is the best ~~~~~~~"
    }
];

function UserInfoList() {
    const currentDate = new Date();
    // ... (생략)
    return(
        <div className="list-container">
            {
                user.map((user, index) => {
                    return(
                        <div key={index} className="comment-card">
                            <UserInfo user={user}/>
                            <div className="comment-text">
                                {user.comment}
                            </div>
                            <div className="comment-date">
                                {currentDate.toDateString()}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default UserInfoList