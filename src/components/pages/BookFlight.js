import React, { useRef, useState, useEffect } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import "./bookflight.css"
import { useLocation, Link } from 'react-router-dom'
// import AllData from '../../dashboard/data/AllData';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import { Box, TextField, Button,Modal, Typography, Checkbox } from "@material-ui/core";
import DialogActions from '@mui/material/DialogActions';
import emailjs from '@emailjs/browser';

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


export default function BookFlight() {

  //this section for open popup
  const [open, setOpen] = React.useState(false);
  
  const handleClosepop = () => setOpen(false);


 const [openModal, setOpenModal] = useState(false);
 openModal?document.body.style.overflow = "hidden":document.body.style.overflow = "auto";
  const [flightsdata, setflightsData] = useState([]);

  const [Origin, setOrigin] = useState("")
  const [Desti, setDesti] = useState("")
  const [Classes, setClasses] = useState("")
  const [Airline, setAirline] = useState("")
  const [Adult, setAdult] = useState("")
  const [Child, setChild] = useState("")
  const [Infant, setInfant] = useState("")


  useEffect(() => {
    handleClickOpen();
  }, []);

  const { state } = useLocation();
    
  const handleClickOpen = (e) => {

    const updatedData = state.flightsdata.filter((curData) => {
      return curData.origin === state.From && curData.desti === state.To;

    })
    setflightsData(updatedData)

  };

      const handleClickOpenModal = (origin,desti,airline,classes,adult,child,infant) => {
         
        
         setOpenModal(true)
         setOrigin(origin)
         setDesti(desti)
         setClasses(classes)
         setAdult(adult)
         setChild(child)
         setInfant(infant)
         setAirline(airline)



}

const handleClose = ()=> {
           setOpenModal(false)
}

//this section for  email sending
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  handleClose();
  setOpen(true);
  emailjs.sendForm('service_irhbjqr', 'template_uzxn368', form.current, 'jb6ozAysKHkokdjXV')
    .then((result) => {


    }, (error) => {

    });
};

  return (
    <>
      <Navbar />
      <div className='bookflight-Container'>

        <h1 >Book Flight</h1>
       
      </div>
      <div className='bookFlight-Main'>
        {/* { flightsdata.length !== 0 && */}
        <div className="flight_Cards_Background">
          
          <div className="flight-Cards-Container">
            <h3 className='flight-info'>Flights Information</h3>
           
            <DialogContent>
              {flightsdata.length !== 0 && flightsdata.map((doc, index) => {

                return (


                  <div key={index} className='Card-Main-Container'>
                    <div className='Card-Left-Container'>
                      <div className='Left-Top'>
                        <h3>Airline</h3>
                        <h5>{doc.airline}</h5>
                        <hr/>
                      </div>
                      <div className='logo-container'><img className="cellImg" src={doc.img} alt="avatar" /></div>
                      <div className='Left-Time'>
                        <h4>Total Flight Duration</h4>

                      </div>
                      <div className='Left-Time-Time'>

                        <p>{doc.fduration}</p>
                      </div>
                    </div>
                    <div className='Card-Center-Container'>
                     <div className='departure-date-container'><h5> Departure Date: {state.Fromdate.toDateString()}</h5></div> 
                      <div className='From-Stop-To-Caontainer'>
                      <div className='Center-Departure1'>
                        <h4>Travel From</h4>
                      </div>
                      <div className='Center-Stop1'>
                      <h4>Stop Over</h4>
                      </div>
                      <div className='Center-Travel-To1'>
                      <h4>Travel To</h4>
                      </div>
                      </div>
                     <div className='From-Stop-To-Caontainer2'>
                      <div className='Center-Departure2'>
                        <h5>{doc.origin}</h5>
                      </div>
                      <div className='Center-Stop2'>
                        <h5>{doc.fstop}</h5>
                      </div>
                      <div className='Center-Travel-To2'>
                        <h5>{doc.desti}</h5>
                        
                      </div>
                      
                      </div>
                      <div className='Center-hr'>
                      <hr/>
                      </div>
                      <div className='return-Container'>
                      <div className='return-To'>
                        <h5>{doc.desti}</h5>
                        </div>
                        <div className='return-return'>
                          
                        <h5>Return Date: {state.Todate.toDateString()}</h5>
                      </div>
                      <div className='return-From'>
                        <h5>{doc.origin}</h5>
                      </div>
                      </div>
                      <div className='Center-Bottom-Bar'>
                        <h4 className='flightClass'>Flight Class:</h4>
                        <h4 className='flightClassB'>{doc.classes}</h4>
                                              </div>
                      </div>
                    <div className='Card-Right-Container'>
                  
                      <div className='Right-Fare-Adult'>
                        <h4>Adult:</h4>
                        <h3>₤{parseInt(doc.adult)*parseInt(state.Adult)}</h3>
                      </div>
                      <div className='Right-Fare-Child'>
                        <h4>Child:</h4>
                        <h3>₤{parseInt(doc.child)*parseInt(state.Child)}</h3>
                      </div>
                      <div className='Right-Fare-Infant'>
                        <h4>Infant:</h4>
                        <h3>₤{parseInt(doc.infant)*parseInt(state.Infant)}</h3>
                      </div>
                      <hr/>
                      <div className='Right-Fare-Total'>
                        <h4>Total Fare</h4>
                        
                        <h3>₤{parseInt(doc.adult)*parseInt(state.Adult)+parseInt(doc.child)*parseInt(state.Child)+parseInt(doc.infant)*parseInt(state.Infant)}</h3>
                      </div>


                      <Button className='btn' onClick={()=>{handleClickOpenModal(doc.origin,doc.desti,doc.airline,doc.classes,parseInt(doc.adult)*parseInt(state.Adult),parseInt(doc.child)*parseInt(state.Child),parseInt(doc.infant)*parseInt(state.Infant))}} >Book Now</Button>
                      <div className='number-Container'>
                      <h3>OR CALL</h3>
                    <h3>020 3927 7690</h3>
                      </div>
                    </div>
                   
                   
                  </div>

                )



              })}

              {flightsdata.length === 0 &&




                  <div className='Second-From'>
                    <h1>Oops, we did not found any data against your request.</h1>
                    <h2>Our team has been notified. We are on it!</h2>
                   <Link to='/' style={{textDecoration: 'none'}} > <Button  >Retry</Button></Link>

                  </div>


              }

            </DialogContent>
          </div>

        </div>

        {openModal && 
        <div className="modal">
          <div onClick={handleClose} className="overlay"></div>
          <div className="modal-content">
            <h2>Booking Details</h2>
            <button className="close-modal" onClick={handleClose}>
              CLOSE
            </button>
            <div className='srollable-Container'>
            <div className='model-flight-info'>
            
              <div className='airline-Name'>
              <p>Airline:</p>
              <div className='airline-name-container'> <p>{Airline}</p> </div>
            
              </div>
              <div className='Travel-From'>
              <p>Travel From:</p>
             <div className='from-container'> <p>{Origin}</p> </div>
              </div>
              <div className='Travel-To'>
              <p>Travel To:</p>
              <div className='To-container'> <p>{Desti}</p> </div>
              </div>
              <div className='Flight-Class'>
              <p>Class:</p>
              <div className='class-name-container'> <p>{Classes}</p> </div>
              </div>
              <div className='Adult-Fare'>
              <p>Adult Fare:</p>
              <p1>₤{Adult}</p1>
              </div>
              <div className='Child-Fare'>
              <p>Child Fare:</p>
              <p1>₤{Child}</p1>
              </div>
              <div className='Infant-Fare'>
              <p>Infant Fare:</p>
              <p1>₤{Infant}</p1>
              </div>
              <div className='Total-Fare'>
              <p>Total Fare:</p>
              <p1>₤{parseInt(Adult)+parseInt(Child)+parseInt(Infant)}</p1>
              </div>
              
             </div>
             <div className='hr-Container'><hr/></div>
             <form ref={form} onSubmit={sendEmail}>
             <div className='Input-Form-Container'>
              <div className='Input-Container'>
                <h3>Passenger Details</h3>
              </div>
              <div className='sub-Heading-Container'>
                <p>Please tell us who will be checking in must be 18 or older</p>
              </div>
              <DialogContent>
                <div className='F-name-Textfield-Container'>
                < input
                margin="dense"
                name="airline" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={Airline}
              />
               < input
                margin="dense"
                name="origin" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={Origin}
              />
               < input
                margin="dense"
                name="desti" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={Desti}
              />
               < input
                margin="dense"
                name="classes" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={Classes}
              />
               < input
                margin="dense"
                name="adult" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={Adult}
              />
               < input
                margin="dense"
                name="infant" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={Infant}
              />
              < input
                margin="dense"
                name="child" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={Child}
              />
               < input
                margin="dense"
                name="total" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={parseInt(Adult)+parseInt(Child)+parseInt(Infant)}
              />
              < input
                margin="dense"
                name="departure-date" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={state.Fromdate.toDateString()}
              />
              < input
                margin="dense"
                name="return-date" 
                label="First Name"
                type="hidden"
                fullWidth
                variant="outlined"
                value={state.Todate.toDateString()}
              />

               <div >
               <h5>Contact Name:</h5>
               </div>
               <div className='F-name-Textfield'>
                

                < TextField
                  required
                  autoFocus
                  margin="dense"
                  name="f_name"
                  label="First Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
               
                 </div>
                 </div>
                 <div className='L-name-Textfield'>
                < TextField
                  require
                  margin="dense"
                  name="l_name"
                  label="Last Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
                 </div>
                 <div className='Contact-Number-Container'>
               <div><h5>Contact Nunmber:</h5></div>
                 <div className='phone-Number-Textfield'>
                < TextField
                  required
                  margin="dense"
                  name="number"
                  label="Contact No"
                  type="number"
                  fullWidth
                  variant="outlined"
                />
                 </div>
                 </div>
                 <p className='email-above-p'>We ask for your mobile number so we can call or text you about changes to your itinerary, Are provide helpfull information about your trip.</p>
                <div className='email-above-hr'> <hr/></div>
                <di className='After-hr-Container'><p>Where should we send your confirmation?</p>
                <hr/>
                <p1>Please enter the email address where you would like to recieve your confirmation.</p1>
                </di>
                
                <div><h5>Email Address:</h5></div>
                
                <div className='email-container'>
                 
                <TextField

                  margin="dense"
                 
                  name='email'
                  label="Email"
                  type="Email"
                  fullWidth
                  variant="outlined"
                />
               </div>
              <hr/>
              <di className='Checkbox-Container'>
              <Checkbox   />
              <p>By selecting to complete this booking i acknowledge that i have read and accept the<Link to='/terms_conditions'> Terms & Conditions</Link></p>
              </di>
              </DialogContent>
             
              <DialogActions>
                <div className='last-btn'>
                <button className='last-button' type="submit" value="Send" onClick={sendEmail} >Complete Booking</button>
                
                </div>
                
              </DialogActions>
              </div>
              
              </form>
              </div>
              
          </div>
        </div>
       
      }
           
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


      <Footer />
    </>
  )
}
