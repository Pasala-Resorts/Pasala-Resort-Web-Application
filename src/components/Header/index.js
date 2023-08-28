import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Container,Nav,Navbar} from 'react-bootstrap'

import './header.css'
import 'react-image-gallery/styles/css/image-gallery.css';



class Header extends Component{
    render(){
        return(
            <Navbar  expand="lg" className="bg-body-tertiary bg-light">
                <Container className='navbar-main'>
                    <Navbar.Brand href="#home"><img src='https://res.cloudinary.com/dobpvkjao/image/upload/v1693078913/logo-wide_xdl4rm.png' alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-main">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/book-now"><Button>Book now</Button></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header