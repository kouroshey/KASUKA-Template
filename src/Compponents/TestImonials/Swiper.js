import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";
import SwiperContent from "./SwiperContent";
// import required modules
import { Pagination } from "swiper";

export default function App() {
    const [users, setUsers] = useState([
        { name: 'ساول گودمن', subName: 'مدیر عامل', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: './img/members/test1.jpg' },
        { name: 'سارا ویلسون', subName: 'طراح', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: './img/members/test2.jpg' },
        { name: 'ینا کارلیس', subName: 'صاحب فروشگاه', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: './img/members/test3.jpg' },
        { name: 'مت براندون', subName: 'فریلنسر', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: './img/members/test4.jpg' },
        { name: 'جان لارسون', subName: 'کارآفرین', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: './img/members/test5.jpg' }
    ])
    return (
        <>
            <div className="swiper-container">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {users.map(user => (
                        <SwiperSlide>{<SwiperContent {...user} />}</SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
