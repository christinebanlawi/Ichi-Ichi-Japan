import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import GalleryImage1 from '../images/gallery-image-1.jpg'
import GalleryImage2 from '../images/gallery-image-2.jpg'
import GalleryImage3 from '../images/gallery-image-3.jpg'
import GalleryImage4 from '../images/gallery-image-4.jpg'
import GalleryImage5 from '../images/gallery-image-5.jpg'
import GalleryImage6 from '../images/gallery-image-6.jpg'

function GridGallery(props) {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return ( 
        <div className="grid-container">
            <div className="grid-item grid-item-1" data-aos="flip-up">
                <img src={GalleryImage1} alt="" />
            </div>
            <div className="grid-item grid-item-2" data-aos="flip-up">
                <img src={GalleryImage2} alt="" />
            </div>
            <div className="grid-item grid-item-3" data-aos="flip-up">
                <img src={GalleryImage3} alt="" />
            </div>
            <div className="grid-item grid-item-4" data-aos="flip-up">
                <img src={GalleryImage4} alt="" />
            </div>
            <div className="grid-item grid-item-5" data-aos="flip-up">
                <img src={GalleryImage5} alt="" />
            </div>
            <div className="grid-item grid-item-6" data-aos="flip-up">
                <img src={GalleryImage6} alt="" />
            </div>
            <div className="grid-item grid-item-7" data-aos="flip-left">
                <p className="gallery-text">修羅 修羅 修羅 修羅 修羅 修羅 修羅 修羅 修羅 修羅</p>
            </div>
        </div>
    )
}

export default GridGallery