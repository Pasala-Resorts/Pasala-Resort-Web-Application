import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { Button, Nav, Row, Col } from 'react-bootstrap';
import './ourOfferings.css';

const OurOffrings = () => {
    const history = useHistory();

    const handleViewAll = () => {
        history.push({
            pathname: '/book-now',
            state: { bookingPage: true }
        });
    }

    return (
        <div className="our-offrings-background">
            <h1 className='heading font-curly-style_our_offerings pt-4 pb-4'>Our Offerings</h1>
            <Row className="mb-md-5 farm-house-heading pb-4">
                <Col md="1"></Col>
                <Col md="5" style={{ padding: 0 }}>
                    <img className="our-offerings-image" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1695649719/r1_33_-_Photo_ehy8za.jpg" alt="" />
                </Col>
                <Col className="text-center mb-4" style={{ padding: 0 }} md="5">
                    <h1 className="farm-house-heading">Farm House</h1>
                    <h4>9 Rooms</h4>
                    <h4>Upto 30+ members capacity</h4>
                    <h4>Swimming pool</h4>
                    <h4>Pool Bar</h4>
                    <h4>Dance Floor</h4>
                    <h4>Projector Screening</h4>
                    <h4>Pantry </h4>
                    <br />
                    <Button style={{ border: "1px solid black", color: "#1B1717" }} className="bg-transparent" onClick={() => { handleViewAll(); }}>Book now</Button>
                </Col>
                <Col md="1"></Col>
            </Row>
            {/* Other rows go here */}
            <Row  className=" farm-house-heading pb-4" style={{padding:0}}>
    <Col md="1"></Col>
    <Col md="5" className="d-block d-md-none" style={{padding:0}}>
    <img className="our-offerings-image" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693564721/RENDER_10_-_Photo.jpg.1_ypilse.jpg" alt="" />
    </Col>
    <Col className="text-center mb-4" style={{padding:0}} md="5">
        <h1 className="farm-house-heading">Party lawn</h1>
        
            <h4>Upto 200+ members capacity</h4>
            <h4>For outdoor events</h4>
            <h4>Big and Spacious</h4>
            <h4>Dining Area</h4>
            <h4>Event Management</h4>
            <h4>Pantry </h4>
            {/* <h4>Camp Fire</h4> */}
            <br/>
            <Button style={{ border: "1px solid black", color: "#1B1717" }} className="bg-transparent" onClick={() => { handleViewAll(); }}>Book now</Button>

            {/* <a href='https://77409.staygrid.com/webreservation/index/index/hidHotelIdWebOut/QV5TX0ZSczM0Xzc3NDA5X0Y1dGVyOTA4N3NfKWRoZl9kcnRlcjdfNzc0MDlfaGdmaF9nXmQ4NTQ/hidLanguageId/1/'>
            <Button  style={
                {border:"1px solid #1B1717",color:"#1B1717"}
            } className="bg-transparent">Book Now</Button></a> */}
            <br/>
    </Col>
    <Col md="5" className="d-none d-md-block" style={{padding:0}}>
    <img className="our-offerings-image" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693564721/RENDER_10_-_Photo.jpg.1_ypilse.jpg" alt="" />
    </Col>
    <Col md="1"></Col>
</Row>
<br/>
<Row className="mb-md-5 farm-house-heading pb-4" >
    <Col md="1"></Col>
    <Col md="5" style={{padding:0}}>
    <img className="our-offerings-image"  src="https://res.cloudinary.com/dobpvkjao/image/upload/v1695649975/Overall_view_c5khdi.jpg" alt="" />
    </Col>
    <Col className="text-center mb-4" style={{padding:0}} md="5">
    <h1 className="farm-house-heading">Gazebo - Picnic Area</h1>
            <h4> Spend with your family and friends</h4>
            <h4> Good for small outdoor parties</h4>
            <h4> Kitchen platform</h4>
            <h4> Open sit out area</h4>
            <h4> Spend time with nature</h4>
            {/* <h4>Camp Fire</h4> */}
            <br/>
            <Button style={{ border: "1px solid black", color: "#1B1717" }} className="bg-transparent" onClick={() => { handleViewAll(); }}>Book now</Button>

            {/* <a href='https://77409.staygrid.com/webreservation/index/index/hidHotelIdWebOut/QV5TX0ZSczM0Xzc3NDA5X0Y1dGVyOTA4N3NfKWRoZl9kcnRlcjdfNzc0MDlfaGdmaF9nXmQ4NTQ/hidLanguageId/1/'>
            <Button  style={
                {border:"1px solid black",color:"#1B1717"}
            } className="bg-transparent">Book Now</Button></a> */}
    </Col>
    <Col md="1"></Col>
</Row>
        </div>
        
    );
}

export default OurOffrings;
