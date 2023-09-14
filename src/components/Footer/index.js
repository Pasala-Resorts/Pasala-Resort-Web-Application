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
        <a href='www.google.com' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href='www.google.com' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter" />
        </a>
        <a href='www.google.com' className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='www.google.com' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='www.google.com' className='me-4 text-reset'>
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
              Pasala resorts offers you Peaceful Farm house,1 hour far from city ,
              very near to nature.
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
              kessara, Hyderabad, Telanagana.
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@pasalaresorts.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
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