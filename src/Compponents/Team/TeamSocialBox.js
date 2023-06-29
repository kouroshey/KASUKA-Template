import React from 'react'
import './TeamSocialBox.css'
export default function TeamSocialBox({icon}) {
    return (
        <>
            <div className="team-social-container">
                <i className={icon}></i>
            </div>
        </>
    )
}
