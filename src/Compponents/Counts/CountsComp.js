import './CountsComp.css'


export default function CountsComp({number, icon , text}) {

    return (
        <>
            <div className="counts-comp-container">
                <div className="counts-comp-top">
                    <i class={icon} ></i>
                    <p>{number}</p>
                </div>
                <p>{text}</p>
            </div>

        </>
    )
}