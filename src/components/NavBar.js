import React, { Component } from 'react'
import { NavBarItems } from './NavBarItems'
import Logo from '../images/logo.png'
import GetStartedButton from './GetStartedButton'

class NavBar extends Component {
    state = { clicked: false } 
    
    handlClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render () {
        return (
            <nav className="navbar-container">
                <a href="#"><img src={Logo} className="navbar-logo" alt="" /></a>
                <div className="nav-icon" onClick={this.handlClick}>
                    <i className={this.state.clicked ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavBarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <GetStartedButton />
            </nav>
        )
    }
}

export default NavBar