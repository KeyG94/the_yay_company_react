import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './scss/styles.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import News from './components/news/News';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <Router>
      <>
        <Navbar bg="light" expand="lg">
              <Container className="container-body">
                  <Navbar.Brand href="#home">The Yay Company</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <NavLink exact to="/" className="nav-link">Home</NavLink>
                      <NavLink to="/News" className="nav-link">News</NavLink>
                      <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                  </Nav>
                  <Form inline>
                      <FormControl type="text" placeholder="Search" />
                      <Button>Go</Button>
                  </Form>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/News">
              <News />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        {/* main content from components  */}
        <footer className="container__footer">
          <Container>
              <Row>
                <Col s={12} md={4} className="container__footer-left">
                  <span className="footer__item-center">
                    <i class="fab fa-vimeo-v"></i>
                    <i class="fab fa-youtube"></i>
                  </span>
                  
                </Col>
                <Col md={4} sm={6} className="container__footer-middle">
                  <p className="footer__item-center">hello@yay.com</p>
                </Col>
                <Col md={4} sm={6} className="container__footer-right">
                  <p className="footer__item-center">Copyright 2020</p>
                </Col>
              </Row>
          </Container>
        </footer>
      </>
    </Router>
  );
}

export default App;
