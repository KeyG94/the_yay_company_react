import Layout from "../components/layout/Layout";
import InputForm from "../components/contact/elements/InputForm";
import ContactList from "../components/contact/elements/ContactList";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Contact() {
	return (
		<Layout>
			<Container className='mt-5'>
				<h2>Submit your details</h2>
				<Row className='mt-5'>
					<Col xs={12} md={[6, { order: 2 }]} className='mb-5 mt-5'>
						<ContactList />
					</Col>
					<Col xs={12} md={[6, { order: 1 }]} className='mt-5'>
						<InputForm />
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
