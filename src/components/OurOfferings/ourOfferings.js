import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ourOfferings.css'


class OurOffrings extends Component{
    state={isDisplay1:false,
        isDisplay2:false,isDisplay3:false,isDisplay4:false}

    enter1=()=>this.setState({isDisplay1:true})

    leave1=()=>this.setState({isDisplay1:false})

    enter2=()=>this.setState({isDisplay2:true})

    leave2=()=>this.setState({isDisplay2:false})

    enter3=()=>this.setState({isDisplay3:true})

    leave3=()=>this.setState({isDisplay3:false})

    enter4=()=>this.setState({isDisplay4:true})

    leave4=()=>this.setState({isDisplay4:false})

    render(){
        const {isDisplay1,isDisplay2,isDisplay3,isDisplay4}=this.state
        return(
            <>
            <Row>
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
        </Row>
            </>
        )
    }
}

export default OurOffrings