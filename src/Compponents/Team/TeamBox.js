import './TeamBox.css'


export default function TeamBox({img , name , subName}) {
    return (
        <div className="team-box-content">
            <div className="team-img">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="team-details">
                <span>{name}</span>
                <p>{subName}</p>
            </div>
        </div>
    )
}