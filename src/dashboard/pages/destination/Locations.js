import React,{useState, useEffect} from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./locations.css"
import AllData from '../../data/AllData';
import { Button } from '@material-ui/core';


export const Locations = () => {

  const [airport, setAirport] = useState("");
  const [airportcode, setAirportcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [fullplace, setFullplace] = useState("");
  const [error, setError] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (airport === "" || airportcode === "" || airportcode === "" || city === "" || country === "" || fullplace === "") {
      setError({ error: true, msg: "All fields are mandatory!" })
      console.log(error)
      return;
    }
    const newDesti = {
      airport,
      airportcode,
      city,
      country,
      fullplace,
      
    };
   
    try {
      
        await AllData.addDesti(newDesti);
        setError({ error: false, msg: "New Book added successfully!" });
      
    } catch (err) {
      setError({ error: true, msg: err.message });
    }

    airport("");
    airportcode("");
    city("");
    country("");
    fullplace("");
   
  };

  //getting data from database

  const [destidata, setdestiData] = useState([]);

  useEffect(() => {
    getDesti();
  }, []);

  const getDesti = async () => {
    const data = await AllData.getAllDesti();
    console.log(data.docs);
    setdestiData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //this section for delete handler

  const deleteHandler = async (id) => {
    await AllData.deleteDesti(id);
    getDesti();
  };






  return (
    <>
    <Topbar/>
    <div className='navL'>
      <Sidebar/>
    <div className='lContainer'>
    <div className='destination-Container'>
    <h1>Add Destinations</h1>

<form className='add-desti-form' onSubmit={handleSubmit}>
  <label className='a-label' for="airpot"><b>Airport:</b></label>
  <input type="text"   onChange={(e) => setAirport(e.target.value)}/>
  <label className='ac-label' for="airpot-code"><b>Airport Code:</b></label>
  <input type="text"  onChange={(e) => setAirportcode(e.target.value)} />
  <br/><br/>
  <label className='city-label' for="city"><b>City:</b></label>
  <input type="text" onChange={(e) => setCity(e.target.value)} />
  <label className='country-label' for="country"><b>Country:</b></label>
  <input type="text"  onChange={(e) => setCountry(e.target.value)} />
 <br/><br/>
 <label className='fpn-label' for="full-place-name"><b>Full Place Name:</b></label>
  <input type="text" onChange={(e) => setFullplace(e.target.value)} />
 
    <button type="submit" className="add-desti-btn">ADD</button>
</form>

    <div className='a-table-Container'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='user-tabel'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Airport</TableCell>
            <TableCell >Airport Code</TableCell>
            <TableCell>City</TableCell>
            <TableCell >Full Destination Name	</TableCell>
            <TableCell >Actions</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {destidata.map((doc, index) => {
            return(
              <TableRow
              key={doc.id}
            >
                <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{doc.airport}</TableCell>
              <TableCell >{doc.airportcode}</TableCell>
              <TableCell >{doc.city}</TableCell>
              <TableCell >{doc.fullplace}</TableCell>
              <TableCell align='left' >
                {/* <Button className='edit-btn' variant="outlined">Edit</Button> */}
                <Button variant="outlined" className='delete-btn'  onClick={(e) => deleteHandler(doc.id)} >Delete</Button>
              </TableCell>
              
            </TableRow>
            )
          })}
           
         
        </TableBody>
      </Table>
    </TableContainer>

    </div>
      </div>
    </div>
    </div>
    </>
  )
}
export default Locations;
