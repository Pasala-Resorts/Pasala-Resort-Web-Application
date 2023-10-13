import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './header.css';

function YourNavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  const handleViewAll = () => {
    history.push({
      pathname: '/book-now',
      state: { bookingPage: true }
    });
  };

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-primary-color font-style__Maven-Pro p-3"
      fixed="top"
      expanded={expanded}
    >
      {/* ... rest of your code ... */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle}>
        <i style={{ color: '#fff' }} className="bi-list"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-bar-class navbar-main" onClick={() => setExpanded(false)}>
          {/* ... your Nav.Link components ... */}
          <Nav.Link as={Link} to="/" className="font-color">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/gallery" className="font-color">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/about-us" className="font-color">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="font-color">
            Contact
          </Nav.Link>
          <Nav.Link className="font-color">
            <Button onClick={handleViewAll} className="btn-color text-dark font-weight-bold">
              Book now
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default YourNavbarComponent;
