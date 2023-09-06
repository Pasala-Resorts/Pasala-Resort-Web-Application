import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Container,Nav,Navbar} from 'react-bootstrap'

import './header.css'
import 'react-image-gallery/styles/css/image-gallery.css';



class Header extends Component{
    render(){
        return(
            <Navbar  expand="lg" className="bg-primary-color font-style__Maven-Pro">
                <Container className='navbar-main'>
                    <Navbar.Brand href="/"><img src='https://res.cloudinary.com/dobpvkjao/image/upload/v1693213313/logo_1_lszeve.png' alt="logo" className='img-logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><i style={{color:"#fff"}} class="bi-list"></i></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-bar-class  navbar-main">
                        <Nav.Link as={Link} to="/" className='font-color'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/gallery" className='font-color'>Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/about-us" className='font-color'>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/Contact" className='font-color'>Contact</Nav.Link>
                        {/* <Nav.Link as={Link} to="/book-now" className='font-color'><Button id='webDiv' className='btn-color text-dark font-weight-bold'>Book now</Button></Nav.Link> */}
                    </Nav>
                    <div id="webDiv" style={{borderWidth: 0}}><Button className='btn-color text-dark font-weight-bold'>Book now</Button></div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header