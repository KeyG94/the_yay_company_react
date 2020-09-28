import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './scss/styles.scss';
import './scss/global/global.scss';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import News from './components/news/News';


function App() {
  return (
    <Router>
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">The Yay Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
              <NavLink to="/News" className="nav-link">News</NavLink>
              <NavLink to="/Contact" className="nav-link">Contact</NavLink>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
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
      </>
    </Router>
  );
}

export default App;
