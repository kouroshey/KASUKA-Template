import './Nav.css'

export default function Nav() {
    return (
        <div className="nav-parent">
            <div className="nav-content">

                <div className="nav-logo-parent">
                    <div id="nav-logo"><img src="img/logos/logo.png" alt="" /></div>
                    <h1>KASUKA</h1>
                </div>

                <ul>
                    <li><a href="#">خانه</a></li>
                    <li><a href="#">درباره‌ی ما</a></li>
                    <li><a href="#">خدمات</a></li>
                    <li><a href="#">نمونه کار ها</a></li>
                    <li><a href="#">تیم</a></li>
                    <li><a href="#">لیست کشویی</a></li>
                    <li><a href="#">تماس با ما</a></li>
                </ul>

                <button>شروع</button>

            </div>
        </div>
    )
}