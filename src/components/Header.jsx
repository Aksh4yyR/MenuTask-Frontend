import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/deepnetlogo.png';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="black" variant="dark" expand="lg">
        <Container>
          <img style={{ width: '150px' }} src={logo} alt="No image" />
         
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="ms-3" href="/home">Add Menu</Nav.Link>
              <Nav.Link className="ms-3" href="/">Menu</Nav.Link>
              <Nav.Link className="ms-3" href="/pricing">Make a Reservation</Nav.Link>
              <Nav.Link className="ms-3" href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
