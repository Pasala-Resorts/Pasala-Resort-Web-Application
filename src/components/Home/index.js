import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Component } from 'react'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import OurOffrings from "../OurOfferings/ourOfferings";


import './home.css'
import { Container } from "react-bootstrap";

function Home (){ 
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []); 
        return(
            <div>
                <div data-aos="" className='home-main-image'>
                    <h1>PASALA RESORTS</h1>
                </div>
                    <Row className="description-container-home" data-aos="zoom-out-right">
                   <Row><br/><br/><br/></Row>
                        <Col md="1"></Col>
                        <Col md="4" className="description-home">
                            <div className="description">
                                <h1 className='heading text-success'>Welcome</h1>
                                <br/>
                                <p>Here, at Pasala Resorts  we take the meaning of luxury, comfort and service to an entirely different level.  Accommodation and services which is unmatched in our urban jungle.</p> 
                                <br/>
                                <p> Experience the nature and enlivening yourself with memories that will stay long for a lifetime!</p>
                            </div>
                        </Col>
                        <Col md="1"></Col>
                        <Col md="5">
                            <img src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693155545/1_11_-_Photo_1_pc7fjn.jpg" alt="welcome" className="img-home" />
                        </Col>
                        <Col md="1"></Col>
                       <Row> <br/>
                    <br/>
                    <br/> </Row>
                    </Row>
                   
                    <Container className="nature-container-home">
                    <Row></Row>
                    <Row className="text-center"><h1>In Love,with Nature</h1></Row>
                    <br/>
                    <Row className="nature-home">
                        <Col className="nature-card-home" md="3">
                        <h1>145 Acre</h1>
                        <h4>Gated Farm Project</h4>
                        <p>Be sure of security by being a part of biggest farm Community</p>
                        </Col>
                        <Col className="nature-card-home" md="3">
                        <h1>70%</h1>
                        <h4>Green Zone</h4>
                        <p>More than 70% of the project is green zone. More trees, less pollution</p>
                        </Col>
                        <Col className="nature-card-home" md="3">
                        <h1>1 Hr</h1>
                        <h4>Drive from city</h4>
                        <p>Your weekend home is just 1Hr drive from the city and closer to airport.</p>
                        </Col>
                        <Col className="nature-card-home" md="3">
                        <h1>20+</h1>
                        <h4>Luxury Amenities</h4>
                        <p>20+ Luxury amenities which no other farm Project offers. Yes, we bet on it.</p>
                        </Col>
                    </Row>
                </Container>
                <br/>
                    <br/>
                <div>
                <h1 className='heading text-success'>Our Offering</h1>
                <br/>
                <br/>
                {/* <Row data-aos="flip-up">
                    <Col md="2"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693079407/RESORT_KEESARA_17_-_Photo.jpg.0_rrztli.jpg" />
                        <Card.Body>
                            <Card.Title>Farm House</Card.Title>
                            <Card.Text>
                                Farm house with swiming pool and good ameneties.
                                
                            </Card.Text>
                            <br/>
                            <Button variant="primary">Book Now </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693155545/1_11_-_Photo_1_pc7fjn.jpg" />
                        <Card.Body>
                            <Card.Title>Party Lawn</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Book Now  </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693155545/1_13_-_Photo_uggwdv.jpg" />
                        <Card.Body>
                            <Card.Title>Single Cottages </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Book Now </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <br/>
                <Row data-aos="flip-down">
                    <Col md="2"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1689871596/commercial-kitchen-layout-design-for-restaurants-thumbnail_xqg1oj.jpg" />
                        <Card.Body>
                            <Card.Title>Kitchen</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Opening Soon...</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693155560/group_16_-_Photo_g8guf3.jpg" />
                        <Card.Body>
                            <Card.Title>Covenction Hall </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Opening Soon...</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1689090522/pexels-pixabay-261429_dypmif.jpg" />
                        <Card.Body>
                            <Card.Title>Adventure Park </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Opening Soon...</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="2"></Col>
                </Row> */}
                <Row>
                  <OurOffrings /> 
                </Row>
                </div>
                <br/>
                <br/>
                <br/>
                <div data-aos="fade-up" className='map'>
                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121781.57558034034!2d78.52197075602248!3d17.475299273581026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7913fd7a5223%3A0x1f91fe79c6acffdb!2sPASALA%20RESORTS!5e0!3m2!1sen!2sin!4v1693082106166!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        )
    }

export default Home