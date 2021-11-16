import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css' 
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { TeacherData } from './TeacherData'

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: true,
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                        dots: false,
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                }     
            ]
        }

        return (
            <div className="teacher-slider-container">
                <Slider {...settings}>
                    {TeacherData.map((slide, index) => {
                        return (
                            <div className="teacher-profile">
                                <img src={slide.url} alt="teacher" className="teacher-image"/>
                                <div className="teacher-info">
                                    <div className="teacher-name-age">
                                        <h3>{slide.name}</h3>
                                        <p>{slide.age}</p>
                                    </div>
                                    <button className="lesson-btn btn">
                                        1 on 1 Lesson
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}