import './Counts.css'
import CountsComp from './CountsComp'
import { useState } from 'react'
export default function Counts() {
    const [boxDetails, setBoxDetails] = useState([
        {id: 1, icon: 'bx bx-shield-plus', text: "مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم." , number: 65},
        {id: 2, icon: 'bx bx-objects-horizontal-center', text: "پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد" , number: 85},
        {id: 3, icon: 'bx bx-message-square-dots', text: "سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد" , number: 75},
        {id: 4, icon: 'bx bx-user-pin', text: "جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند" , number: 95},
    ])
    return (
        <>
            <div className="conts-section">
                <div className="counts-container">
                    <dic className="counts-content">
                        <div className="counts-right">
                            <div className="counts-img">
                                
                            </div>
                        </div>
                        <div className="counts-left">
                            <div className="counts-text">
                                <h2>شایسته ترین لذت را به هر حال ارائه می‌دهد</h2>
                                <p>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
                            </div>
                            <div className="counts-components">
                                <CountsComp {...boxDetails[0]}></CountsComp>
                                <CountsComp {...boxDetails[1]}></CountsComp>
                                <CountsComp {...boxDetails[2]}></CountsComp>
                                <CountsComp {...boxDetails[3]}></CountsComp>
                            </div>
                        </div>
                    </dic>
                </div>
            </div>
        </>
    )
}