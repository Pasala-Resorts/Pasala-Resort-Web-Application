import {Link, useHistory} from 'react-router-dom'
import {Button,Nav,Navbar} from 'react-bootstrap'
import React, { useState } from 'react';
import './header.css'
import 'react-image-gallery/styles/css/image-gallery.css';



function YourNavbarComponent() {
    const [expanded, setExpanded] = useState(false);
  
   
    const history = useHistory();
    const handleViewAll = () => {
          history.push({
            pathname: '/book-now',
            state: { bookingPage:true }
          });
        }
    const handleNavbarToggle = () => {
        setExpanded(!expanded);
        };
      

    return (
      <Navbar expand="lg" className="bg-primary-color font-style__Maven-Pro p-3" fixed="top" expanded={expanded}>
        {/* ... rest of your code ... */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle}>
          <i style={{ color: "#fff" }} className="bi-list"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-bar-class navbar-main" onClick={() => setExpanded(false)}>
            {/* ... your Nav.Link components ... */}
            <Nav.Link as={Link} to="/" className='font-color'>Home</Nav.Link>
                <Nav.Link as={Link} to="/gallery" className='font-color'>Gallery</Nav.Link>
                <Nav.Link as={Link} to="/about-us" className='font-color'>About Us</Nav.Link>
                <Nav.Link as={Link} to="/Contact" className='font-color'>Contact</Nav.Link>
                <Nav.Link className='font-color'>
                <Button onClick={() => {
              handleViewAll();
            }} className='btn-color text-dark font-weight-bold'>Book now</Button>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  

// class Header extends Component{
//     render(){
//         return(
//             <Navbar  expand="lg" className="bg-primary-color font-style__Maven-Pro p-3" fixed="top">
//                 <Container className='navbar-main'>
//                     <Navbar.Brand href="/"><img src='https://res.cloudinary.com/dobpvkjao/image/upload/v1693213313/logo_1_lszeve.png' alt="logo" className='img-logo'/></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav"><i style={{color:"#fff"}} class="bi-list"></i></Navbar.Toggle>
//                     <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="nav-bar-class  navbar-main">
//                         <Nav.Link as={Link} to="/" className='font-color'>Home</Nav.Link>
//                         <Nav.Link as={Link} to="/gallery" className='font-color'>Gallery</Nav.Link>
//                         <Nav.Link as={Link} to="/about-us" className='font-color'>About Us</Nav.Link>
//                         <Nav.Link as={Link} to="/Contact" className='font-color'>Contact</Nav.Link>
//                         <Nav.Link as={Link} to="/book-now" className='font-color'><Button className='btn-color text-dark font-weight-bold'>Book now</Button></Nav.Link>
//                             {/* <a href='https://77409.staygrid.com/webreservation/index/index/hidHotelIdWebOut/QV5TX0ZSczM0Xzc3NDA5X0Y1dGVyOTA4N3NfKWRoZl9kcnRlcjdfNzc0MDlfaGdmaF9nXmQ4NTQ/hidLanguageId/1/'><Button className='btn-color text-dark font-weight-bold'>Book now</Button></a> */}
//                         {/* <div id="webDiv" style={{borderWidth: 0}}></div> */}
//                     </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         )
//     }
// }

export default YourNavbarComponent