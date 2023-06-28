import React, { useState, useEffect } from 'react'
import './Header.css'
import NavBar from './NavBar'
import HeaderMain from './HeaderMain'



export default function Header() {

    

    return (
        <div className='entire-container'>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
        </div>
    )
}


