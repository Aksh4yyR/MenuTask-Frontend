import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/deepnetlogo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <div>
      <Navbar bg="black" variant="dark" expand="lg">
        <Container>
          <img style={{ width: '150px' }} src={logo} alt="No image" />
         
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="ms-3">
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Add Menu</Link>
              </Nav.Link>
              <Nav.Link className="ms-3">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Menu</Link>
              </Nav.Link>
              <Nav.Link className="ms-3">
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Make a Reservation</Link>
              </Nav.Link>
              <Nav.Link className="ms-3">
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
