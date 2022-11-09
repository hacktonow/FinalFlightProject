import React,{useState, useEffect, useRef} from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import './addflight.css';
import AllData from '../../data/AllData';
import {useNavigate} from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export const AddFlight = () => {
  const[flightsdata, setFlightsData] = useState({
    origin:"",
    desti:"",
    airline:"",
    classes:"",
    adult:"",
    child:"",
    infant:"",
    fduration:"",
    fstop:"",
    img:"",

  });
  const [file, setFile] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [perc, setPerc] = useState (null);
  



// ths section for haninput
let name,value;
const handelChange = (e) =>{
   name= e.target.name;
   value = e.target.value;
   setFlightsData({...flightsdata,[name]: value})
}
 


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const  {origin, desti, airline, classes, adult, child, infant, fduration, fstop, img} = flightsdata;
    setError("");
    if (origin === "" || desti === "" || airline === "" ||  classes === "" || adult === "" || child === "" || infant === "" || fduration === "" || img === ""  ) {
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
      fstop,
      img,
    };
   
    
    try {
      
        await AllData.addFlights(newFlight);
        // navigate("/admin");
        
        setError({ error: false, msg: "Added successfully!" });
      console.log(error)
    } catch (err) {
      setError({ error: true, msg: err.message });
    }

   
   
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




//this is for airline data

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
    console.log(data.docs);
    setclassesData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
    



//this is for uploading image
//   useEffect(()=>{
//         const uploadFile = () =>{
//           const name = new Date().getTime() +file.name
//           const storageRef = ref(storage, file.name);
//           console.log(name)
//           const uploadTask = uploadBytesResumable(storageRef, file);


// uploadTask.on('state_changed',
//   (snapshot) => {
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     setPerc(progress)
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   },
//   (error) => {
//     console.log(error)
//   },
//   () => {
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       setFlightsData((prev)=> ({...prev, imgURL:downloadURL}))
//       console.log('File available at', downloadURL);
//     });
//   }
// );

//         };
//         file && uploadFile();
//   }, [file] );

//   console.log(flightsdata)
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
    <select  className='s-origin' value={flightsdata.origin} name="origin" form="addf-form-Container" onChange={handelChange}>
   
    <option value="selectairline">Select Origin</option>
    {destidata.map(ddata =>
      <option key={ddata.key} value={ddata.key}>{ddata.fullplace} </option>
    )};
    
    </select>
    <label className='s-destination-label' for='sairline'><b>Destination:</b></label>
    <select className='s-destination' id="destination" value={flightsdata.desti} name="desti" form="addf-form-Container"  onChange={handelChange} >
    
    <option value="selectdestination">Select Destination</option>
    {destidata.map(ddata =>
      <option key={ddata.key} value={ddata.key}>{ddata.fullplace}</option>
    )};
    
    </select>
    <br/><br/>
    <label className='s-airline-label' for='sairline'><b>Airline:</b></label>
    <select className='s-airline' id="airlines" value={flightsdata.airline} name="airline" form="addf-form-Container" onChange={handelChange}>
   
    <option >Select Airline</option>
    {airlinesdata.map(ddata =>
      <option key={ddata.key} value={ddata.key}>{ddata.airlines}</option>
    )};
   
    </select>
    
<label className='s-airline-c-label' for='s-airline-c'><b>Airline Class:</b></label>
    <select className='s-airline-c' id="airline-class" value={flightsdata.classes} name="classes" form="addf-form-Container"  onChange={handelChange}>
    
    <option value="select-airline-class">Select Class</option>
    {classesdata.map(cdata =>
      <option  key={cdata.key} value={cdata.key}>{cdata.classes}</option>
    )};
    
    </select>
    <br/><br/>
    <label className='i-adultfare-label' for='sadult-fare'><b>Adult Fare:</b></label>
    <input className='i-adultfare' type="text"  value={flightsdata.adult} name="adult" placeholder='Adult Fare' onChange={handelChange}></input>

    <label className='i-childfare-label' for='schild-fare'><b>Child Fare:</b></label>
    <input className='i-childfare' type="text" value={flightsdata.child}  name="child"  placeholder='Child Fare' onChange={handelChange}></input>
    <br/><br/>
    <label className='i-infantfare-label' for='sinfantfare'><b>Infant Fare:</b></label>
    <input  className='i-infantfare' type="text" value={flightsdata.infant} name="infant" placeholder='Infant Fare' onChange={handelChange}></input>

    <label className='i-flightduration-label' for='sflightduration'><b>Flight Duration:</b></label>
    <input className='i-flightduration' type="text" value={flightsdata.fduration}  name="fduration" placeholder='Flight Duration' onChange={handelChange}></input>
    <br/><br/>
    <label className='i-flightstop-label' for='sflightstop'><b>Stop:</b></label>
    <input className='i-flightstop' type="text" value={flightsdata.fstop} name="fstop" placeholder='Enter Stop' onChange={handelChange}></input>
   
    
  <label className='airline-logo-lable' for="img"><b>Airline Logo:</b></label>
  <input className='i-airline-logo' type="text" value={flightsdata.img} name="img" placeholder='Insert Url' onChange={handelChange}></input>

     {/*  <label className='fare-valid-till-label' for='sairline'><b>Fare Valid Till:</b></label>
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