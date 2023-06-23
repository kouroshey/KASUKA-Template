import './SwiperContent.css'


export default function SwiperContent({img , name , subName, text}) {
    return (
        <div className="swiper-content-container">
            <div className="swiper-content-content">
                <div className="swiper-content-top">
                    <div className="swiper-top-img">
                        <img src={img} alt="" srcset="" />
                    </div>
                    <div className="swiper-top-text">
                        <span>{name}</span>
                        <p>{subName}</p>
                    </div>
                </div>
                <div className="swiper-content-btm">
                    <p><i class='bx bx-paragraph'></i>{text}<i class='bx bx-paragraph'></i></p>
                </div>
            </div>
        </div>
    )
}