import "./Portfolio.css"
import React, { useState, useEffect } from 'react';
import SlideShow from "./SlideShow";


export default function Portfolio() {
    const [images, setImages] = useState(
            ['img/portfolio/banner-1.jpg',
            'img/portfolio/banner-2.jpg',
            'img/portfolio/banner-3.jpg',
            'img/portfolio/portfolio-4.jpg']
    )
    return (
        <>
            <section className="portfolio">
                <div className="portfolio-container">
                    <div className="portfolio-content">
                        <div className="portfolio-title">
                            <p>نمونه کار‌ها</p>
                            <h2>نمونه‌کار های ما را بررسی کنید</h2>
                        </div>
                        <div className="portfolio-slider">
                            <SlideShow></SlideShow>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}