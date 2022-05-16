import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function NavComponent() {
	return (
		<Navbar bg='light' expand='lg'>
			<Container className='container-body'>
				<Navbar.Brand href='/'>The Yay Company</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Link to='/' className='nav-link'>
							Home
						</Link>
						<Link to='/News' className='nav-link'>
							News
						</Link>
						<Link to='/Contact' className='nav-link'>
							Contact
						</Link>
					</Nav>
					<div className='mt-3 mb-2 d-flex'>
						<FormControl type='text' placeholder='Search' className='navigation-search-bar' />
						<Button className='btn-custom_home'>Go</Button>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
