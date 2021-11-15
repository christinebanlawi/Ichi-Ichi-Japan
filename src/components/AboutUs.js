import React, { useEffect } from 'react'
import Tabs from './Tabs'
import Aos from 'aos'
import 'aos/dist/aos.css'

function AboutUs(props) {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div className="about-us-container">
            <div className="about-us-image" data-aos="fade-right">
                <img src={props.image} alt="" />
            </div>
            <div className="about-us-info" data-aos="fade-left">
                <h3 className="about-us-text">About Us</h3>
                <h1 className="about-us-title">Ichi Ichi Japan</h1>
                <Tabs />
                <button className="read-more-btn btn">Read More</button>
            </div>
        </div>
    )
}

export default AboutUs