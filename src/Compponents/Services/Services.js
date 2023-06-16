import './Services.css'
import ServicesBox from './ServicesBox.js'

export default function Services() {


    return (

        <section className="services">
            <div className="services-container">
                <div className="services-content">
                    <div className="services-title">
                        <p>خدمات</p>
                        <h2>خدمات ما را بررسی کنید</h2>
                    </div>
                    <div className="services-boxes">
                        <ServicesBox boxIcon={'bx bxs-color'} boxTitle={'جنگ های پیاپی'} boxDesc={'کسی که چرایی زندگی خود را پیدا کرده باشد با هر چگونگی ای خواهد ساخت'}></ServicesBox>
                        <ServicesBox boxIcon={'bx bxs-hard-hat'} boxTitle={'چرا اینگونه شد'} boxDesc={'به راستی که خرد ترین افراد دارای یخچال های بزرگ پهناور'}></ServicesBox>
                        <ServicesBox boxIcon={'bx bxs-circle-three-quarter'} boxTitle={'انسان های بیگناه'} boxDesc={'مغازه‌ای دو نبش جنب بازار رضا بیشترین درآمد را صرف تقسیمات کشوری'}></ServicesBox>
                        <ServicesBox boxIcon={'bx bx-qr-scan'} boxTitle={'او هیچ همتایی ندارد'} boxDesc={'چرا فکر میکنید برای خرید پنیر باید بدنی تنومند داشت خیلی از افراد بی شرمانه میروند به سوی حق'}></ServicesBox>
                        <ServicesBox boxIcon={'bx bxl-tailwind-css'} boxTitle={'با خدایان خود'} boxDesc={'متاورس را میتوان بزرگترین فروشگاه زنجیره‌ای فرش با تخفیف باورنکردنی بیشترین سود در لحظه'}></ServicesBox>
                        <ServicesBox boxIcon={'bx bxs-devices'} boxTitle={'میزهای تمام چوب'} boxDesc={'باز شب شد و باز حیران گشته ایم گرچه میتوان این گرانی را دور زد تحریم ها روز به روز کاهش می‌یابند'}></ServicesBox>
                    </div>
                </div>
            </div>
        </section>


    )
}