import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../caroussel/carousel-1.jpg';
import carouselImg2 from '../caroussel/carousel-2.jpg';
import carouselImg3 from '../caroussel/carousel-3.jpg';

function CarouselHeader() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carouselImg1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carouselImg2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carouselImg3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHeader;
