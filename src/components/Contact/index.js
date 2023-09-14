import './contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  return (
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
         <section style={{padding:"2vh",backgroundColor:"#e9dfd7"}} class="contact-sec sec-pad">
 <div class="container">
   <div class="row">
     <div class="col-md-6">
       <div class="contact-detail">
         <h1 class="section-title" style={{color:"#1B1717"}}>Contact us</h1>

         <ul class="contact-ul">
           <li><i class="fa fa-location-dot"></i> keasara,Hyderabad,Telanagana</li>

           <li>
             <i class="fa fa-phone"></i>
             <a href="tel:08510004495"><b>7077634488</b></a>,
             <a href="tel:08510005495"><b>9666382837</b></a>
           </li>

           <li>
             <i class="fa-solid fa-envelope"></i>
             <a href="mailto:pardeepkumar4bjp@gmail.com"><b> info@pasalaresorts.com</b></a>
           </li>
         </ul>

         {/* <span>
           <a href="/" class="fb"><i class="fa-brands fa-facebook"></i></a>
           <a href="/" class="insta"><i class="fa-brands fa-instagram"></i></a>
           <a href="/" class="twitter"><i class="fa-brands fa-twitter"></i></a>
         </span> */}
       </div>
     </div>

     <div class="col-md-6">
       <form action="#" class="contFrm" method="POST">
         <div class="row">
           <div class="col-sm-6">
             <input type="text" name="name" placeholder="Your Name" class="inptFld" required />
           </div>

           <div class="col-sm-6">
             <input type="email" name="email" placeholder="Email Address" class="inptFld" required />
           </div>

           <div class="col-sm-6">
             <input type="tel" name="phone" placeholder="Phone Number" class="inptFld" required />
           </div>

           <div class="col-sm-6">
             <input type="text" name="sub" placeholder="Subject" class="inptFld" required />
           </div>

           <div class="col-12">
             <textarea class="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
           </div>

           <div class="col-12">
             <button type='button' style={{ backgroundColor: '#EEEBDD',color:"#1B1717"}} class="inptBtn">Submit</button>
           </div>
         </div>
       </form>
     </div>
   </div>
 </div>
</section>
</div>    )}

export default Contact