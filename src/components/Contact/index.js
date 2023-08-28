import './contact.css'

// const Contact=()=>{
//     return(
//         <div>
//             <div className="img">
//                 <h1 className="heading">Contact Us</h1>
//             </div>
//             <div>
//                 <h1 className="heading2">Get In Touch</h1>
//             </div>

            
//         </div>
//     )
// }

// export default Contact

import React, { useState } from 'react';

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
    <div>


        
    <div className="container mt-5">

    <div className="img-contact">
            <h1 className="heading1">Contact Us</h1>
         </div>
        <div>
            <h1 className="heading2">Get In Touch</h1>
        </div>
      
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;


