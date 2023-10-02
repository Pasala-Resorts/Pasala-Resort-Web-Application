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



const Home=()=> {
    function preloadImages() {
        const imageUrls = [
            'https://res.cloudinary.com/dobpvkjao/image/upload/v1695650120/r2_41_-_Photo_fvifoj.jpg', // Replace with your image URLs
            'https://res.cloudinary.com/dobpvkjao/image/upload/v1695650119/r1_38_-_Photo_hoa3cu.jpg',
            'https://res.cloudinary.com/dobpvkjao/image/upload/v1695650117/r3_54_-_Photo_vsuzi1.jpg',
        ];
    
        for (const imageUrl of imageUrls) {
            new Image().src = imageUrl;
        }
    }
    preloadImages();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="mt-5">
           <div>
            {/* <div class="iframe-embed" style={{left: 0, width: "100%", height: 0, position: 'relative', paddingBottom: '75%'}} ><iframe title="unique-map" src="https://dribbble.com/shots/15379368-Quick-Animation-Experiment/player" style={{border: 0, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute'}} allowfullscreen allow="encrypted-media"></iframe></div> */}

            <div id="app" class="home-main-image-slideshow">
                <div class="title">
                    <div class="title-inner">
                        <div class="cafe">
                            <div class="cafe-inner">Pasala</div>
                        </div>
                        <div class="mozart">
                            <div class="mozart-inner">Resorts</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <a href="https://youtu.be/mBY62jtbMYM" data-keyframers-credit style={{color: '#000'}}></a> */}
            {/* <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script> */}
        </div>
                <Row className="description-container-home" data-aos="zoom-out-right">
               <Row><br/><br/><br/></Row>
                    <Col md="1"></Col>
                    <Col md="4" className="description-home">
                        <div className="description p-4">
                            <p className="font-style_desc">Here, at <span className="palasa-resorts_text"> Pasala Resorts  </span>  we take the meaning of luxury, comfort and service to an entirely different level.  Accommodation and services which is unmatched in our urban jungle.</p> 
                            <p className="font-style_desc"> Experience the nature and enlivening yourself with memories that will stay long for a lifetime!</p>
                        </div>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="5">
                        <img src="https://res.cloudinary.com/dobpvkjao/image/upload/v1695649719/r2_49_-_Photo_eokimh.jpg" alt="welcome" className="img-home m-md-5" />
                    </Col>
                    <Col md="1"></Col>
                   <Row> <br/>
                <br/>
                <br/> </Row>
                </Row>

                <Container className="nature-container-home">
                <Row></Row>
                <Row className="text-center font-curly-style_main">
                    <Col><p className="font-curly-style">In Love,with Nature</p></Col></Row>
                <Row>
                <br/>
                </Row>
                <Row className="nature-home font-curly-style_sub">
                    <Col className="nature-card-home" md="3">
                    <h1>5 Acre</h1>
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
                    <p>20+ Luxury amenities which no other farm Project offers.</p>
                    </Col>
                </Row>
            </Container>
            <div className="our-offrings-background">
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
            <br/>
            <br/>
            </div>
            <div data-aos="fade-up" className='map'>
            <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121781.57558034034!2d78.52197075602248!3d17.475299273581026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7913fd7a5223%3A0x1f91fe79c6acffdb!2sPASALA%20RESORTS!5e0!3m2!1sen!2sin!4v1693082106166!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        
    )
}




export default Home