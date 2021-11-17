import React from 'react'
import InstagramIcon from '../images/instagram-icon.svg'

function Footer(props) {
    return (
        <div className="footer-container">
            <h2 className="follow-us-text">Follow Us</h2>
            <div className="icons">
                <a href="#" className="social-link">
                    <i class="fab fa-discord fa-2x"></i>
                </a>
                <a href="#" className="social-link">
                    <i class="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="social-link">
                    <i class="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="social-link">
                    <img src={InstagramIcon} alt="" />
                </a>
            </div>
            <hr />
            <p>All Rights Reserved</p>
        </div>
    )
}

export default Footer