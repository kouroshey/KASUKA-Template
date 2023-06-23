import './Team.css'
import TeamBox from './TeamBox'
import { useState } from 'react'


export default function Team() {
    const [team, seTeam] = useState([
        {name: 'والتر وایت', subName: 'مدیر اجرایی' , img: './img/team/team-1.jpg'},
        {name: 'سارا جانسون', subName: 'مدیر تولید' , img: './img/team/team-2.jpg'},
        {name: 'ویلیام اندرسون', subName: 'CTO' , img: './img/team/team-3.jpg'},
        {name: 'آماندا جپسون', subName: 'حسابدار' , img: './img/team/team-4.jpg'},
    ])
    return (
        <div className="team-container">
            <div className="team-content">
                <div className="team-title">
                    <p>تیم</p>
                    <h2>تیم ما را بررسی کنید</h2>
                </div>
                <div className="team-box-container">
                    <div className="team-boxes">
                        {team.map(user => (
                            <TeamBox {...user} />
                        ))}
                    </div>
                </div>
                

            </div>
        </div>
    )
}