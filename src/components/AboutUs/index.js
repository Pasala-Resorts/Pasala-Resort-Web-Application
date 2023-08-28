import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './aboutus.css'

const AboutUs=()=>{
    return(
        <>
        <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>
<Row>
    <Col md={2}></Col>
<Col md={3}>
  <div className="column">
    <div className="card">
      <img className='img1' src="/w3images/team1.jpg" alt="Jane" />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  </Col>
  <Col md={3}>
  <div className="column">
    <div className="card">
      <img className='img1' src="https://www.w3schools.com/w3images/team2.jpg.jpg" alt="Mike" />
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  </Col>
  <Col md={3}>
  <div className="column">
    <div className="card">
      <img className='img1' src="/w3images/team3.jpg" alt="John"  />
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  </Col>
  </Row>
        </>
    )
}

export default AboutUs