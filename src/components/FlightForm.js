import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import { Grid, TextField, Button, makeStyles } from "@material-ui/core";


// import Autocomplete from '@mui/material/Autocomplete';
import './Flightform.css'
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Autocomplete from '@mui/material/Autocomplete';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AllData from '../dashboard/data/AllData';



// this section for button style
const useStyles = makeStyles({

  btn: {
    backgroundColor: '#818582',
    color: "black",

    fontSize: 20,
    height: 50,
    marginTop: 30,
    position: 'relative',
    right: '-10px',
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

  // this section for date
  const [datevalue, setdate] = React.useState(new Date('2022-08-18T21:11:54'));
  const dateChange = (newValue) => {
    setdate(newValue);
  };
  const [datevalue2, setdate2] = React.useState(new Date('2022-08-19T21:11:54'));
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
  const [valuee, setValuee] = React.useState(flighte[0]);
  const [inputValuee, setInputValuee] = React.useState('');

  {/* this section for Child */ }
  const [valuef, setValuef] = React.useState(flightf[0]);
  const [inputValuef, setInputValuef] = React.useState('');

  //this section ofr onfant
  const [valueg, setValueg] = React.useState(flightg[0]);
  const [inputValueg, setInputValueg] = React.useState('');


  //this section for geting all data of flights

  const [flightsdata, setflightsData] = useState([]);

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

  const [flyingFrom, setFlyingFrom] = React.useState("");
  const [flyingTo, setFlyingTo] = React.useState("");

   console.log(flightsdata.origin)
  //this section for second form
  const [open, setOpen] = React.useState(false);
  const [flightCards, setFlightCardsOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    console.log('flyingTo, flyingFrom: ', flyingTo, flyingFrom);
    e.preventDefault();
    
     flightsdata.map((doc, index) => {
      
      if(doc.origin === flyingFrom && doc.desti === flyingTo)
      {
        return (
          console.log("if conditions")
          
        )
      }
      else{
       return(
        setFlightCardsOpen(true)
        
       ) 
      }
      
     })

  };

  const handleClose = () => {
    setOpen(false);
    setFlightCardsOpen(false)
  };
  //this section for  email sending
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    handleClose();
    handleClicksnake();
    emailjs.sendForm('service_irhbjqr', 'template_fhq54pi', form.current, 'jb6ozAysKHkokdjXV')
      .then((result) => {

        console.log(result.text);
      }, (error) => {
        console.log(error.text);
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
            <Grid item xs={12} sm={6} lg={3}>

              <Grid>
                <label>Flying From</label>
              </Grid>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={flyingFrom}
                onChange={(e , newValue) => setFlyingFrom(newValue)}

                options={destidata.map((option) => option.fullplace)}
                renderInput={(params) => <TextField {...params} label="City, Airport, Country" name='flying_from' variant='outlined' />}
              />

            </Grid>
            {/* second text field */}

            <Grid item xs={12} sm={6} lg={3}>

              <Grid>
                <label>Flying To</label>
              </Grid>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={flyingTo}
                onChange={(e , newValue) => setFlyingTo(newValue)}

                options={destidata.map((option) => option.fullplace)}
                renderInput={(params) => <TextField {...params} label="City, Airport, Country" name='flying_to' variant='outlined' />}
              />
            </Grid>
            {/* Departure select date */}
            <Grid item xs={12} sm={3} lg={2}>
              <label>
                Departure
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    variant="outlined"
                    inputFormat="MM/dd/yyyy"
                    value={datevalue}
                    onChange={dateChange}

                    renderInput={(params) => <TextField {...params} name="departure_date" variant='outlined' />}
                  />



                </Stack>
              </LocalizationProvider>

            </Grid>
            {/* Returning select date */}


            <Grid item xs={12} sm={3} lg={2}>
              <label>
                Returning
              </label>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker

                    inputFormat="MM/dd/yyyy"
                    value={datevalue2}
                    onChange={dateChange2}

                    renderInput={(params) => <TextField {...params} name="returning_date" variant='outlined' />}
                  />



                </Stack>
              </LocalizationProvider>

            </Grid>

            {/* Direct or indirect flight field */}

            <Grid item xs={12} sm={4} lg={2}>
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


            </Grid>

            {/* Select Flight */}


            <Grid item xs={12} sm={3} lg={2}>
              <Grid>
                <label>Select Flight</label>
              </Grid>

              <Autocomplete
                // value={valuec}
                // onChange={(event, newValue) => {
                //   setValuec(newValue);
                // }}
                // inputValue={inputValuec}
                // onInputChange={(event, newInputValue) => {
                //   setInputValuec(newInputValue);
                // }}
                id="controllable-states-demo"
                options={airlinesdata.map((option) => option.airlines)}

                renderInput={(params) => <TextField {...params} label='Select Flight' name="flight" variant='outlined' />}
              />
            </Grid>

            {/* Select Flight Class */}


            <Grid item xs={12} sm={5} lg={3}>
              <Grid>
                <label>Class</label>
              </Grid>

              <Autocomplete
                // value={valued}
                // onChange={(event, newValue) => {
                //   setValued(newValue);
                // }}
                // inputValue={inputValued}
                // onInputChange={(event, newInputValue) => {
                //   setInputValued(newInputValue);
                // }}
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
                value={valuee}
                onChange={(event, newValue) => {
                  setValuee(newValue);
                }}
                inputValue={inputValuee}
                onInputChange={(event, newInputValue) => {
                  setInputValuee(newInputValue);
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
                value={valuef}
                onChange={(event, newValue) => {
                  setValuef(newValue);
                }}
                inputValue={inputValuef}
                onInputChange={(event, newInputValue) => {
                  setInputValuef(newInputValue);
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
                value={valueg}
                onChange={(event, newValue) => {
                  setValueg(newValue);
                }}
                inputValue={inputValueg}
                onInputChange={(event, newInputValue) => {
                  setInputValueg(newInputValue);
                }}
                id="controllable-states-demo"
                options={flightg}

                renderInput={(params) => <TextField {...params} name="infant" variant='outlined' />}
              />
            </Grid>

            <Button className={classes.btn} onClick={handleClickOpen}>Search Flight</Button>

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
                {/* <Button >Submit</Button> */}
              </DialogActions>
            </div>
          </div>}


            {/* this section flightcards */}


          {flightCards && <div className="flightCardsBackground">
            <div className="flightCardsContainer">
            <h3>Flights Information</h3>
              <div className="flighttitleCloseBtn">
                <button
                  onClick={handleClose}
                >
                  X
                </button>
               
              </div>
              <DialogContent>
               <div className='cardContainer'>
                <div className='flightname'>
                  <p>Lahore-Allama Iqbal intl.</p>
                  <hr/>
                  <p1>Karachi-Allama Iqbal intl.</p1>
                 
                </div>
                <div className='timePrice'>
                <p2>this section for time</p2>
                <p3>this section for price</p3>
                </div>

               </div>

            
               </DialogContent>
            </div>
          </div>}



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

