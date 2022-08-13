import React from 'react';
import '../App.css';
import { Paper, makeStyles } from "@material-ui/core";
import FlightForm from './FlightForm';
import './HeroSection.css';







const useStyles = makeStyles(theme =>({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3),
   
    opacity: 0.8,
  }

}))

function HeroSection() {

   const classes = useStyles();

   
  return (
   <>
    <div className='hero-container'>
   
    <video src='/videos/airplane.mp4' autoPlay loop muted />
   
      <h1>Positively Impact</h1>
      <p>The Communities You Visit</p>
     
   
      
      <Paper className={classes.pageContent} > 
         <FlightForm/>
      </Paper>
    
           
    </div>
   
    </>
    
  );
}

export default HeroSection;
