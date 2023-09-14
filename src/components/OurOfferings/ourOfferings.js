import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ourOfferings.css'
import{ Button }from "react-bootstrap";

class OurOffrings extends Component{
    // state={isDisplay1:false,
    //     isDisplay2:false,isDisplay3:false,isDisplay4:false}

    // enter1=()=>this.setState({isDisplay1:true})

    // leave1=()=>this.setState({isDisplay1:false})

    // enter2=()=>this.setState({isDisplay2:true})

    // leave2=()=>this.setState({isDisplay2:false})

    // enter3=()=>this.setState({isDisplay3:true})

    // leave3=()=>this.setState({isDisplay3:false})

    // enter4=()=>this.setState({isDisplay4:true})

    // leave4=()=>this.setState({isDisplay4:false})

    render(){
        // const {isDisplay1,isDisplay2,isDisplay3,isDisplay4}=this.state
        return(
            <>
            {/* <Row >
            <Col onMouseOver={this.enter1} onMouseLeave={this.leave1}  className="our-offerings-image-card-home1">
           {isDisplay1 && 
           <Col className="card-our-offerings">
            <div>
           <h1>Farm House</h1>
           <ul>
            <li>9 Rooms</li>
            <li>Upto 30+ members capacity</li>
            <li>Swimming pool</li>
            <li>Pool Bar</li>
            <li>Dance Floor</li>
            <li>Projector Screening</li>
            <li>Pantry </li>
            <li>Camp Fire</li>
           </ul>
           </div>
           </Col>} 
            </Col>
            <Col onMouseOver={this.enter2} onMouseLeave={this.leave2}  className="our-offerings-image-card-home2">
           {isDisplay2 && <Col><h1>Farm House</h1></Col>} 
            </Col>
        </Row>
        <Row>
        <Col  onMouseOver={this.enter3} onMouseLeave={this.leave3} className="our-offerings-image-card-home1">
           {isDisplay3 && <Col><h1>Farm House</h1></Col>} 
            </Col>
            <Col onMouseOver={this.enter4} onMouseLeave={this.leave4}  className="our-offerings-image-card-home2">
           {isDisplay4 && <Col><h1>Farm House</h1></Col>} 
            </Col>
        </Row> */}
        {/* <div class="wrapper">
            <Row>
                <Col md="1"></Col>
                <Col md="4">
<div  onMouseOver={this.enter1} onMouseLeave={this.leave1}  class="zoom-effect-container">
  <div class="image-card">
      <img src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693561495/RENDER_10_-_Photo_1_ph9afh.jpg" alt=""/>
      {isDisplay1 && 
            <div className="centered">
           <h1>Farm House</h1>
           <ul>
            <li>9 Rooms</li>
            <li>Upto 30+ members capacity</li>
            <li>Swimming pool</li>
            <li>Pool Bar</li>
            <li>Dance Floor</li>
            <li>Projector Screening</li>
            <li>Pantry </li>
            <li>Camp Fire</li>
           </ul>
           </div>} 
  </div>
</div>
</Col>
<Col md="2"></Col>
<Col md="4">
<div class="zoom-effect-container">
  <div class="image-card">
      <img src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693561495/RENDER_10_-_Photo_1_ph9afh.jpg" alt=""/>
  </div>
</div>
</Col>
<Col md="1"></Col>
</Row>
<br/>
<br/>
<Row>
<Col md="1"></Col>
    <Col md="4">
<div class="zoom-effect-container">
  <div class="image-card">
      <img src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693561495/RENDER_10_-_Photo_1_ph9afh.jpg" alt=""/>
  </div>
</div>
</Col>
<Col md="2"></Col>
<Col md="4">
<div class="zoom-effect-container">
  <div class="image-card">
      <img src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693561495/RENDER_10_-_Photo_1_ph9afh.jpg" alt=""/>
  </div>
</div>
</Col>
<Col md="1"></Col>
</Row>
</div> */}
<Row className="mb-md-5 farm-house-heading pb-4" style={{padding:0}} >
    <Col md="1"></Col>
    <Col md="5" style={{padding:0}}>
    <img className="our-offerings-image"  src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693564721/RENDER_10_-_Photo.jpg.1_ypilse.jpg" alt="" />
    </Col>
    <Col className="text-center mb-4" style={{padding:0}} md="5">
    <h1 className="farm-house-heading">Farm House</h1>
    <h4>9 Rooms</h4>
            <h4>Upto 30+ members capacity</h4>
            <h4>Swimming pool</h4>
            <h4>Pool Bar</h4>
            <h4>Dance Floor</h4>
            <h4>Projector Screening</h4>
            <h4>Pantry </h4>
            {/* <h4>Camp Fire</h4> */}
            <br/>
            <Button  style={
                {border:"1px solid black",color:"#1B1717"}
            } className="bg-transparent">Book Now</Button>
    </Col>
    <Col md="1"></Col>
</Row>
<br/>
<Row  className="mb-md-5 farm-house-heading pb-4" style={{padding:0}}>
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
            <Button  style={
                {border:"1px solid #1B1717",color:"#1B1717"}
            } className="bg-transparent">Book Now</Button>
            <br/>
    </Col>
    <Col md="5" className="d-none d-md-block" style={{padding:0}}>
    <img className="our-offerings-image" src="https://res.cloudinary.com/dobpvkjao/image/upload/v1693564721/RENDER_10_-_Photo.jpg.1_ypilse.jpg" alt="" />
    </Col>
    <Col md="1"></Col>
</Row>
            </>
        )
    }
}

export default OurOffrings