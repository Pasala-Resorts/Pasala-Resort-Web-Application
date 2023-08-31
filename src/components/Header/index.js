import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Container,Nav,Navbar} from 'react-bootstrap'

import './header.css'
import 'react-image-gallery/styles/css/image-gallery.css';



class Header extends Component{
    render(){
        return(
            <Navbar  expand="lg" className="bg-primary-color">
                <Container className='navbar-main'>
                    <Navbar.Brand href="/"><img src='https://res.cloudinary.com/dobpvkjao/image/upload/v1693213313/logo_1_lszeve.png' alt="logo" className='img-logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><i class="bi-list"></i></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto  navbar-main">
                        <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/gallery" className='text-light'>Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/about-us" className='text-light'>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/Contact" className='text-light'>Contact</Nav.Link>
                        <Nav.Link as={Link} to="/book-now" className='text-dark'><Button className='btn-color text-dark font-weight-bold'>Book now</Button></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header