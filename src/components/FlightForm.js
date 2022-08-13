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
        console.log("else condtions")
        
       ) 
      }
      
     })

  };

  const handleClose = () => {
    setOpen(false);
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

// airpot data
const airports = [

  { label: 'London, All Airports [LON], United Kingdom' },
  { label: 'London, London Gatwick Arpt [LGW], United Kingdom' },
  { label: 'London, London Heathrow Arpt [LHR], United Kingdom' },
  { label: 'London, London Stansted Arpt [STN], United Kingdom' },
  { label: 'London, Luton Arpt [LTN], United Kingdom' },
  { label: 'London, London City Arpt [LCY], United Kingdom' },
  { label: 'London, Ebbsfleet Intl [XQE], United Kingdom' },
  { label: 'London, Ashford Intl [QDH], United Kingdom' },
  { label: 'Islamabad, Islamabad Intl [ISB], Pakistan' },
  { label: 'Karachi, Quaid E Azam International [KHI], Pakistan' },
  { label: 'Lahore, Lahore Arpt [LHE], Pakistan' },
  { label: 'Anaa Airport, Anaa, Tuamotus' },
  { label: 'Arrabury Airport, Queensland, Australia' },
  { label: 'El Arish International Airport, Egypt' },
  { label: 'London, All Airports [LON], United Kingdom' },
  { label: 'London, London Gatwick Arpt [LGW], United Kingdom' },
  { label: 'London, London Heathrow Arpt [LHR], United Kingdom' },
  { label: 'London, London Stansted Arpt [STN], United Kingdom' },
  { label: 'London, Luton Arpt [LTN], United Kingdom' },
  { label: 'London, London City Arpt [LCY], United Kingdom' },
  { label: 'London, Ebbsfleet Intl [XQE], United Kingdom' },
  { label: 'London, Ashford Intl [QDH], United Kingdom' },
  { label: 'Manchester, Manchester Intl [MAN], United Kingdom' },
  { label: 'Birmingham, Birmingham Intl Arpt [BHX], United Kingdom' },
  { label: 'Edinburgh, Edinburgh Arpt [EDI], United Kingdom' },
  { label: 'Glasgow, Glasgow Intl [GLA], United Kingdom' },
  { label: 'Glasgow, Prestwick Arpt [PIK], United Kingdom' },
  { label: 'Bristol, Bristol Intl Arpt [BRS], United Kingdom' },
  { label: 'Newcastle, Newcastle Arpt [NCL], United Kingdom' },
  { label: 'Liverpool, Liverpool Arpt [LPL], United Kingdom' },
  { label: 'Leeds, Leeds Bradford Arpt [LBA], United Kingdom' },
  { label: 'Nottingham Uk, East Midlands Arpt [EMA], United Kingdom' },
  { label: 'Exeter, Exeter Arpt [EXT], United Kingdom' },
  { label: 'Aberdeen, Aberdeen Airport [ABZ], United Kingdom' },
  { label: 'Lagos, Murtala Muhammed Arpt [LOS], Nigeria' },
  { label: 'Abuja, Abuja Intl [ABV], Nigeria' },
  { label: 'Port Harcourt, Port Harcourt Arpt [PHC], Nigeria' },
  { label: 'Kano, Aminu Kano Intl Arpt [KAN], Nigeria' },
  { label: 'Enugu, Enugu [ENU], Nigeria' },
  { label: 'Accra, Kotoka Airport [ACC], Ghana' },
  { label: 'Nairobi, Jomo Kenyatta Intl [NBO], Kenya' },
  { label: 'Mombasa, Moi Intl [MBA], Kenya' },
  { label: 'Lamu, Lamu Arpt [LAU], Kenya' },
  { label: 'Entebbe, Entebbe Airport [EBB], Uganda' },
  { label: 'Toronto, Lester B Pearson Intl [YYZ], Canada' },
  { label: 'Calgary, Calgary Intl Arpt [YYC], Canada' },
  { label: 'Vancouver, Vancouver Intl Arpt [YVR], Canada' },
  { label: 'Montreal, Pierre Elliott Trudeau Intl Arpt [YUL], Canada' },
  { label: 'Ottawa, Ottawa Intl Arpt [YOW], Canada' },
  { label: 'New York, John F Kennedy Intl [JFK], United States of America' },
  { label: 'New York, Newark Intl Arpt [EWR], United States of America' },
  { label: 'New York, All Airports [NYC], United States of America' },
  { label: 'Seattle, Seattle Tacoma Intl Arpt [SEA], United States of America' },
  { label: 'Miami, Miami Intl [MIA], United States of America' },
  { label: 'Orlando, Orlando Intl Arpt [MCO], United States of America' },
  { label: 'Chicago, A O Hare Intl [ORD], United States of America' },
  { label: 'Los Angeles, Los Angeles Intl Arpt [LAX], United States of America' },
  { label: 'Kingston, Norman Manly Arpt [KIN], Jamaica' },
  { label: 'Montego Bay, Sangster Arpt [MBJ], Jamaica' },
  { label: 'Port of Spain, Piarco Arpt [POS], Trinidad And Tobago' },
  { label: 'Dhaka, Shahjalal International Airport [DAC], Bangladesh' },
  { label: 'Ahmedabad, Ahmedabad Arpt [AMD], India' },
  { label: 'Bengaluru, Bengaluru International airport [BLR], India' },
  { label: 'Chennai, Chennai Arpt [MAA], India' },
  { label: 'Mumbai, Chhatrapati Shivaji Intl [BOM], India' },
  { label: 'Chandigarh, Chandigarh Arpt [IXC], India' },
  { label: 'Delhi, Delhi Indira Gandhi Intl [DEL], India' },
  { label: 'Kolkata , Netaji Subhas Chandra Bose Intl [CCU], India' },
  { label: 'Hyderabad, Rajiv Gandhi Intl Arpt Shamshabad [HYD], India' },
  { label: 'Kathmandu, Tribuvan Arpt [KTM], Nepal' },
  { label: 'Colombo, Bandaranaike Intl Arpt [CMB], Sri Lanka' },
  { label: 'Manila, Ninoy Aquino Intl [MNL], Philippines' },
  { label: 'Cebu City, Cebu Intl [CEB], Philippines' },
  { label: 'Angeles City, Clark International Arpt [CRK], Philippines' },
  { label: 'Bangkok, Bangkok Intl Arpt [BKK], Thailand' },
  { label: 'Bangkok, Don Mueang International [DMK], Thailand' },
  { label: 'Phuket, Phuket Intl Airport [HKT], Thailand' },
  { label: 'Beijing, Beijing Capital Arpt [PEK], China' },
  { label: 'Guangzhou, Baiyun Airport [CAN], China' },
  { label: 'Shanghai, Pu Dong Arpt [PVG], China' },
  { label: 'Shenzhen, Shenzhen Arpt [SZX], China' },
  { label: 'Sialkot, Sialkot Arpt [SKT], Pakistan' },
  { label: 'Kabul, Khwaja Rawash Arpt [KBL], Afghanistan' },
  { label: 'Moscow, Sheremetyevo Arpt [SVO], Russian Federation' },
  { label: 'Moscow, Domodedovo Arpt [DME], Russian Federation' },
  { label: 'Moscow, Vnukovo Arpt [VKO], Russian Federation' },
  { label: 'St Petersburg, Pulkovo Airport [LED], Russian Federation' },
  { label: 'Kiev, Borispol Arpt [KBP], Ukraine' },
  { label: 'Kiev, Zhulhany Arpt [IEV], Ukraine' },
  { label: 'Istanbul, Ataturk Arpt [IST], Turkey' },
  { label: 'Istanbul, Sabiha Gokcen Arpt [SAW], Turkey' },
  { label: 'Izmir, Adnan Menderes Airport [ADB], Turkey' },
  { label: 'Dubai, Dubai Intl Arpt [DXB], United Arab Emirates' },
  { label: 'Dubai, Al Maktoum Intl Arpt [DWC], United Arab Emirates' },
  { label: 'Abu Dhabi, Dhabi Intl Arpt [AUH], United Arab Emirates' },
  { label: 'Doha, Doha International Arpt [DOH], Qatar' },
  { label: 'Kuwait, Kuwait Intl [KWI], Kuwait' },
  { label: 'Muscat, Seeb Intl [MCT], Oman' },
  { label: 'Bahrain, Bahrain Intl Arpt [BAH], Bahrain' },
  { label: 'Riyadh, King Khaled Intl [RUH], Saudi Arabia' },
  { label: 'Jeddah, Jeddah Intl [JED], Saudi Arabia' },
  { label: 'Paris, Charles De Gaulle Intl Arpt [CDG], France' },
  { label: 'Paris, Orly Arpt [ORY], France' },
  { label: 'Nice, Cote D Azur Arpt [NCE], France' },
  { label: 'Marseille, Marseille Provence Arpt [MRS], France' },
  { label: 'Amsterdam, Schiphol Arpt [AMS], Netherlands' },
  { label: 'Frankfurt, Frankfurt Intl [FRA], Germany' },
  { label: 'Lisbon, Lisboa [LIS], Portugal' },
  { label: 'Rome, Fiumicino Arpt [FCO], Italy' },
  { label: 'Berlin, Berlin Brandenburg Airport [BER], Germany' },
  { label: 'Adelaide, Adelaide Arpt [ADL], Australia' },
  { label: 'Vienna, Vienna Intl Arpt [VIE], Austria' },
  { label: 'Salzburg, W A Mozart Arpt [SZG], Austria' },
  { label: 'Zurich, Zurich Airport [ZRH], Switzerland' },
  { label: 'Geneva, Geneve Cointrin [GVA], Switzerland' },
  { label: 'Warsaw, Warsaw Intl Arpt [WAW], Poland' },
  { label: 'Freetown, Lungi Intl Arpt [FNA], Sierra Leone' },
  { label: 'Banjul, Yundum Intl Arpt [BJL], The Gambia' },
  { label: 'Mauritius, Plaisance Arptt [MRU], Mauritius' },
  { label: 'Kuala Lumpur, Kuala Lumpur International Arpt [KUL], Malaysia' },
  { label: 'Bandar Seri Begawan, Brunei Intl Arpt [BWN], Brunei' },
  { label: 'Denpasar Bali, Ngurah Rai Arpt [DPS], Indonesia' },
  { label: 'Cape Town, Cape Town International [CPT], South Africa' },
  { label: 'Durban, Durban International [DUR], South Africa' },
  { label: 'Johannesburg, Johannesburg International [JNB], South Africa' },
  { label: 'Sydney, Sydney Kingsford Smith Arpt [SYD], Australia' },
  { label: 'Melbourne, Tullamarine Arpt [MEL], Australia' },
  { label: 'Brisbane, Brisbane Arpt [BNE], Australia' },
  { label: 'Harare, Harare Arpt [HRE], Zimbabwe' },
  { label: 'Kigali, Kayibanda Arpt [KGL], Rwanda' },
  { label: 'Cairo, Cairo Intl Arpt [CAI], Egypt' },
  { label: 'Casablanca, Mohamed V Arpt [CMN], Morocco' },
  { label: 'Addis Ababa, Bole Airport [ADD], Ethiopia' },
  { label: 'Brussels, Brussels National Arpt [BRU], Belgium' },



];