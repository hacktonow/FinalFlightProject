import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import { Grid, TextField, Button, makeStyles} from "@material-ui/core";

import { Link,  useNavigate } from 'react-router-dom';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import Autocomplete from '@mui/material/Autocomplete';
import './Flightform.css'
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Autocomplete from '@mui/material/Autocomplete';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
//import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AllData from '../dashboard/data/AllData';
//import { DockSharp } from '@material-ui/icons';
//import BookFlight from './pages/BookFlight';
//import { id } from 'date-fns/locale';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
//import { TryOutlined } from '@mui/icons-material';



// this section for button style
const useStyles = makeStyles({

  btn: {
    backgroundColor: '#818582',
    color: "black",

    fontSize: 15,
    fontWeight:"bold",
    height: 50,
    marginTop: 35,
    position: 'relative',
    right: '-60px',
    border: '1px solid black',

    '&:hover': {

      backgroundColor: '#ff3c00',
      color: "white",
    }

  }

})
// this section for data of form

const flightb = ['No', 'Yes'];

// const flightc = ['', 'All', 'Air Berlin', 'Air Canada', 'Air China', 'Air Europa', 'Air Fiji', 'Air Farance', 'Air Malta ', 'Air Mauritius', 'Air New Zeeland','Air Transat', 'Alitalia', 'American Airlines', 'Arik Air', 'Austrian Air', 'Avianca', 'British Airways', 'Brussles Airlines', 'Cathay Pacific ', 'China Southern Airlines', 'Delta Airlines', 'Egypt Airway', 'Emirates Airlines', 'Ethiopian Airlines', 'EVA Airway', 'Etihad Airways', 'Finnair', 'Germanwings', 'Gulf Air ', 'Iberia', 'Jet Airways','Kenya Airways', 'KLM', 'Kuwait Airways', 'LOT polish', 'Lufthansa Airlines', 'Luxair', 'India Airlines', 'Malaysia Airlines', 'Middle East Airlines ', 'Oman Air', 'Philippine' , 'Qatar Airways', 'Royal Air Maroc', 'Royal Brunei Airlines ', 'Royal Jordanian Airline', 'Rwand Air', 'SAS', 'Saudi Arabian', 'South American Airlines ', 'SriLanka', 'TAM Regionais', 'TAP portugal', 'Thai Airways', 'Transaero ', 'Turkish Airlines', 'US Airways', 'Virgin Atlantic' ];

// const flightd = ['','Economy', 'Premium Economy' , 'Premium First','First','Business' ];

const flighte = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const flightf = ['0', '01', '02', '03', '04', '05', '06', '07', '08'];
const flightg = ['0', '01', '02', '03', '04', '05', '06', '07', '08'];



