import React  from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Topnav } from "../Topnav";
import "./contactUs.css"

export default function ContactUs(){
         

  
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
          <div class="text-two">Info@theblissflight.co.uk</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have types of quries, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter contact number"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
        <textarea className="textarea"/>
        </div>
          </form>
          <button className="button" >Submit</button>
          </div>
         
        </div>
        </div>
       
        
        <Footer/>
        </>
     )


}
