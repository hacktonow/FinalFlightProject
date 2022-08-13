import React,{useState, useEffect} from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import "./fClasses.css"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@material-ui/core';
import AllData from '../../data/AllData';


export const Fclasses = () => {

  const [classes, setClasses] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if ( classes === "") {
      setError({ error: true, msg: "All fields are mandatory!" })
      console.log(error)
      return;
    }
    const newClass = {
      classes, 
    };
    console.log(newClass)
   
    try {
      
        await AllData.addClasses(newClass);
        setError({ error: false, msg: "New Book added successfully!" });
      
    } catch (err) {
      setError({ error: true, msg: err.message });
    }
    classes("");
   
  };


  //getting data from database

  const [classesdata, setclassesData] = useState([]);

  useEffect(() => {
    getClass();
  }, []);

  const getClass = async () => {
    const data = await AllData.getAllClasses();
    console.log(data.docs);
    setclassesData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  //this section for delete handler

  const deleteHandler = async (id) => {
    await AllData.deleteClass(id);
    getClass();
  };

  return (
    <>
    <Topbar/>
    <div className='navC'>
      <Sidebar/>
    <div className='cContainer'>
    <div className='airline-Container'>
      <form onSubmit={handleSubmit} >
   <h2>Add Flight Class</h2>
    <br/>
    <input className='f-placeholder' type="text" placeholder="Enter Name"  required  onChange={(e) => setClasses(e.target.value)}/>
  
      <button type='submit' >Add </button>

    <div className='a-table-Container'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='user-tabel'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Class Name</TableCell>
            <TableCell >Actions</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {classesdata.map((doc, index) => {
            return(
              <TableRow
              key={doc.id}
            >
                <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{doc.classes}</TableCell>
              
              
              <TableCell align='left' >
                {/* <Button className='edit-btn' variant="outlined">Edit</Button> */}
                 <Button className='delete-btn' variant="outlined" onClick={(e) => deleteHandler(doc.id)} >Delete</Button> 
              </TableCell>
              
            </TableRow>
            )
          })}
           
         
        </TableBody> 
      </Table>
    </TableContainer>

    </div>
    </form>
      </div>
    </div>
    </div>
    </>
  )
}
export default Fclasses;
