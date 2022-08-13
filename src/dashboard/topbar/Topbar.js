import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../components/context/UserAuthContext';




export default function Topbar() {

  
 const {logOut} = useUserAuth(); 
 

  const handleLogOut = async () =>{
   try{
await logOut();
   }catch (err)   {  
    console.log(err.message)
   

   }
  };
  return (
    <div className='topbar'>
    <div className='topbarWrapper'>

     <div className='topLeft'>
      <Link to="/admin" style={{textDecoration :'none'}}> <span className='logo'>Bliss_Flight</span></Link>
       
     </div>
     <div className='topRight'>
        <div className='topbariconContainer'>
          <button onClick={handleLogOut} >logout</button>
            

        </div>
     </div>
    </div>


    </div>
  ) 
}
