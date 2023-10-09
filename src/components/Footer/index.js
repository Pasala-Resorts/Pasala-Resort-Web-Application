import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import './footer.css'

const Footer=()=>{
    return( <MDBFooter style={{backgroundColor:"#1B1717"}}  className=' background-color text-center text-lg-start text-muted'>
    <section className='font-color d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='https://www.facebook.com/profile.php?id=61552085644204&sk=about' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href='https://www.instagram.com/coneja.collection/' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter" />
        </a>
        <a href='https://www.google.com/maps/place/PASALA+RESORTS/@17.5627914,78.7206379,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb7913fd7a5223:0x1f91fe79c6acffdb!8m2!3d17.5627863!4d78.7232128!16s%2Fg%2F11s9gb9n39?entry=ttu   ' className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='https://www.instagram.com/coneja.collection/' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='https://www.youtube.com/channel/UCZjl_uikNi5M_WnI1-Cfc0w' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='www.google.com' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>

    <section className='font-color'>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              Pasala Resorts
            </h6>
            <p>
              Pasala Resorts offers you a peaceful environment to relax from your day to day life.
              Come experience a lifestyle close to nature.
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='/' className='text-reset'>
                Home
              </a>
            </p>
            <p>
              <a href='/gallery' className='text-reset'>
                Gallery
              </a>
            </p>
            <p>
              <a href='/about-us' className='text-reset'>
                About us
              </a>
            </p>
            <p>
              <a href='/contact' className='text-reset'>
                Contact
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              Kessara, Hyderabad, Telanagana.
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              booking@pasalaresorts.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> +91 7569721310
            </p>
           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='font-color text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Pasala Resorts.com
      </a>
    </div>
  </MDBFooter>)
}

export default Footer