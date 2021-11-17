import React, { useEffect } from 'react'
import GridGallery from './GridGallery'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Gallery(props) {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div className="gallery-container">
            <div className="gallery-header" data-aos="zoom-in">
                <h1 className="teacter-title">Our Gallery</h1>
                <p className="teacher-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In feugiat aenean aliquet euismod sapien.</p>
            </div>
            <GridGallery />
        </div>
    )
}

export default Gallery