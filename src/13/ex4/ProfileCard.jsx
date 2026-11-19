
import React from "react";
import Card from "./Card";
import "./Card.css";

function ProfileCard(props) {

    const cards = [
        {
            title: "Inje Lee",
            description: "안녕하세요, 소프트입니다.",
            price: "저는 리액트를 사용해서 개발하고 있습니다.",
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600",
            backgroundColor: "#4ea04e"
        },
        {
            title: "중구의 집",
            description: "부산광역시",
            price: "₩590,000",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600"
        },
        {
            title: "해운대구의 아파트",
            description: "부산광역시",
            price: "₩900,000",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600"
        },
        {
            title: "수영구의 집",
            description: "부산광역시",
            price: "₩1,110,000",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600"
        },
        {
            title: "동구의 집",
            description: "부산광역시",
            price: "₩798,000",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"
        },
        {
            title: "부산진구의 집",
            description: "부산광역시",
            price: "₩404,000",
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600"
        },
        {
            title: "광안리 아파트",
            description: "부산광역시",
            price: "₩445,000",
            image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600"
        },
        {
            title: "제주시의 집",
            description: "제주특별자치도",
            price: "₩350,000",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
        },
        {
            title: "서귀포 펜션",
            description: "제주특별자치도",
            price: "₩420,000",
            image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600"
        },
        {
            title: "강릉 바다 숙소",
            description: "강원특별자치도",
            price: "₩310,000",
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600"
        },
        {
            title: "속초의 아파트",
            description: "강원특별자치도",
            price: "₩280,000",
            image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600"
        },
        {
            title: "여수 오션뷰",
            description: "전라남도",
            price: "₩390,000",
            image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600"
        },
        {
            title: "경주의 한옥",
            description: "경상북도",
            price: "₩250,000",
            image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?w=600"
        },
        {
            title: "서울의 아파트",
            description: "서울특별시",
            price: "₩470,000",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600"
        }
    ];

    return (
        <div className="profile-container">
            <h2>추천 카드 목록</h2>

            <div className="card-scroll">
                <div className="card-list">

                    {cards.map((item, index) => (
                        <div className="house-card" key={index}>

                            <div className="house-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </div>

                            <Card
                                title={item.title}
                                backgroundColor={item.backgroundColor}
                            >
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </Card>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
