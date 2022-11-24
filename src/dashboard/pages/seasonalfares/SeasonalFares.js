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
import Button from '@mui/material/Button';
import "./seasonalFares.css"
import AllData from '../../data/AllData';



export const SeasionalFares = () => {
  

 //updating  data in database

 const [seasonaldata, setseasonalData] = useState([]);

const [Amount, setAmount] = useState("");


const handleSubmit = async (e) =>{
  e.preventDefault();
  
  if(Amount ===  "" ){
    console.log("all field are mandatory")
    return;
  }
  const newSeasonal ={
    Amount,
  }
  console.log(newSeasonal);
  try{
    await AllData.updateSeasonal(seasonalId, newSeasonal);
    console.log('data is added')
    setSeasonalId("");
  }catch{
    console.log("error")
  }
  getSeason();
  setAmount("");

}

//this section for getting data from database

 useEffect(() => {
   getSeason();
   
   
 }, []);

 const getSeason = async () => {
   const data = await AllData.getAllSeasonal();
   console.log(data.docs);
   setseasonalData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
 };

//this section for id getting

const [seasonalId, setSeasonalId] = useState("");
 
const getSeasonalIDHandler = (id) => {
  console.log("the id is here", id)
  editHandler();
  setSeasonalId(id);
}


const editHandler = async () => {

    
      const docSnap = await AllData.getSeasonal(seasonalId);
      console.log("the record is :", docSnap.data())
      setAmount(docSnap.data().Amount)
}
// useEffect(()=>{

//   console.log("the id uu is her", seasonalId )
//   if(seasonalId === undefined && seasonalId!== ""){
//    editHandler();
//   }
// }, [seasonalId]);




  return (
    <>
    <Topbar/>
    <div className='navS'>
      <Sidebar/>
    <div className='sContainer'>
      <div className='seasionalFareC'>
       <h2>Seasonal fares</h2>
       <br/>
       

    <input className='seasonal-placeholder' type="text" placeholder="Enter Amount"  required  value={Amount} onChange={(e)=>setAmount(e.target.value) } />
  
      <button type='submit' onClick={handleSubmit} >Update </button>
      </div>
      <div className='a-table-Container'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='user-tabel'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Months</TableCell>
            <TableCell >Amount</TableCell>
            <TableCell >Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
           {seasonaldata.map((doc, index) => {
            return(
              <TableRow
              key={doc.id}
            >
                <TableCell align="left">{index }</TableCell>
              <TableCell align="left">{doc.Month}</TableCell>
              
              <TableCell ><h3>{doc.Amount}</h3></TableCell>
              <TableCell align='left' >
                <Button className='edit-btn' variant="outlined" onClick={(e)=> getSeasonalIDHandler(doc.id)}>Edit</Button>
                {/* <Button variant="outlined" className='delete-btn'  onClick={(e) => deleteHandler(doc.id)} >Delete</Button> */}
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
export default SeasionalFares;
