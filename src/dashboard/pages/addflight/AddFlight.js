import React,{useState, useEffect} from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import './addflight.css';
import AllData from '../../data/AllData';
import {useNavigate} from 'react-router-dom';

export const AddFlight = () => {
  
  const [origin, setOrigin] = useState("");
  const [desti, setDesti] = useState("");
  const [airline, setAirline] = useState("");
  const [classes, setClasses] = useState("");
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  const [infant, setInfant] = useState("");
  const [fduration, setFduration] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (origin === "" || desti === "" || airline === "" || classes === "" || adult === "" || child === "" || infant === "" || fduration === "") {
      setError({ error: true, msg: "All fields are mandatory!" })
      console.log(error)
      
      return;
    }
    const newFlight = {
      
      origin,
      desti,
      airline,
      classes,
      adult,
      child,
      infant,
      fduration,
      
    };
   
   
   
   
    try {
      
        await AllData.addFlights(newFlight);
        navigate("/admin");
        setError({ error: false, msg: "Added successfully!" });
      console.log(error)
    } catch (err) {
      setError({ error: true, msg: err.message });
    }

    origin("");
    desti("");
    airline("");
    classes("");
    adult("");
    child("");
    infant("");
    fduration("");
   
  };




  //this section for distinations

  const [destidata, setdestiData] = useState([]);

  useEffect(() => {
    getDesti();
  }, []);

  const getDesti = async () => {
    const data = await AllData.getAllDesti();
    console.log(data.docs);
    setdestiData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };




//this is for airline data

  const [airlinesdata, setairlinesData] = useState([]);
  useEffect(() => {
    getAirline();
  }, []);
  
  const getAirline = async () => {
    const data = await AllData.getAllAirlines();
    console.log(data.docs);
    setairlinesData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //this section for class of flights
  const [classesdata, setclassesData] = useState([]);

  useEffect(() => {
    getClass();
  }, []);

  const getClass = async () => {
    const data = await AllData.getAllClasses();
    console.log(data.docs);
    setclassesData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
    
  return (
    <>
   <Topbar/>
   <div className='navaddf'>
   <Sidebar/>
   <div className='add-f-Container'>
   <h1>Add Flight</h1>
   <div className='addf-form-Container'>
   <p><b>Please fill in this form to Add an Flight.</b></p>
   <hr/>
   <form onSubmit={handleSubmit} >
  
    <label className='s-origin-label' for='sorigin'><b>Origin:</b></label>
    <select  className='s-origin' name="origin" form="addf-form-Container" onChange={(e) => setOrigin(e.target.value)}>
   
    <option value="selectairline">Select Origin</option>
    {destidata.map(ddata =>
      <option key={ddata.key} value={ddata.key}>{ddata.fullplace} </option>
    )};
    
    </select>
    <label className='s-destination-label' for='sairline'><b>Destination:</b></label>
    <select className='s-destination' id="destination" name="s-destination-list" form="addf-form-Container"  onChange={(e) => setDesti(e.target.value)} >
    
    <option value="selectdestination">Select Destination</option>
    {destidata.map(ddata =>
      <option key={ddata.key} value={ddata.key}>{ddata.fullplace}</option>
    )};
    
    </select>
    <br/><br/>
    <label className='s-airline-label' for='sairline'><b>Airline:</b></label>
    <select className='s-airline' id="airlines" name="airlinelist" form="addf-form-Container" onChange={(e) => setAirline(e.target.value)}>
   
    <option >Select Airline</option>
    {airlinesdata.map(adata =>
      <option key={adata.key} value={adata.key}>{adata.airlines}</option>
    )};
   
    </select>
    
<label className='s-airline-c-label' for='s-airline-c'><b>Airline Class:</b></label>
    <select className='s-airline-c' id="airline-class" name="class-list" form="addf-form-Container"  onChange={(e) => setClasses(e.target.value)}>
    
    <option value="select-airline-class">Select Class</option>
    {classesdata.map(cdata =>
      <option  key={cdata.key} value={cdata.key}>{cdata.classes}</option>
    )};
    
    </select>
    <br/><br/>
    <label className='i-adultfare-label' for='sadult-fare'><b>Adult Fare:</b></label>
    <input className='i-adultfare' type="text"  name="adult-fare" placeholder='Adult Fare' onChange={(e) => setAdult(e.target.value)}></input>

    <label className='i-childfare-label' for='schild-fare'><b>Child Fare:</b></label>
    <input className='i-childfare' type="text"  name="child-fare" placeholder='Child Fare' onChange={(e) => setChild(e.target.value)}></input>
    <br/><br/>
    <label className='i-infantfare-label' for='sinfantfare'><b>Infant Fare:</b></label>
    <input  className='i-infantfare' type="text"  name="infant-fare" placeholder='Infant Fare' onChange={(e) => setInfant(e.target.value)}></input>

    <label className='i-flightduration-label' for='sflightduration'><b>Flight Duration:</b></label>
    <input className='i-flightduration' type="text"  name="flight-duration" placeholder='Flight Duration' onChange={(e) => setFduration(e.target.value)}></input>
    <br/><br/>
    {/* <label className='fare-valid-from-label' for='sairline'><b>Fare Valid Form:</b></label>
    <select className='fare-valid-from' id="airlines" name="airlinelist" form="addf-form-Container">
    <option value="selectairline">Fare Valid Form</option>
    </select>
    <label className='fare-valid-till-label' for='sairline'><b>Fare Valid Till:</b></label>
    <select className='fare-valid-till' id="airlines" name="airlinelist" form="addf-form-Container">
    <option value="selectairline">Fare Valid Till</option>
    </select>
    <br/><br/>
    <label className='stop1-label' for='sairline'><b>Stop 1:</b></label>
    <select className='stop1'  id="airlines" name="airlinelist" form="addf-form-Container">
    <option value="selectairline">None</option>
    </select>
    <label className='stop2-label' for='sairline'><b>Stop 2:</b></label>
    <select className='stop2' id="airlines" name="airlinelist" form="addf-form-Container">
    <option value="selectairline">None</option>
    </select> */}
    <br/><br/>
  <button className='add-flight-btn' type='submit' >Submit</button>
    
   </form>
   </div>

   </div>

   </div>
  
  
 

    </>
  )
}
export default AddFlight;