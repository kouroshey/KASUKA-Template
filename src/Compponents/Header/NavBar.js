import './NavBar.css'


export default function NavBar() {
    


    return (
        <>
            
            <div className="nav-container">
                <section className="nav-content">
                    <div className="nav-logo">
                        <div className='logo-box'><img src="./img/logos/logo.png" alt="" /></div>
                        <h2>KASUKA</h2>
                    </div>

                    <div className="nav-center">
                        <ul>
                            <li><a className='nav-list-item active' href="#">خانه</a></li>
                            <li><a className='nav-list-item' href="#">درباره‌ی ما</a></li>
                            <li><a className='nav-list-item' href="#">خدمات</a></li>
                            <li><a className='nav-list-item' href="#">نمونه کارها</a></li>
                            <li><a className='nav-list-item' href="#">تیم</a></li>
                            <li><a className='nav-list-item' href="#">لیست کشویی</a></li>
                            <li><a className='nav-list-item' href="#">تماس با ما</a></li>
                        </ul>
                    </div>
                    <button>شروع</button>
                </section>
            </div>
        </>    
    )
}