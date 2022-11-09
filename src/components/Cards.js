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
      Presenting the most dependable travel solutions from London to the world over. We are trusted widely by people. Our<br/>
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
      
      <p1> Exclusive  deals for hundreds of destinations</p1>
      <br/>
      < CheckCircleIcon className='icons'/>
      <p1> 24/7 assistance by Travel Experts</p1>
      
      <br/>
      < CheckCircleIcon className='icons'/>
      <p1> Low Deposits</p1>
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
        <h3>•	Expert Travel Advice
</h3>
        <p>As one of the country’s leading holiday companies, we provide holidays worth getting excited for. Book your holiday with one of our expert travel agents today.

</p>
      </div>

      
    </div>

   </div>
   
  </div>
  
        
      <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Mauritius.jpeg'
              text='Combine swimming with dolphins and whale watching in Mauritius in a hassle-free combo tour'
              label='Mauritius'
              path='/services'
            />
            <CardItem
              src='images/Nairobi.jpeg'
              text='Enjoy a safari within sight of the city skyline.'
              label='Nairobi'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/logos.jpeg'
              text=' Nigeria’s largest city, sprawls inland from the Gulf of Guinea across Lagos Lagoon'
              label='Lagos'
              path='/services'
            />
            <CardItem
              src='images/Calgary.jpeg'
              text=' Spend a Day Outdoors in Fish Creek Park'
              label='Calgary'
              path='/products'
            />
            <CardItem
              src='images/Montego.jpeg'
              text='Visit Jamaicas fascinating Mystic Lagoon on a night cruise!'
              label='Montego Bay'
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
