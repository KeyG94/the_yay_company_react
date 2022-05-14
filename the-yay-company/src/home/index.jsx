import CarouselHeader from "../components/home/elements/CarouselHeader";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/esm/Image";
import imageTab1 from "../components/home/images/tab-image1.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home() {
	return (
		<Layout>
			<CarouselHeader />
			<Container>
				<main className='mt-5'>
					<h1>We do YAY things</h1>
					<p>
						Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros
						pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus
						massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam,
						efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
						a, varius eget massa.
					</p>
				</main>
				<div className='d-none d-lg-block mb-6 custom-tab'>
					<Tabs defaultActiveKey='first'>
						<Tab eventKey='first' title='First' className='shadow'>
							<Row className='p-5 bg-white row-radius'>
								<Col lg={4} className='justify-content-center'>
									<Image src={imageTab1} className='accordion-image' />
								</Col>
								<Col lg={8} className='mb-4 social-media-icons'>
									<p>
										Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis
										pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras
										vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
									</p>
									<div className='mt-5'>
										<span>SHARE</span>
										<i className='fab fa-facebook-f'></i>
										<i className='fab fa-twitter'></i>
									</div>
								</Col>
							</Row>
						</Tab>
						<Tab eventKey='second' title='Second' className='custom-tab'>
							<Row className='p-5 bg-white row-radius'>
								<Col lg={4} className='justify-content-center'>
									<Image
										src='https://images.unsplash.com/photo-1598769569852-88a6bdb1b4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80'
										className='accordion-image'
									/>
								</Col>
								<Col lg={8} className='mb-4 social-media-icons'>
									<p>
										Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis
										pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras
										vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
									</p>
									<div className='mt-5'>
										<span>SHARE</span>
										<i className='fab fa-facebook-f'></i>
										<i className='fab fa-twitter'></i>
									</div>
								</Col>
							</Row>
						</Tab>
						<Tab eventKey='third' title='Third' className='custom-tab'>
							<Row className='p-5 bg-white row-radius'>
								<Col lg={4} className='justify-content-center'>
									<Image
										src='https://images.unsplash.com/photo-1562313513-efd92b16d3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
										className='accordion-image'
									/>
								</Col>
								<Col lg={8} className='mb-4 social-media-icons'>
									<p>
										Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis
										pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras
										vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
									</p>
									<div className='mt-5'>
										<span>SHARE</span>
										<i className='fab fa-facebook-f'></i>
										<i className='fab fa-twitter'></i>
									</div>
								</Col>
							</Row>
						</Tab>
					</Tabs>
				</div>
				<Accordion defaultActiveKey='0' className='d-lg-none shadow'>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>
							<h3>First</h3>
						</Accordion.Header>
						<Accordion.Body className='accordion-custom'>
							<Row>
								<Col sm={12} className='mb-4'>
									Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra
									leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
									pharetra lectus non maximus. Sed condimentum mattis rhoncus.
								</Col>
								<Image src={imageTab1} className='accordion-image' />
								<Col sm={12} className='d-flex justify-content-center'></Col>
								<Col className='mt-2 p-4 text-center social-media-icons'>
									<span>SHARE</span>
									<i className='fab fa-facebook-f'></i>
									<i className='fab fa-twitter'></i>
								</Col>
							</Row>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'>
						<Accordion.Header>
							<h3>Second</h3>
						</Accordion.Header>
						<Accordion.Body className='accordion-custom'>
							<Row>
								<Col sm={12} className='mb-4'>
									Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra
									leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
									pharetra lectus non maximus. Sed condimentum mattis rhoncus.
								</Col>
								<Col sm={12} className='d-flex justify-content-center'>
									<Image
										src='https://images.unsplash.com/photo-1598769569852-88a6bdb1b4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80'
										className='accordion-image'
										alt='retro tv, steroe and magazines'
									/>
								</Col>
								<Col className='mt-2 p-4 text-center social-media-icons'>
									<span>SHARE</span>
									<i className='fab fa-facebook-f'></i>
									<i className='fab fa-twitter'></i>
								</Col>
							</Row>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
						<Accordion.Header>
							<h3>Third</h3>
						</Accordion.Header>
						<Accordion.Body className='accordion-custom'>
							<Row>
								<Col sm={12} className='mb-4'>
									Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra
									leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
									pharetra lectus non maximus. Sed condimentum mattis rhoncus.
								</Col>
								<Col sm={12} className='d-flex justify-content-center'>
									<Image
										src='https://images.unsplash.com/photo-1562313513-efd92b16d3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
										className='accordion-image'
										alt='Retro tv on an old table infront of a window to a fancy restaurant'
									/>
								</Col>
								<Col className='mt-2 p-4 text-center social-media-icons'>
									<span>SHARE</span>
									<i className='fab fa-facebook-f'></i>
									<i className='fab fa-twitter'></i>
								</Col>
							</Row>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Container>
		</Layout>
	);
}

// 		{/* Hide on larger screens  */}

// 		<Accordion defaultActiveKey='0' className='d-lg-none shadow'>

// 			<Card>
// 				<Card.Header>
// 					<Accordion.Toggle as={Button} variant='link' eventKey='1'>
// 						<h3>Second</h3>
// 					</Accordion.Toggle>
// 				</Card.Header>
// 				<Accordion.Collapse eventKey='1'>
// 					<Card.Body className='accordion-custom'>
// 						<Row>
// 							<Col sm={12} className='mb-4'>
// 								Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis
// 								pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras
// 								vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
// 							</Col>
// 							<Col sm={12} className='d-flex justify-content-center'>
// 								<Image
// 									src='https://images.unsplash.com/photo-1598769569852-88a6bdb1b4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80'
// 									fluid
// 									className='accordion-image'
// 									alt='retro tv, steroe and magazines'
// 								/>
// 							</Col>
// 							<Col className='mt-2 p-4 text-center social-media-icons'>
// 								<span>SHARE</span>
// 								<i className='fab fa-facebook-f'></i>
// 								<i className='fab fa-twitter'></i>
// 							</Col>
// 						</Row>
// 					</Card.Body>
// 				</Accordion.Collapse>
// 			</Card>
// 			<Card>
// 				<Card.Header>
// 					<Accordion.Toggle as={Button} variant='link' eventKey='2'>
// 						<h3>Third</h3>
// 					</Accordion.Toggle>
// 				</Card.Header>
// 				<Accordion.Collapse eventKey='2'>
// 					<Card.Body className='accordion-custom'>
// 						<Row>
// 							<Col sm={12} className='mb-4'>
// 								Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis
// 								pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras
// 								vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
// 							</Col>
// 							<Col sm={12} className='d-flex justify-content-center'>
// 								<Image
// 									src='https://images.unsplash.com/photo-1562313513-efd92b16d3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
// 									fluid
// 									className='accordion-image'
// 									alt='Retro tv on an old table infront of a window to a fancy restaurant'
// 								/>
// 							</Col>
// 							<Col className='mt-2 p-4 text-center social-media-icons'>
// 								<span>SHARE</span>
// 								<i className='fab fa-facebook-f'></i>
// 								<i className='fab fa-twitter'></i>
// 							</Col>
// 						</Row>
// 					</Card.Body>
// 				</Accordion.Collapse>
// 			</Card>
// 		</Accordion>
// 	</Container>
// </>
