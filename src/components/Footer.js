import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
	<>
	<div className='bottom-bar-top'>
		<div className='bottom-left'>
		
        <div className='img'>
         <img src='images/bottom-bar-left.png'/>
		</div>
		
		<div className='left-content'>
			<h2>Get Your Tailor made holiday quote</h2>
			<p>We're here to tailor-make it easy...</p>
		</div>
		 
		</div>
		<div className='bottom-right'>
        <div className='img'>
         <img src='images/bottom-bar-right.png'/>
		</div>
		<div className='left-content'>
			
			<p>For Booking & Latest Offers</p>
			<p>Call Our Experts Now</p>
			<h2>0203927 7690</h2>
		</div>
		</div>
	
	</div>
	
    <footer className="footer">
	
  	 <div className="container2">
	  
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			{/* <img src='logo192.png' className='f-logo'/> */}
          <h2 className='f-logo'>Bliss Flights</h2>
          <p>Welcome to the world of Blessings where all your travel dreams come true!
             Do you always dream about perfect holiday? But you are confused where to get the best cheap deals for your holidays
              or business trips? Then Bliss Flights is the right choice for you!
             If you wish to travel far and fast like travel light, pack your entire wish and take off all your troubles.</p>
  	 			
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get Help</h4>
           
		   <h3>       <img src="images/call.png" alt="holiday" width="25" height="25"/>  020 3927 7690</h3>
           <p className='f-email'> <img src="images/email.png" alt="holiday" width="25" height="25"/>  info@bliss-flights.co.uk</p>
           

  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Menus</h4>
  	 			<ul>
  	 				<li><Link to='/'>Home</Link></li>
  	 				<li><Link to='/about-us'>About_Us</Link></li>
  	 				<li><Link to='/contact-us'>Contact_Us</Link></li>
  	 				<li><Link to='/terms_conditions'>Terms & Conditions</Link> </li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="/"><i className="fab fa-linkedin-in"></i></a>
					
  	 			</div>
               <div className='card-icons'>
			   <img src="/images/card-icons.png" alt="card icons" width="250" height="50"/>
			   </div>
  	 		</div>
  	 	</div>
  	 </div>
     <hr/>
     <p className='copyright'>Bliss Flight © 2022 - All Rights Reserved |<Link className='privacy_link' to='/privacy_policy'> Privacy Policy</Link> </p>
  </footer>
  </>
  );
}

export default Footer;
