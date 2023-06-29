import React, { useState } from 'react'
import './TeamBox.css'
import TeamSocialBox from './TeamSocialBox'


export default function TeamBox({ img, name, subName }) {
    const [socialTeamIcons, setSocialTeamIcons] = useState([
        'bx bxl-skype',
        'bx bxl-twitter',
        'bx bxl-linkedin',
        'bx bxl-facebook',
    ])
    return (
        <div className="team-box-content">
            <div className="team-img">
                <img src={img} alt="" srcset="" />
                <div className="team-social">
                    {
                        socialTeamIcons.map(icon => (
                            <TeamSocialBox icon = {icon}> </TeamSocialBox>

                        ))
                    }
                </div>
            </div>
            <div className="team-details">
                <span>{name}</span>
                <p>{subName}</p>
            </div>
        </div>
    )
}