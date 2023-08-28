import { Component } from 'react'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './home.css'

class Home extends Component{
    render(){
        return(
            <div>
                <div className='home-main-image'>
                </div>
                    <br/>
                    <br/>
                <br/>
                <br/>
                    <Row>
                        <Col md="4"></Col>
                        <Col md="4">
                            <div className="description">
                                <h1 className='heading text-primary'>Welcome</h1>
                                <br/>
                                <p>Ananya Eco-resorts an integral part of "Mahavir Harina Vanasthali National Park" is an eco-centre in association with Telangana State Forest Development Corporation (TSFDC) offers our guests a unique experience of being in the heart of Indian jungles, while enjoying all the creature comforts, we are familiar with at home. </p>
                                <br/>
                                <p>Here, at Ananya Eco-Resorts we take the meaning of luxury, comfort and service to an entirely different level. Located adjacent to Mahavir Harina Vanasthali National Park, which was set up by Nizam in order to preserve the precious heritage and rehabilitate deer. Our team of attentive staff will keep everyone happy with the standard of food, accommodation and services which is unmatched in our urban jungle.</p> 
                                <br/>
                                <p>Ananya is a man-made vision created in complete harmony with the panoramic beauty of Nature, it is built in 7 acers of lush green forest land. This super luxurious resort consists of 8 modern villas and 2 antique villas, a banquet hall, a mini-banquet hall, restaurant, spa, swimming pool and lush green gardens for destination weddings. Besides all these we have a variety bamboo gardens for small gathering; an outdoor cabana to have a romantic candle light dinner for your special night.</p>
                                <br/>
                                <p>Welcome to Ananya! Experience the nature and enlivening yourself with memories that will stay long for a lifetime!</p>
                            </div>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                <div>
                <h1 className='heading text-primary'>Our offering</h1>
                <br/>
                <br/>
                <Row>
                    <Col md="2"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <br/>
                <Row>
                    <Col md="2"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='map'>
                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121781.57558034034!2d78.52197075602248!3d17.475299273581026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7913fd7a5223%3A0x1f91fe79c6acffdb!2sPASALA%20RESORTS!5e0!3m2!1sen!2sin!4v1693082106166!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        )
    }
}

export default Home