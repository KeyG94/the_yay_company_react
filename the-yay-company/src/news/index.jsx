import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import CardBody from "../components/card/Card";
import Card from "react-bootstrap/Card";
import Img1 from "../components/news/images/news-1.png";
import Img2 from "../components/news/images/news-2.png";
import Img3 from "../components/news/images/news-3.png";
import Img4 from "../components/news/images/news-4.png";
import Img5 from "../components/news/images/news-5.png";
import Img6 from "../components/news/images/news-6.png";
import Img7 from "../components/news/images/news-7.png";
import Img8 from "../components/news/images/news-8.png";
import Layout from "../components/layout/Layout";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
// pagination
let active = 1;
let items = [];

for (let number = 1; number < 5; number++) {
	items.push(
		<Pagination.Item key={number} active={number === active}>
			{number}
		</Pagination.Item>
	);
}

export const ImageCard = ({ imageUrl }) => (
	<Col xs={12} md={6} lg={3} className='d-flex justify-content-center mb-3 mt-3'>
		<Card style={{ width: "18rem" }}>
			<Card.Img variant='top' src={imageUrl} alt={`index pic of news ${imageUrl}`} />
			<CardBody />
		</Card>
	</Col>
);

const News = () => {
	//generate pagination
	const PaginationBasic = (
		<>
			<Pagination className='pt-4 pb-4'>{items}</Pagination>
		</>
	);

	return (
		<Layout>
			<Container>
				<h2 className='pt-4 pb-4'>News</h2>
				{PaginationBasic}
				<section className='content-cards'>
					<Row>
						{images.map((image) => (
							<ImageCard imageUrl={image} key={image.slice(19, 20)} />
						))}
					</Row>
				</section>
				{PaginationBasic}
			</Container>
		</Layout>
	);
};

export default News;
