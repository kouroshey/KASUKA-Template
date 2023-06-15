import './FeaturesBox.css'

export default function FeaturesBox({title , text , classIcon}) {

    return (
        <>
            <div className='feature-box-container'>
                <div className="feature-box-content">
                    <i class={classIcon}></i>
                    <div className="feature-box-text">
                        <h3>{ title }</h3>
                        <span>{ text }</span>
                    </div>
                </div>
            </div>
        </>
    )
}