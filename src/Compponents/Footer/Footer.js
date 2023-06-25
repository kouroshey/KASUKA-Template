import React from 'react';
import './Footer.css'
// import FooterIccon from "./FooterIcon.js"
import { useState, useEffect } from 'react';
export default function Footer() {
    const [icons, setIcons] = useState([
        'bx bxl-linkedin',
        'bx bxl-facebook',
        'bx bxl-instagram',
        'bx bxl-twitter',
        'bx bxl-skype'
    ])
    return (
        <>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-row">
                        <div className="footer-right">
                            <div className="footer-logo">
                                <div className='footer-logo-box'><img src="./img/logos/logo.png" alt="" /></div>
                                <h2>KASUKA</h2>
                            </div>
                            <div className="footer-address">
                                <p>تهران خیابان آزادی</p>
                                <p>تلفن: 01234567895</p>
                                <p>ایمیل: info@example.com</p>
                            </div>
                            <div className="footer-icons">
                                {icons.map(icon => (
                                    <div className="footer-icon-bg">
                                        <i className={icon}></i>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="footer-list-right">
                            <h4>لینک‌های مفید</h4>
                            <ul>
                                <li><i className="bx bx-chevron-left"></i>خانه</li>
                                <li><i className="bx bx-chevron-left"></i>درباره‌ما</li>
                                <li><i className="bx bx-chevron-left"></i>خدمات</li>
                                <li><i className="bx bx-chevron-left"></i>شرایط استفاده از خدمات</li>
                                <li><i className="bx bx-chevron-left"></i>سیاست حفظ حریم خصوصی</li>
                            </ul>
                        </div>
                        <div className="footer-list-left">
                            <h4>خدمات ما</h4>
                            <ul>
                                <li><i className="bx bx-chevron-left"></i>طراحی وبسایت</li>
                                <li><i className="bx bx-chevron-left"></i>توسعه‌ وب</li>
                                <li><i className="bx bx-chevron-left"></i>مدیریت تولید</li>
                                <li><i className="bx bx-chevron-left"></i>بازاریابی</li>
                                <li><i className="bx bx-chevron-left"></i>طراحی گرافیک</li>
                            </ul>
                        </div>

                        <div className="footer-left">
                            <h4>خبرنامه ما</h4>
                            <p>با این حال هیچ یک از ما خبردار نخواهد بود که چه بلبشویی در راه است</p>
                            <form className="footer-form">
                                <input dir='ltr' className='email-input' type="email" />
                                <input className='submit-input' type="submit" value='دنبال کردن' />
                            </form>
                        </div>

                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>تمامی حقوق محفوظ است</p>
                    <span>طراحی شده توسط <span>KASUKA</span></span>
                </div>
            </div>
        </>
    )
}
