import './SlideShow.css'
import { useState, useEffect } from 'react'


export default function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [images, setImages] = useState(
        [
        'img/portfolio/slide-1.jpg',
        'img/portfolio/slide-2.png',
        'img/portfolio/slide-3.png',
        'img/portfolio/slide-4.png'
        ])
    
    const nextSlide = () => {
        if (currentSlide === images.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
            console.log(currentSlide);
            console.log(currentSlide + 1);

        }
        
    }

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(images.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
        console.log('prev');

    }

    return (

        <div className="slider-container">

            <div className="my-slider">

                {/* slides */}
                <div className="slide">
                    <img src={images[currentSlide]} alt="" />
                </div>
                {/*end of slides */}

                {/* arrows */}
                <i class='bx bx-chevron-left prev' onClick={prevSlide}></i>
                <i class='bx bx-chevron-right next' onClick={nextSlide} ></i>
                {/* end of arrows */}

                {/* dots */}
                <div className="dots-section">
                    <span className='dot dot-active'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
                {/* end of dots */}

            </div>

        </div>

    )
}