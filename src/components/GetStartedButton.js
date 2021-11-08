import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function GetStartedButton(props) {
    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <div data-aos="zoom-in" data-aos-delay="250">
            <button className="get-started-btn btn">Get Started</button>
        </div>
    )
}

export default GetStartedButton