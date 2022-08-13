import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {Grid, TextField,Typography, Button, makeStyles  } from "@material-ui/core";


// import Autocomplete from '@mui/material/Autocomplete';

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


  

// this section for button style
const useStyles =makeStyles({
 
btn:{
  backgroundColor:'#818582',
  color: "black",
  
  fontSize:20,
  height:50,
  marginTop:30,
  position:'relative',
  right:'-10px',
  border: '1px solid black',
  
'&:hover':{

  backgroundColor:'white',
  color: "black",
}

}

})
 // this section for data of form

const flightb = ['No', 'Yes' ];

const flightc = ['PIA', 'All', 'Air Berlin', 'Air Canada', 'Air China', 'Air Europa', 'Air Fiji', 'Air Farance', 'Air Malta ', 'Air Mauritius', 'Air New Zeeland','Air Transat', 'Alitalia', 'American Airlines', 'Arik Air', 'Austrian Air', 'Avianca', 'British Airways', 'Brussles Airlines', 'Cathay Pacific ', 'China Southern Airlines', 'Delta Airlines', 'Egypt Airway', 'Emirates Airlines', 'Ethiopian Airlines', 'EVA Airway', 'Etihad Airways', 'Finnair', 'Germanwings', 'Gulf Air ', 'Iberia', 'Jet Airways','Kenya Airways', 'KLM', 'Kuwait Airways', 'LOT polish', 'Lufthansa Airlines', 'Luxair', 'India Airlines', 'Malaysia Airlines', 'Middle East Airlines ', 'Oman Air', 'Philippine' , 'Qatar Airways', 'Royal Air Maroc', 'Royal Brunei Airlines ', 'Royal Jordanian Airline', 'Rwand Air', 'SAS', 'Saudi Arabian', 'South American Airlines ', 'SriLanka', 'TAM Regionais', 'TAP portugal', 'Thai Airways', 'Transaero ', 'Turkish Airlines', 'US Airways', 'Virgin Atlantic' ];

const flightd = ['Economy', 'Premium Economy' , 'Premium First','First','Business' ];

const flighte = ['01', '02' , '03','04', '05' , '06', '07','08', '09' , '10'];
const flightf = ['0', '01', '02' , '03','04', '05' , '06', '07','08' ];
const flightg = ['0', '01', '02' , '03','04', '05' , '06', '07','08' ];



export default function UserForm  ()  {

  // this section for date
  const [datevalue, setdate ] = React.useState(new Date('2022-08-18T21:11:54'));
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
   const [valuec, setValuec] = React.useState(flightc[0]);
   const [inputValuec, setInputValuec] = React.useState('');

   //  this section for class flight
   const [valued, setValued] = React.useState(flightd[0]);
   const [inputValued, setInputValued] = React.useState('');
   //  this section for Adult
   const [valuee, setValuee] = React.useState(flighte[0]);
   const [inputValuee, setInputValuee] = React.useState('');
    {/* this section for Child */}
   const [valuef, setValuef] = React.useState(flightf[0]);
   const [inputValuef, setInputValuef] = React.useState('');
   //this section ofr onfant
   const [valueg, setValueg] = React.useState(flightg[0]);
   const [inputValueg, setInputValueg] = React.useState('');
   

 //this section for useStyle

 const classes = useStyles()
 
  //this section for second form
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //this section for  email sending
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_irhbjqr', 'template_fhq54pi', form.current, 'jb6ozAysKHkokdjXV')
      .then((result) => {
        alert("Submited");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
  };


  return (

    //form 
  <>  <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Book Flight
      </Typography>

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
      options={top100Films}
      
      renderInput={(params) => <TextField {...params} label="City, Airport, Country"  variant='outlined'/>}
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
      options={top100Films}
     
      renderInput={(params) => <TextField {...params} label="City, Airport, Country"  variant='outlined'/>}
    />
        </Grid>
      {/* Departure select date */}
        <Grid item xs={6} sm={3} lg={2}>
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
          name="departure"
          renderInput={(params) => <TextField {...params}  variant='outlined'/>}
        />
        
        
        
      </Stack>
    </LocalizationProvider>
        
        </Grid>
         {/* Returning select date */}


        <Grid item xs={6} sm={3} lg={2}>
          <label>
            Returning
          </label>
          
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
         
          inputFormat="MM/dd/yyyy"
          value={datevalue2}
          onChange={dateChange2}
          name="departure"
          renderInput={(params) => <TextField {...params} variant='outlined'/>}
        />
        
        
        
      </Stack>
    </LocalizationProvider>
        
        </Grid>

          {/* Direct or indirect flight field */}

        <Grid item xs={3} sm={4} lg={2}>
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
        name="direct"
        
        renderInput={(params) => <TextField {...params}  variant='outlined'  />}
      />
    
        
        </Grid>

            {/* Select Flight */}


        <Grid item xs={4} sm={3} lg={2}>
        <Grid>
          <label>Select Flight</label>
        </Grid>
      
      <Autocomplete
        value={valuec}
        onChange={(event, newValue) => {
          setValuec(newValue);
        }}
        inputValue={inputValuec}
        onInputChange={(event, newInputValue) => {
          setInputValuec(newInputValue);
        }}
        id="controllable-states-demo"
        options={flightc}
        name="flight"
        renderInput={(params) => <TextField {...params} variant='outlined' />}
      />
    </Grid>

    {/* Select Flight Class */}


    <Grid item xs={5} sm={5} lg={3}>
        <Grid>
          <label>Class</label>
        </Grid>
      
      <Autocomplete
        value={valued}
        onChange={(event, newValue) => {
          setValued(newValue);
        }}
        inputValue={inputValued}
        onInputChange={(event, newInputValue) => {
          setInputValued(newInputValue);
        }}
        id="controllable-states-demo"
        options={flightd}
       
        renderInput={(params) => <TextField {...params}  
        name="Class"
        variant='outlined'
        />}
      />
    </Grid>

     {/* Select Adult */}


     <Grid item xs={3} sm={2}>
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
        name="adult"
        renderInput={(params) => <TextField {...params} variant='outlined' />}
      />
    </Grid>

      {/* this section for Child */}

    <Grid item xs={3} sm={2}>
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
        ame="adult"
        renderInput={(params) => <TextField {...params} variant='outlined' />}
      />
    </Grid>
     {/* this section for Infant */}

     <Grid item xs={3} sm={2}>
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
        ame="infant"
        renderInput={(params) => <TextField {...params} variant='outlined' />}
      />
    </Grid>
    <DialogActions>
<Button className={classes.btn} onClick={handleClickOpen }>Search Flight</Button>
    </DialogActions>
        </Grid>
       
    </React.Fragment>

    {/* this section for second form */}
    <form ref={form}  onSubmit={sendEmail} >
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fill Data</DialogTitle>
        <DialogContent>
          
          <TextField
          required
            autoFocus
            margin="dense"
            name="name"
            label="Full Name"
            type="name"
            fullWidth
            variant="outlined"
          />
          <TextField
            
            margin="dense"
            email="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            
            margin="dense"
            id="name"
            label="Contact NO"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            
            margin="dense"
            name="message"
            label="Message"
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         
          <Button onClick={handleClose}>Submit</Button>
          {/* <Button >Submit</Button> */}
        </DialogActions>
      </Dialog>
    </form>
    

    
    </>
  )
  
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];