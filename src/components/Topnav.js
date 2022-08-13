import React from 'react'
import { Email, PhoneIphoneTwoTone } from '@material-ui/icons';
import "./topnav.css"


export const Topnav = () => {
  return (
    <>
     <div className='topnav'>
      
      <div className='econtainer'>
      <h3 className='email'>
      <Email/>
     <a className='email a' href='mailto:info@theblissflight.co.uk' >info@theblissflight.co.uk</a> </h3>
      </div>
    
      <div className='pcontainer'>
     <h3 className='phone'>
     Need any help?  <PhoneIphoneTwoTone />
      020 3927 7690</h3>
      </div>
      <div className='acontainer'>
     
     
      </div>
      <div className='scontainer'>
      
      <div class='social-icons-top'>
      
      <div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
          </div>
      </div>
    


    </div>
    </>
  )
}
