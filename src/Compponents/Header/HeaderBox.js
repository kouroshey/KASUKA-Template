import "./HeaderBox.css"

export default function HeaderBox({ svgSrcr , boxText }) {


    return (

        <>

            <div className="header-box">
                {svgSrcr}
                <a href="#">{boxText}</a>
            </div>

        </>

    )
}