import './ServicesBox.css'


export default function ServicesBox({ boxIcon, boxTitle, boxDesc }) {


    return (
        <div className="services-box-container">
            <div className="services-box-content">
                <div className="services-icon-bg">
                    <i className={boxIcon}></i>
                </div>
                <h3>{boxTitle}</h3>
                <p>{boxDesc}</p>
            </div>
        </div>
    )
}