import './aboutus.css'
import { Row } from 'react-bootstrap'
import {Container} from 'react-bootstrap'

const AboutUs=()=>{
  return(
    <div>
      <header className="page-header-aboutus">
    <div className="page-title-aboutus">
            <div className="overlay-aboutus"></div>   
        <Container> 
            <Row>
                <div className="page-title-container-aboutus">
                <h1 className="page-title-heading-aboutus">Contact Us</h1>                 
                </div>
            </Row>  
        </Container>                     
    </div>
    </header>
    <div className="container">
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              {/* Contact information content */}
                <h5 className="pasala-heading">ABOUT PASALA RESORTS</h5>
                <h1 className="pasala-sub">Luxury <br></br>Resorts in The Heart Of <br></br>Bhagya Nagar</h1>
                <p className="pasala-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
                integer ultrices suspendisse varius etiam est. Est, felis, tempus nec
                vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum
                ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.
                </p>
                <div className="button-container">
                <button className="button">DISCOVER MORE</button>
                </div>
                
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
                {/* Image content */}
                <img
                  src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=hKhLRUpl6c1p_6CdUHRLTAR-UEBdR6vml7M5AtCSCL4="
                  alt=""
                  className="col-12 mb-3 flex-image"
                />
                
          </div>
          
      </div>
</div>
<div class="bottom-container">
  <h5 className="section-heading-title-small">DISCOVER</h5>
  <h1 className="bottom-headin">Our Best Amenities</h1>
  <p className="bottom-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est.<br></br>
Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor<br></br>
sagittis amet odio est. Sit semper et velit fusce.</p>
<div className="container">
<div className="row">
    <div className="col_xl_five col-lg-3 col-md-6 col-sm-12">
        <div className="icon-box-1">
          <div className="icon-box-1-icon">
            <i class="fas fa-wifi"></i>
            <p className="icon-twxt">Fast WiFi</p>
          </div>
        </div>
    </div>

    <div className="col_xl_five col-lg-3 col-md-6 col-sm-12">
        <div className="icon-box-1">
          <div className="icon-box-1-icon">
          <i class="fas fa-mug-hot"></i>
            <p className="icon-twxt">Coffee-Machine</p>
          </div>
        </div>
    </div>
    <div className="col_xl_five col-lg-3 col-md-6 col-sm-12">
        <div className="icon-box-1">
          <div className="icon-box-1-icon">
          <i class="fas fa-bath"></i>
            <p className="icon-twxt">Bath</p>
          </div>
        </div>
    </div>

    <div className="col_xl_five col-lg-3 col-md-6 col-sm-12">
        <div className="icon-box-1">
          <div className="icon-box-1-icon">
          <i class="fas fa-car"></i>
            <p className="icon-twxt">Parking Space  </p>
          </div>
        </div>
    </div>

    <div className="col_xl_five col-lg-3 col-md-6 col-sm-12">
        <div className="icon-box-1">
          <div className="icon-box-1-icon">
          <i class="fas fa-person-swimming"></i>
            <p className="icon-twxt">Swimming Pool</p>
          </div>
        </div>
    </div>

    

    <div className="col_xl_five col-lg-3 col-md-6 col-sm-12">
      <div className="icon-box-1">
        <div className="icon-box-1-icon">
        <i class="fas fa-fire"></i>
          <p className="icon-twxt">Camp Fire</p>
        </div>
      </div>
    </div>

    <div className="col_xl_five col-lg-3 col-md-6 col-sm-12">
      <div className="icon-box-1">
        <div className="icon-box-1-icon">
        <i class="fab fa-watchman-monitoring"></i>
          <p className="icon-twxt">Watchman Monitoring</p>
        </div>
      </div>
    </div>

    <div className="col_xl_five col-lg-3 col-md-6 col-sm-12">
      <div className="icon-box-1">
        <div className="icon-box-1-icon">
        <i class="fas fa-utensils"></i>
          <p className="icon-twxt">Kitchen</p>
        </div>
      </div>
    </div>

    
    

</div>
</div>
</div>
</div>

  )
}

export default AboutUs