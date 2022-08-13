import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import{makeStyles} from '@material-ui/core'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const useStyles = makeStyles(theme =>(
  {
    title:{
      fontFamily: 'Swis721 BT',
      fontSize:"20px",
     
    },
  }
));

function Cards() {
 
  const classes = useStyles();
  return (
    <>
    <div className='cards'>
      
      <div className='card-middle'>
      <div className='card-middle-left'>
      <h2>Why our customers love Us?</h2>
      <p>
      Presenting the most dependable. Travel solutions from London to the world over. We are trusted widely by people. Our<br/>
customers can completely depend on us for an end to end travel solutions, while all they need to do is pack their bags and arrive in style!

      </p>
      
      <h3>Why book with Bliss Flights?</h3>
      <div className='card-middle-left-p1'>
      < CheckCircleIcon className='icons'/>
      <p1> Price Match Guarantee*</p1>
      <br/>
      < CheckCircleIcon className='icons'/>
      <p1> No fee on credit & debit card transactions</p1>
      <br/>
      < CheckCircleIcon className='icons'/>
      
      <p1> Exlusive deals for hundreds of destinations</p1>
      <br/>
      < CheckCircleIcon className='icons'/>
      <p1> 24/7 assistance by Travel Experts</p1>
      
      <br/>
      < CheckCircleIcon className='icons'/>
      <p1> Low Deposites</p1>
      </div>
          </div>
          <div className='card-middle-right'>
          <h3>*with in 24hrs of booking</h3>
          
          </div>
          </div>
     
        {/* this section for cards */}
      
      <div className='cards__container'>
      <h2>BOOK YOUR HOLIDAY WITH COMPLETE CONFIDENCE</h2>
      <div className='home-box-container'> 
   
   <div className='box-container'>
    <div className='box'>
      <div className='icon'>
      <img src='/images/plan.png' height={50} width={50}/>
      </div>
      <div className='content'>
        
        <h3>• Hassle-free Booking</h3>
        <p>Bliss Flights is the UK's largest independent travel agent. Whether you'd like a short UK break, a sunny package holiday, an all inclusive getaway or something else entirely, our team will help you book the holiday of your dreams.

</p>
        
      </div>

      
    </div>

    <div className='box'>
      <div className='icon'>
      <img src='/images/location.png' height={50} width={50}/>
      </div>
      <div className='content'>
        <h3>• Trusted Travel Agents in UK
</h3>
        <p>Our Peace of Mind Guarantee means you can enjoy flexible, secure holidays, with free amendments up to 14 days before your departure date (Fare Diff Applicable).

</p>
      </div>  
    </div>

    <div className='box'>
      <div className='icon'>
      <img src='/images/man.png' height={50} width={50}/>
      </div>
      <div className='content'>
        <h3>•	BExpert Travel Advice
</h3>
        <p>As one of the country’s leading holiday companies, we provide holidays worth getting excited for. Book your holiday with one of our expert travel agents today.

</p>
      </div>

      
    </div>

   </div>
   
  </div>
  <div className='end-img-container'>
      <div className='image-sos'>
        
      </div>
     </div>
        
      <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
        
      </div>
     
     
    </div>
    
    </>
  );
}

export default Cards;
