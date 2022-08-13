import React,{useState, useEffect} from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import "./userlist.css"
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { collection, getDocs, doc, deleteDoc  } from "firebase/firestore";
import { db } from '../../../firebase';
import { Button } from '@material-ui/core';
import AllData from '../../data/AllData';





export const Userlist = () => {

  const [userdata, setuserData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await AllData.getAllUsers();
    console.log(data.docs);
    setuserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await AllData.deleteUser(id);
    getUsers();
  };

 
  return (
    <>
    <Topbar/>
    <div className='navu'>
      <Sidebar/>
    <div className='uContainer'>
      <div className='userContainer'>
    <Link to='/register'>  <button >Add User</button> </Link>

    <div className='tableContainer'>
        
 

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='user-tabel'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Email</TableCell>
            <TableCell >Password</TableCell>
            <TableCell >Actions</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {userdata.map((doc, index) => {
            return(
              <TableRow
              key={doc.id}
            >
                <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{doc.email}</TableCell>
              <TableCell >{doc.password}</TableCell>
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
      </div>
    </div>
    </div>
    </>
  )
}
export default Userlist;
