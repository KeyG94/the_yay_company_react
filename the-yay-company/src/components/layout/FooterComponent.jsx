import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function FooterComponent() {
	return (
		<footer className='container__footer'>
			<Container>
				<Row>
					<Col s={12} md={4} className='container__footer-left'>
						<span className='footer__item-center'>
							<i className='fab fa-vimeo-v'></i>
							<i className='fab fa-youtube'></i>
						</span>
					</Col>
					<Col md={4} sm={6} className='container__footer-middle'>
						<p className='footer__item-center'>hello@yay.com</p>
					</Col>
					<Col md={4} sm={6} className='container__footer-right'>
						<p className='footer__item-center'>Copyright 2020</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
