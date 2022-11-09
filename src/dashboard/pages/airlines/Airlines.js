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
import { Button } from '@material-ui/core';
import "./airlines.css";
import AllData from '../../data/AllData';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();


const Airline = () => {


  // const [file, setFile] = useState("")
  const [airlines, setAirlines] = useState("");
  const [error, setError] = useState("");
  const [perc, setPerc] = useState (null);


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
//       setAirlines((prev)=> ({...prev, img:downloadURL}))
//       console.log('File available at', downloadURL);
//     });
//   }
// );

//         };
//         file && uploadFile();
//   }, [file] );

//   console.log(airlines)

  // ths section for haninput
  
  // this section for sumiting dtaa

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if ( airlines === "") {
      setError({ error: true, msg: "All fields are mandatory!" })
      console.log(error)
      return;
    }
    const newAirline = {
      airlines,

    };


    try {

        await AllData.addAirlines(newAirline);
        setError({ error: false, msg: "New Book added successfully!" });
        setAirlines("")

    } catch (err) {
      setError({ error: true, msg: err.message });
    }
    setAirlines("");


  };

//getting data from database

const [airlinesdata, setairlinesData] = useState([]);

useEffect(() => {
  getAirline();
}, []);

const getAirline = async () => {
  const data = await AllData.getAllAirlines();

  setairlinesData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

 //this section for delete handler

 const deleteHandler = async (id) => {
  await AllData.deleteAirline(id);
  getAirline();
};


  return (
   <>
  <Topbar/>
   <div className='navA'>
      <Sidebar/>
    <div className='aContainer'>
    <div className='airline-Container'>
      <form onSubmit={handleSubmit} >
   <h2>Add Airplane</h2>
    <br/>
    <input className='f-placeholder' type="text" placeholder="Enter Name" name="airplane" onChange={(e) => setAirlines(e.target.value)}   required/>
    <label className='img-selector' for="img">Select Logo:</label>
  <input type="file" id="img" name="img" accept="image/*"   ></input>
  <br/>
  <br/>
   <button  type='submit'>Add Airline</button>
   </form>
    <div className='a-table-Container'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='user-tabel'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>

            <TableCell >Airlines</TableCell>
            <TableCell >Logo</TableCell>
            <TableCell >Actions</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {airlinesdata.map((doc, index) => {
            return(
              <TableRow
              key={doc.id}
            >
                <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{doc.airlines}</TableCell>


              <TableCell align='left' >
                {/* <Button className='edit-btn'>Edit</Button> */}
                 <Button className='delete-btn'  onClick={(e) => deleteHandler(doc.id)} >Delete</Button>
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
export default Airline;
