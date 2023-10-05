import './aboutus.css'
import {useHistory} from 'react-router-dom'
import {Container,Nav,Row} from 'react-bootstrap'

const AboutUs=()=>{
  const history = useHistory();
    const handleViewAll = () => {
          history.push({
            pathname: '/book-now',
            state: { bookingPage:true }
          });
        }

  return(
    <div style={{marginTop:'8vh'}}>
      <header className="page-header-aboutus">
    <div className="page-title-aboutus">
            <div className="overlay-aboutus"></div>   
        <Container> 
            <Row>
                <div className="page-title-container-aboutus">
                <h1 className="page-title-heading-aboutus">About us</h1>                 
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
                <h1 className="pasala-sub">Luxury <br></br>Resorts in The Heart Of <br></br>Hyderabad</h1>
                <p className="pasala-description">
                Introducing Pasala Resorts, the ultimate destination for serenity and exclusive get-togethers,this prestigious resort from Pasala Properties offers a haven for those seeking a peaceful farmhouse experience and private parties.
                Step into the world of luxury as you check into our pool access rooms, Picture yourself lounging by the water's edge, sipping on a delicious cocktail from our pool bar while basking in the warm sun.
                </p>
                <div className="button-container">
                <button onClick={() => {
              handleViewAll();
            }} className='button'>Book now</button>
                </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
                {/* Image content */}
                <img
                  src="https://res.cloudinary.com/dobpvkjao/image/upload/v1696515050/group_cottages_18_-_Photo_1_h7ixqh.jpg"
                  alt=""
                  className="col-12 mb-3 flex-image"
                />
                
          </div>
          
      </div>
</div>
<div class="bottom-container">
  <h5 className="section-heading-title-small">DISCOVER</h5>
  <h1 className="bottom-headin">Our Best Amenities</h1>
  <p className="bottom-paragraph"></p>
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
          <p className="icon-twxt">security</p>
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