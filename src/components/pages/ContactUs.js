import React, { useRef }  from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Topnav } from "../Topnav";
import "./contactUs.css"
import emailjs from '@emailjs/browser';
import { Box, Modal, Typography } from "@material-ui/core";


const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ContactUs(){
         
//this section for open popup
const [open, setOpen] = React.useState(false);
const handleClosepop = () => setOpen(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setOpen(true);
    
    emailjs.sendForm('service_b78n6te', 'template_r0p8nyn', form.current, 'U9N4oeLD7PnGGl6QO')
      .then((result) => {


      }, (error) => {

      });
  };
  
     return(
      //  this section for picture
        <>
        <Topnav/>
        <Navbar/>
        
        <h1 className='contactus'>Contact Us</h1>
       
        <div class="contact-container">

         <h2>Why choose US</h2>
         <p>We here at Bliss Flight LTD have qualified team of airfare experts having many years of experience in the travel & tour sector. If you have any queries about our services, please drop us a line. We’ll be happy to answer your questions to our fullest abilities.

</p>

    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">5 Coppy Bridge Drive,</div>
          <div class="text-two">ROCHDALE OL16 3AQ</div>
        </div>
        <div class="address details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-two">020 3927 7690</div>
        </div>
        <div class="address details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-two">info@bliss-flights.co.uk</div>
        </div>
        <div class="address details">
          <i class="fas fa-envelope"></i>
          <div class="topic">For Complaints</div>
          <div class="text-two">Complaints@bliss-flights.co.uk</div>
        </div>
      </div>
      
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have types of quries, you can send me message from here. It's my pleasure to help you.</p>
        <form ref={form} onSubmit={sendEmail}>
        <div class="input-box">
          <input type="text" name='c_name' placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" name='c_number' placeholder="Enter contact number"/>
        </div>
        <div class="input-box">
          <input type="text" name='c_mail' placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
        <textarea name='c_msg' className="textarea"/>
        </div>
          </form>
          <button className="button" onClick={sendEmail} >Submit</button>
          </div>
          <div>
      
      <Modal
        open={open}
        onClose={handleClosepop}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Thank you for booking with us.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You will get a confirmation from us very soon
          </Typography>
        </Box>
      </Modal>
    </div>
        </div>
       
        <div style={{ height: '100vh', width: '100%', margin:'30px' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.6009885582475!2d-2.1290753848442425!3d53.61842016199894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb925b01d98d1%3A0x29c41113a65ed266!2s5%20Coppy%20Bridge%20Dr%2C%20Rochdale%20OL16%203AQ%2C%20UK!5e0!3m2!1sen!2s!4v1664467998868!5m2!1sen!2s" width="100%" height="600"  referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
        </div>
       
        
        <Footer/>
        </>
     )


}
