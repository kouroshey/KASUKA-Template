import './Features.css'
import FeaturesBox from './FeaturesBox'

export default function Features() {

    return (
        <>

            <section className='features-section'>
                <div className="features-section-container">
                    <div className="feature-img"><img src="img/features.webp" alt="" /></div>
                    <div className="features-boxex">
                        <FeaturesBox title={'تبلیغ سختی است'} text={'نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند'} classIcon={'bx bx-chat'}></FeaturesBox>
                        <FeaturesBox title={'کدام یک از اینهاست'} text={'کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند'} classIcon={'bx bx-lock-alt'}></FeaturesBox>
                        <FeaturesBox title={'احتمالا کور شده است'} text={'یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند'} classIcon={'bx bx-briefcase-alt-2'}></FeaturesBox>
                        <FeaturesBox title={'با ما باشید تا رستگار شوید'} text={'آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند'} classIcon={'bx bx-extension'}></FeaturesBox>
                    </div>
                </div>
            </section>
        </>
    )
}