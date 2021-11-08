import React from 'react'
import NavBar from './NavBar'
import HeaderContent from './HeaderContent'

function Header(props) {
    return (
        <div className="header-container">
            <NavBar />
            <HeaderContent />
        </div>
    )
}

export default Header