import React, { useEffect } from 'react'
import TeacherSlider from './TeacherSlider'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Teacher(props) {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div className="teacher-container" data-aos="zoom-in-down">
            <div className="teacher-header">
                <h1 className="teacter-title">Teacher</h1>
                <p className="teacher-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In feugiat aenean aliquet euismod sapien.</p>
            </div>
            <TeacherSlider/>
        </div>
    )
}

export default Teacher