import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { HouseDoor, Envelope } from 'bootstrap-icons-react';
import './contact.css'
// import officeLogo from './office-logo.png'; // Replace with your actual image URLs
// import phoneLogo from './phone-logo.png'; // Replace with your actual image URLs
// import emailLogo from './email-logo.png'; // Replace with your actual image URLs

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;

    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    console.log(conFom);

    // Simulate a delay for submission (you can replace this with your actual submission logic)
    setTimeout(() => {
      setFormStatus('Send');
    }, 1500);
  };

  return (
    <div className="container mt-5">
<div className='row'>
    <div className="img-contact">
            <h1 className="heading">Contact Us</h1>
         </div>
        <div>
            <h1 className="heading2">Get In Touch</h1>
        </div>
        <div className="col-md-6">
        


         <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label mb-2" htmlFor="name">
            Name
          </label>
          <input className="form-control mb-5" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label mb-2" htmlFor="email">
            Email
          </label>
          <input className="form-control mb-5" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="form-control mb-5" id="message" required />
        </div>
        <button className="btn btn-success mb-20" type="submit">
          {formStatus}
        </button>
      </form> 
        
        </div>
        <div className="col-md-6 ">
          <h2 className='heading-info'>Office Information</h2>
          <div className="office-info">
            <div className="office-info-item email">
            
            <div class="address-content">
              <i class="fas fa-map icon-address"></i>
              <p className='paragraph'>39555 Orchard Hill Place, Suite - 225 Novi, Mi 4837</p>
            </div>
          </div>

          <div className="office-info-item email">
            <div class="email-content">
              <i class="fas fa-square-phone icon-email"></i>
              <p className='paragraph'> +1 (804) 956-8331</p>
            </div>
          </div>



          <div className="office-info-item email">
            <div class="email-content">
              <i class="fas fa-envelope icon-email"></i>
              <p className='paragraph'> contact@example.com</p>
            </div>
          </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