function FlightForm() {


  const navigate = useNavigate();

  // this section for date
  const [datevalue, setdate] = React.useState(new Date('mm/dd/yy'));
  const dateChange = (newValue) => {
    setdate(newValue);
  };
  const [datevalue2, setdate2] = React.useState(new Date('mm/dd/yy'));
  const dateChange2 = (newValue2) => {
    setdate2(newValue2);
  };
  // this section for Fight direct or indirect
  const [valueb, setValueb] = React.useState(flightb[0]);
  const [inputValueb, setInputValueb] = React.useState('');

  //  this section for select flight
  //  const [valuec, setValuec] = React.useState(flightc[0]);
  //  const [inputValuec, setInputValuec] = React.useState('');

  //  this section for class flight
  //  const [valued, setValued] = React.useState(flightd[0]);
  //  const [inputValued, setInputValued] = React.useState('');

  //  this section for Adult
  const [adult, setAdult] = React.useState(flighte[0]);
  const [inputValuee, setInputValuee] = React.useState('');

  {/* this section for Child */ }
  const [child, setChild] = React.useState(flightf[0]);
  const [inputValuef, setInputValuef] = React.useState('');

  //this section ofr onfant
  const [infant, setInfant] = React.useState(flightg[0]);
  const [inputValueg, setInputValueg] = React.useState('');


  //this section for geting all data of flights

  const [flightsdata, setflightsData] = useState([]);
  const [flyingFrom, setFlyingFrom] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [flyingTo, setFlyingTo] = React.useState("");
   
  // console.log("flyingfrom:",datevalue)
  // console.log("inputvalue:",datevalue2)



  useEffect(() => {
    getFlight();
  }, []);

  const getFlight = async () => {
    const data = await AllData.getAllFlights();

    setflightsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //this section for distinations

  const [destidata, setdestiData] = useState([]);

  useEffect(() => {
    getDesti();
  }, []);

  const getDesti = async () => {
    const data = await AllData.getAllDesti();

    setdestiData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  //this section for getting data of airlines

  const [airlinesdata, setairlinesData] = useState([]);

  useEffect(() => {
    getAirline();

  }, []);

  const getAirline = async () => {
    const data = await AllData.getAllAirlines();

    setairlinesData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  //this section for class of flights
  const [classesdata, setclassesData] = useState([]);

  useEffect(() => {
    getClass();
  }, []);

  const getClass = async () => {
    const data = await AllData.getAllClasses();

    setclassesData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };



  //this section for useStyle

  const classes = useStyles()

  


  //this section for second form
  const [open, setOpen] = React.useState(false);
  const[openBackdrop, setOpenBackdrop] = useState(false);
  const [flightCards, setFlightCardsOpen] = React.useState(false);

  const handleClickSecondOpen = (e) => {

    e.preventDefault();
    setFlightCardsOpen(false)
    setOpen(true)

  }
  const handleClickOpen = (e) => {

    e.preventDefault();
    
    setOpenBackdrop(true)

    const updatedData = flightsdata.filter((curData) => {
      return curData.origin == flyingFrom && curData.desti == flyingTo;
     

    })
    setTimeout(()=> {
      setOpenBackdrop(false)
      setflightsData(updatedData)
    setFlightCardsOpen(true)
      
    }, 2000)
    
  };

  const handleClose = () => {
    setOpen(false);
    setFlightCardsOpen(false);
    setFlyingFrom("");
    setFlyingTo("");
    setflightsData("");

  };
  //this section for  email sending
  
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    handleClose();
    
      navigate('/book-flight',{state:{From:flyingFrom, To: flyingTo, flightsdata: flightsdata}})
    
   

    emailjs.sendForm('service_irhbjqr', 'template_fhq54pi', form.current, 'jb6ozAysKHkokdjXV')
      .then((result) => {


      }, (error) => {

      });
  };

  // this section for snakbar

  const [opensnake, setOpensnak] = React.useState(false);

  const handleClicksnake = () => {
    setOpensnak(true);
  };
  const handleClosesnak = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnak(false);
  };

  return (

    //form
    <>
      <form ref={form} onSubmit={sendEmail}>
        <React.Fragment>

          <h3 className='form-heading'> Book Flight</h3>
          

          {/* container */}
          <Grid container spacing={2} >

            {/* first text field */}
            <Grid item xs={12} sm={3} lg={3}>

              <Grid>
                <label>Flying From</label>
              </Grid>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={flyingFrom}
                onChange={(e, newValue) => setFlyingFrom(newValue)}
                options={destidata.map((option) => option.fullplace.toString())}
                renderInput={(params) => <TextField {...params} 
                label="City, Airport, Country" name='flying_from' variant='outlined' />}
              />
            </Grid>
            {/* second text field */}

            <Grid item xs={12} sm={3} lg={3}>

              <Grid>
                <label>Flying To</label>
              </Grid>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={flyingTo}
                onChange={(e, newValue) => setFlyingTo(newValue)}

                options={destidata.map((option) => option.fullplace)}
                renderInput={(params) => <TextField {...params} label="City, Airport, Country" name='flying_to' variant='outlined' />}
              />
            </Grid>
            {/* Departure select date */}
            <Grid item xs={12} sm={2} lg={2}>
              <label>
                Departure
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <MobileDatePicker
                    variant="outlined"
                    
                    label="mm/dd/yyyy"
                    // inputFormat="MM/dd/yyyy"
                    value={datevalue}
                    onChange={dateChange}

                    renderInput={(params) => <TextField {...params}   name="departure_date" variant='outlined' />}
                  />



                </Stack>
              </LocalizationProvider>

            </Grid>
            {/* Returning select date */}


            <Grid item xs={12} sm={2} lg={2}>
              <label>
                Returning
              </label>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <MobileDatePicker

                  label="mm/dd/yyyy"
                    value={datevalue2}
                    onChange={dateChange2}

                    renderInput={(params) => <TextField {...params} name="returning_date" variant='outlined' />}
                  />



                </Stack>
              </LocalizationProvider>

            </Grid>

            {/* Direct or indirect flight field */}

            {/* <Grid item xs={12} sm={4} lg={2}>
              <Grid>
                <label>Direct Flight</label>
              </Grid>

              <Autocomplete
                value={valueb}
                variant="outlined"
                onChange={(event, newValue) => {
                  setValueb(newValue);
                }}
                inputValue={inputValueb}
                onInputChange={(event, newInputValue) => {
                  setInputValueb(newInputValue);
                }}
                id="controllable-states-demo"
                options={flightb}


                renderInput={(params) => <TextField {...params} name="direct" variant='outlined' />}
              />


            </Grid> */}

            {/* Select Flight */}


            <Grid item xs={12} sm={3} lg={2}>
              <Grid>
                <label>Select Flight</label>
              </Grid>

              <Autocomplete
                
                id="controllable-states-demo"
                options={airlinesdata.map((option) => option.airlines)}

                renderInput={(params) => <TextField {...params} label='Select Flight' name="flight" variant='outlined' />}
              />
            </Grid>

            {/* Select Flight Class */}


            <Grid item xs={12} sm={3} lg={3}>
              <Grid>
                <label>Class</label>
              </Grid>

              <Autocomplete
                
                id="controllable-states-demo"
                options={classesdata.map((option) => option.classes)}

                renderInput={(params) => <TextField label='Select Class' {...params}
                  name="class"
                  variant='outlined'
                />}
              />
            </Grid>

            {/* Select Adult */}


            <Grid item xs={4} sm={2}>
              <Grid>
                <label>Adult</label>
              </Grid>

              <Autocomplete
                value={adult}
                onChange={(event, newValue) => {
                  setAdult(newValue);
                }}

                id="controllable-states-demo"
                options={flighte}

                renderInput={(params) => <TextField {...params} name="adult" variant='outlined' />}
              />
            </Grid>

            {/* this section for Child */}

            <Grid item xs={4} sm={2}>
              <Grid>
                <label>Child</label>
              </Grid>

              <Autocomplete
                value={child}
                onChange={(event, newValue) => {
                  setChild(newValue);
                }}

                id="controllable-states-demo"
                options={flightf}

                renderInput={(params) => <TextField {...params} name="child" variant='outlined' />}
              />
            </Grid>
            {/* this section for Infant */}

            <Grid item xs={4} sm={2}>
              <Grid>
                <label>Infant</label>
              </Grid>

              <Autocomplete
                value={infant}
                onChange={(event, newValue) => {
                  setInfant(newValue);
                }}
                
                id="controllable-states-demo"
                options={flightg}

                renderInput={(params) => <TextField {...params} name="infant" variant='outlined'  />}
              />
            </Grid>
           
            <Button className={classes.btn} onClick={handleClickOpen}> Search Flight</Button>
            

          </Grid>




          {/* this section for second form */}

          {open && <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button
                  onClick={handleClose}
                >
                  X
                </button>
              </div>
              <DialogTitle>Please Provide Data</DialogTitle>

              <DialogContent>

                <TextField
                  required
                  autoFocus
                  margin="dense"
                  name="c_name"
                  label="Full Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
                <TextField

                  margin="dense"
                  label="Email Address"
                  type="text"
                  name="c_email"
                  fullWidth
                  variant="outlined"
                />
                <TextField

                  margin="dense"
                  id="name"
                  name='c_number'
                  label="Contact NO"
                  type="number"
                  fullWidth
                  variant="outlined"
                />
                <TextField

                  margin="dense"
                  name="c_message"
                  label="Message"
                  type="text"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  required
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>

                <button onClick={sendEmail} ><Link to="/book-flight" state={{From:flyingFrom, To: flyingTo, flightsdata: flightsdata }}   > send</Link> </button>
                
              </DialogActions>
            </div>
          </div>}

          <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
                
              >
                <CircularProgress color="inherit" />
              </Backdrop>

          {/* this section flightcards */}

         

          {flightCards && flightsdata.length !== 0 &&
      
          navigate('/book-flight' ,{state:{From:flyingFrom, To: flyingTo, flightsdata: flightsdata,setOpen:open, Adult:adult, Child:child, Infant:infant, Fromdate:datevalue, Todate:datevalue2 }})
        
    
         
          },
          {flightCards && flightsdata.length === 0 &&
           
          <div className="flightCardsBackground">
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button
                  onClick={handleClose}
                >
                  X
                </button>
              </div>
              <DialogTitle>Fill Data</DialogTitle>

              <DialogContent>

                  <TextField
                  
                    required
                    autoFocus
                    margin="dense"
                    name="c_name"
                    label="Full Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField

                    margin="dense"
                    label="Email Address"
                    type="text"
                    name="c_email"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField

                    margin="dense"
                    id="name"
                    name='c_number'
                    label="Contact NO"
                    type="number"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField

                    margin="dense"
                    name="c_message"
                    label="Message"
                    type="text"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    required
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>

                  <Button type="submit" value="Send" onClick={sendEmail}>Submit</Button>
                  
                </DialogActions>
              </div>
            </div>

          </div>  }
         
        </React.Fragment>
        
      </form>
      {/* this section for snakbar */}

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={opensnake}
        autoHideDuration={60}
        onClose={handleClose}
        message="Sumited"

        action={
          <React.Fragment >
            <Button color="secondary" size="small" onClick={handleClosesnak}>
              Close
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClosesnak}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />





    </>
  )

}
export default FlightForm;

