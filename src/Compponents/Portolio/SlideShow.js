import './SlideShow.css';
import { useState, useEffect } from 'react';
import slide1 from './slides/slide-1.jpg';
import slide2 from './slides/slide-2.png';
import slide3 from './slides/slide-3.png';
import slide4 from './slides/slide-4.png';


export default function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [slide1 , slide2 , slide3 , slide4]
    
    const nextSlide = () => {
        if (currentSlide === slides.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
        console.log(currentSlide);
        
    }

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(slides.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
        console.log(currentSlide);
    }

    return (

        <div className="slider-container">

            <div className="my-slider">

                {/* slides */}
                <div className="slide">
                    {slides.map((slide , index)=> (
                        <img src={slide} className={index === currentSlide ? "slide-img show" : "slide-img"} />
                        
                    ))}
                {/* arrows */}
                <i class='bx bx-chevron-left prev' onClick={prevSlide}></i>
                <i class='bx bx-chevron-right next' onClick={nextSlide} ></i>
                {/* end of arrows */}
                </div>
                {/*end of slides */}

            </div>

        </div>

    )
}