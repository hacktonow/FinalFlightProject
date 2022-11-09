import React,{useState, useEffect} from 'react'
import { Sidebar } from './sidebar/Sidebar'
import Topbar from './topbar/Topbar'
import "./admin.css"
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AllData from './data/AllData';
import { Button } from '@material-ui/core';

export const Admin = () => {

  const [flightsdata, setflightsData] = useState([]);

  useEffect(() => {
    getFlight();
  }, []);

  const getFlight = async () => {
    const data = await AllData.getAllFlights();
    
    setflightsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

   //this section for delete handler

   const deleteHandler = async (id) => {
    await AllData.deleteFlight(id);
    getFlight();
  };



 


  return (
    <>
       <Topbar/>
    <div className='nav'>
    <Sidebar/>
    <div className='admin'>
    <div className='userContainer'>
    <Link to='/addflight'>  <button >Add Flight</button> </Link>
    </div>
    <div className='a-table-Container'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='user-tabel'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Airline Logo</TableCell>
            <TableCell >Airline Name</TableCell>
            <TableCell >Origin</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell >Stop</TableCell>
            <TableCell >Class	</TableCell>
            <TableCell >Adult Fare</TableCell>
            <TableCell >Child Fare</TableCell>
            <TableCell >Infant Fare</TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Actions</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {flightsdata.map((doc, index) => {
            return(
              <TableRow
              key={doc.id}
            >
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left"><div className='img-container'><img className="cellImg" src={doc.img} alt="avatar" /></div></TableCell>
                
              <TableCell align="left">{doc.airline}</TableCell>
              <TableCell >{doc.origin}</TableCell>
              <TableCell >{doc.desti}</TableCell>
              <TableCell>{doc.fstop}</TableCell>
              <TableCell >{doc.classes}</TableCell>
              <TableCell >{doc.adult}</TableCell>
              <TableCell >{doc.child}</TableCell>
              <TableCell >{doc.infant}</TableCell>
              <TableCell >{doc.fduration}</TableCell>
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
  

    
    </>
   
    
   
  )
}
export default Admin

