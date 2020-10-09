import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputForm from './elements/InputForm';
import ContactList from './elements/ContactList';

function Contact(props) {
	return (
		<Container className="mt-5">
			<h2>Submit your details</h2>
			<Row className="mt-5">
				<Col xs={12} md={6} md={{ order: 2 }} className="mb-5 mt-5">
					<ContactList />
				</Col>
				<Col xs={12} md={6} md={{ order: 1 }} className="mt-5">
					<InputForm />
				</Col>
			</Row>
		</Container>
	);
}

export default Contact;
