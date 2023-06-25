import React from 'react'
import './ContactBox.css'


export default function ContactBox({ boxIcon, boxTitle, boxDesc }) {
    return (
        <>
            <div className="contact-box-container">
                <div className="contact-box-content">
                    <div className="contact-icon-bg">
                        <i className={boxIcon}></i>
                    </div>
                    <div className="contact-text">
                        <h3>{boxTitle}</h3>
                        <p>{boxDesc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <div className="services-icon-bg">
    <i className={boxIcon}></i>
</div> */}

