import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import carouselImg1 from "../caroussel/carousel-1.jpg";
import carouselImg2 from "../caroussel/carousel-2.jpg";
import carouselImg3 from "../caroussel/carousel-3.jpg";

const CarouselHeader = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<Image src={carouselImg1} className='d-block w-100' alt='First slide' />
			</Carousel.Item>
			<Carousel.Item>
				<Image src={carouselImg2} className='d-block w-100' alt='Second slide' />
			</Carousel.Item>
			<Carousel.Item>
				<Image src={carouselImg3} className='d-block w-100' alt='Third slide' />
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselHeader;
