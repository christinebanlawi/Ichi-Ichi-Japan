import React, { useEffect } from 'react'
import GetStartedButton from './GetStartedButton'
import Aos from 'aos'
import 'aos/dist/aos.css'

function HeaderContent(props) {
    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <div className="header-content-container">
            <h2 data-aos="zoom-in" data-aos-delay="50">Ichi - Ichi</h2>
            <h1 data-aos="zoom-in" data-aos-delay="150">Japan</h1>
            <p data-aos="zoom-in" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, nunc pellentesque suspendisse nisl. Augue eu posuere ipsum mollis et et nisl vitae facilisis.</p>
            <GetStartedButton />
        </div>
    )
}

export default HeaderContent