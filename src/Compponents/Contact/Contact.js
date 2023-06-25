import React from 'react'
import './Contact.css'
import ContactBox from './ContactBox'

export default function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-title">
                        <p>تماس با ما</p>
                        <h2>با ما تماس بگیرید</h2>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>

                    </div>
                    <div className="contact-bottom">
                        <div className="contact-bottom-right">
                            <ContactBox boxIcon={'bx bxs-color'} boxTitle={'مکان:'} boxDesc={'تهران، آزادی'}></ContactBox>
                            <ContactBox boxIcon={'bx bxs-hard-hat'} boxTitle={'ایمیل:'} boxDesc={'info@example.com'}></ContactBox>
                            <ContactBox boxIcon={'bx bxs-circle-three-quarter'} boxTitle={'شماره تماس:'} boxDesc={'1234567890'}></ContactBox>
                        </div>
                        <div className="contact-bottom-left">
                            <form action="#" className='contact-form'>
                                <input className='input name' type="text" placeholder='نام' />
                                <input className='input email' type="email" placeholder='ایمیل' />
                                <input className='input subject' type="text" placeholder='عنوان' />
                                <textarea className='input text-area' placeholder='پیام' name="" id="" cols="30" rows="5"></textarea>
                            </form>
                            <button>ارسال پیام</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
