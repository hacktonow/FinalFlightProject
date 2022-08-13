import React from 'react';

import FlightForm from '../FlightForm';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Topnav } from '../Topnav';
import './flights.css'
export default function Flights() {
  return (
   <>
   <Topnav/>
   <Navbar/>
   <div className='Top-Container'>
   <h1 >Cheap Flights</h1>
   </div>
 
<div className='flight-main-container'>
<div className='flight-form-iner'>
 <FlightForm/>
 </div>
 <div className='main-card-container'>
<h3 className='card-main-heading'>FIND YOUR IDEAL FLIGHT EXPERIENCE</h3>
<p className='card-sub-heading'>From early booking discounts to last minute price drops, Our cheap flights are unmatched. </p>
<div className='card-container'>
  <div className='f-card-1'>
  <div className='card-topbar'>
   <h4>Abuja</h4>
   <p>Abuja</p>
   <h3>£432 </h3>
   <img src='images/flights/cardicons/Emrit.png'/>
  </div>
  <button className='cards-button'>BOOK NOW </button>
  </div>
  <div className='f-card-2'>
    <div className='card-topbar'>
    <h4>Accra</h4>
   <p>Accra</p>
   <h3>£471 </h3>

   <img src='images/flights/cardicons/Turkish.png'/>
  </div>
  <button className='cards-button'>BOOK NOW </button>
    </div>
    <div className='f-card-3'>
    <div className='card-topbar'>
    <h4>Colombo</h4>
   <p>Colombo</p>
   <h3>£501 </h3>
   <img src='images/flights/cardicons/etehad copy.png'/>
  </div>
  <button className='cards-button'>BOOK NOW </button>
    </div>
    
    
</div>
<div className='card-container'>
  <div className='f-card-4'>
  <div className='card-topbar'>
   <h4>Entebbe</h4>
   <p>Entebbe</p>
   <h3>£389 </h3>
   <img src='images/flights/cardicons/Qatar_Airways.png'/>
  </div>
  <button className='cards-button'>BOOK NOW </button>
  </div>
  <div className='f-card-5'>
    <div className='card-topbar'>
    <h4>Freetown</h4>
   <p>Freetown</p>
   <h3>£558 </h3>

   <img src='images/flights/cardicons/KLM-Royal-Dutch-Airlines.png'/>
  </div>
  <button className='cards-button'>BOOK NOW </button>
    </div>
    <div className='f-card-6'>
    <div className='card-topbar'>
    <h4>Kathmandu</h4>
   <p>Kathmandu</p>
   <h3>£511 </h3>
   <img src='images/flights/cardicons/brussels-airlines.png'/>
  </div>
  <button className='cards-button'>BOOK NOW </button>
    </div>
    
    
</div>
<di className='below-cards'>
  <h3>Find Cheap Flights To Your Destination With Bliss Flights</h3>
  <p>As one of the UK’s best travel agency, Bliss Flights takes pride in itself by offering you cheap flights of top airlines to countless destinations. We are always in search of best travel packages, cheap deals, low-cost flight tickets, reasonable hotel accommodations, traveling transfers, transportation, and other offers that you can use for your ease of travel. <br/>
We understand the notion of finding cheapest air tickets, as it is something that is not easy to afford especially if you travel on a budget. Bliss Flights  presents you with all the flight deals that are offered exclusively by airlines on 
this page, so you can easily look for your desired flight and fly for less to your destination. For us, providing our clients with cheapest flights tickets is our utmost priority, and we work tirelessly to do that.
</p>
</di>

</div>
<div className='card2-container'>
  <div className='card2-1'>
    <h4>Low Fares, No Cares</h4>
    <p>Speak to one of our Bliss Flights consultants and we will find you a holiday deal that will save you money, and leave you with extra cash to spend while you’re away.  The discounts that Bliss Flights find are exclusive to us, and cannot be found elsewhere.</p>
  </div>
  <div className='card2-1'>
    <h4>Vision</h4>
    <p>“We strive to make a strong bond with our customers and provide the best options and opportunities for flights and holiday packages.”</p>
  </div>
  <div className='card2-1'>
    <h4>Mission</h4>
    <p>“To be a one-stop solution for all your travel needs.Inspire positive change for our planet by connecting travelers with local communities that provide immersive travel experiences that foster economic and social inclusiveness.”</p>
  </div>
</div>
<di className='end-container'>
  <h3>We Offer Cheap Flights & Discounted Fares that will get you off your feet</h3>
  <p>If it is a last minute flight ticket, or you are looking for the cheapest airline tickets for a month or two in advance, Bliss Flights offers a great platform for everyone to look for what they desire. We are a gateway for anyone who wants an inch-perfect holiday. Even if you just scroll down this page to check all the cheap international and domestic flights, these offers have all the potential to get you off your feet. <br/>
Whether you are looking for cheapest flights to Amsterdam to see all the cultural and historical museums, or you want to visit Dublin to get lucky, or even plan a romantic honeymoon to Paris with your dearly beloved, you just need to surf this page or contact us. We are always willing at any hour of the day, to help you find any cheap flights you are looking for. So fly for less with Bliss Flights and enhance your traveling experience with the best offers on the table for every traveler. This page is up-to-date with new deals, promotions, travel packages, and discounts that may also cover hotel rent, transfers, and transportation. So keep searching on this page thoroughly and find what suits you the most.

</p>
</di>

</div>

  <Footer/>
  </>
  )
}
