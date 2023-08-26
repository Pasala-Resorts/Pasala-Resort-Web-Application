import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Container,Nav,Navbar} from 'react-bootstrap'

import './header.css'

class Header extends Component{
    render(){
        return(
            <Navbar  expand="lg" className="bg-body-tertiary bg-light">
                <Container>
                    <Navbar.Brand href="#home"><img src='https://res.cloudinary.com/dobpvkjao/image/upload/v1693078913/logo-wide_xdl4rm.png' alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header