import React from 'react';
import '../../App.css';

import './aboutUs.css'


import Navbar from '../Navbar';
import Footer from '../Footer';
import { Topnav } from '../Topnav';


export default function AboutUs() {

  return (
  
 <>
 <Topnav/>
 <Navbar/>
 <div className='aboutus'>
  <h1 >About Us</h1>
  </div>
 
  <div className='about-container'>
   <div className='about-image'>
  
   </div>
    <div className='about-content'>
      <h1>About Bliss Flight</h1>
      <p1>
      Welcome to the world of Blessings where all your travel dreams come true! Bliss Flights is registered in England and Wales companies’ house with registration number 14056310. Our registered Office address is 5 Coppy Bridge Drive, Rochdale, England, OL16 3AQ. 
      All the flights and flight-inclusive holidays on this website are financially protected by the ATOL scheme as we are travel trade partner (agent) of ATOL Holder supplier. ATOL is a financial protection scheme for UK travel companies and over 20 million holidaymakers and travelers are protected each year.
       When you buy an ATOL protected flight or flight-inclusive package from us you will receive an ATOL Certificate. This lists what is financially protected, where you can get information on what this means for you and who to contact if things go wrong. For more information please see our booking term & Conditions.
        To find out more about ATOL protection and what travel arrangements are financially protected Please go to  <a href=" https://www.atol.org/about-atol" target="_blank"> https://www.atol.org/about-atol</a> 
       <br/>
       <br/>
       Bliss Flights provides the wide range of international and domestic accommodation even for the solo traveler..
        Bliss Flights gives you the chance of choosing best flights. 
        Bliss Flights makes sure that your travel experience is accommodated well with our best ever services and facilities in competitive prices.
         Bliss Flights is a group of skilled and dedicated travel professionals who are available to assist your travel management on every stop of your voyage.
          Bliss Flights happily ensure you about the best holiday locations whether you are searching for your honeymoon, family trip, business trip or fun filled solo holidays. 
          Bliss Flights opens a voice, melody and color for your eyes to see the paths of adventures. So experience the cultures and different people and different destinations across the sphere via Bliss Flights.
        <br/>
        <br/>
        You can call our experienced call center team any time to book a flight and to know about your flight details, we are here right at your service whenever you need us.
         So call us today and stop dreaming & start traveling with Bliss Flights Travel.
      </p1>
    </div>
  </div>
  <div className='main-box-container'> 
   <h1>Our Services</h1>
   <div className='box-container'>
    <div className='box'>
      <div className='icon'>
      <img src='/images/plan.png' alt="img" height={50} width={50}/>
      </div>
      <div className='content'>
        
        <h3>•Guaranteed Best Service</h3>
        <p>Customers depend on us for an authentic and reliable travel service</p>
        
      </div>

      
    </div>

    <div className='box'>
      <div className='icon'>
      <img src='/images/payment-security.png' alt="img1" height={50} width={50}/>
      </div>
      <div className='content'>
        <h3>• Payment  Protection</h3>
        <p>Provides a sense of security while booking with us</p>
      </div>  
    </div>

    <div className='box'>
      <div className='icon'>
      <img src='/images/price-assurance.png' alt="img2" height={50} width={50}/>
      </div>
      <div className='content'>
        <h3>•	Best Price Assurance</h3>
        <p>Best in industry prices after competitive comparisons for flights and accommodations</p>
      </div>

      
    </div>

   </div>
  </div>
  <div className='end-part'>
    <p>What We Offer</p>
    <p1>
    Take a business class flight to Paris or book a last minute ticket to Africa, 
    We promise you that the quality and services will not lack at any cost.
     Bliss Flights is offering you the best travel guidance along with some excellent airlines.
      It is a travel agency that offers discounted fares of the world's leading airlines and holiday packages.
       You will find your travel experience a relaxing one as your comfort is our priority and giving you 
       the best affordable and cheapest flight fares and hotel deals is our job.
        You will get an opportunity to unlock the cheapest flight fares from over 135 of the world’s leading airlines.
         Whether you are planning a long holiday or just a nearby vacation trip, or maybe you are looking for affordable tickets for your business tour, our 24/7 services and facilities are always available.
    <br/>
    <br/>
    We will make sure that your journey becomes an unforgettable memory and a joyous vacation trip.
     Bliss Flights does not compromise on quality as our main aim is to provide you with
      the best we have and the best you deserve, whether it is a longer journey or a nearby flight, 
      Bliss Flights will open all the doors of our excellent services and best airline fares and 
      you will find us more enthusiastic to provide you with the best services for sure. We are here
       to ensure that your travel plan becomes a stress free one and we promise to fulfill your dreams 
       of traveling just as our name says. Our best services are available throughout the year, any day
        of the month, and any minute of the week.
    </p1>
  </div>
  <Footer/>
 </>
  )

}
