import './NavBar.css'
import { useState, useEffect } from 'react'


export default function NavBar() {

    const [isSticky, setSticky] = useState(null)
    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 100) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>

            <div className='sticky'>
                <section className="nav-content">
                    <div className="nav-logo">
                        <div className='logo-box'><img src="./img/logos/logo.png" alt="" /></div>
                        <h2>KASUKA</h2>
                    </div>

                    <div className="nav-center">
                        <ul className='nav-menu'>
                            <li><a className='nav-list-item active' href="#">خانه</a></li>
                            <li><a className='nav-list-item' href="#">درباره‌ی ما</a></li>
                            <li><a className='nav-list-item' href="#">خدمات</a></li>
                            <li><a className='nav-list-item' href="#">نمونه کارها</a></li>
                            <li><a className='nav-list-item' href="#">تیم</a></li>
                            <li>
                                <a className='nav-list-item' href="#">لیست کشویی<i class='bx bx-chevron-down' ></i></a>
                                <ul id='drop-down'>
                                    <li><a className='nav-list-item ' href="#">لیست کشویی</a></li>
                                    <li><a className='nav-list-item' href="#">لیست کشویی</a></li>
                                    <li>
                                        <a className='nav-list-item deep-drop-down-li' href="#">لیست کشویی عمیق<i class='bx bx-chevron-down' ></i></a>
                                        <ul id='deep-drop-down'>
                                            <li><a className='nav-list-item ' href="#">لیست کشویی عمیق</a></li>
                                            <li><a className='nav-list-item' href="#">لیست کشویی عمیق</a></li>
                                            <li><a className='nav-list-item' href="#">لیست کشویی عمیق</a></li>
                                            <li><a className='nav-list-item' href="#">لیست کشویی عمیق</a></li>
                                        </ul>
                                    </li>
                                    <li><a className='nav-list-item' href="#">لیست کشویی</a></li>
                                </ul>
                            </li>
                            <li><a className='nav-list-item' href="#">تماس با ما</a></li>
                        </ul>
                    </div>
                    <button>شروع</button>
                </section>
            </div>
        </>
    )
}