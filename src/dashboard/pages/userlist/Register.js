import React, { useState } from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import "./register.css"
import {useNavigate} from 'react-router-dom';
import { useUserAuth } from '../../../components/context/UserAuthContext';
import { Alert } from '@mui/material';

import AllData from '../../data/AllData';

export const Register = () => {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const {signUp} = useUserAuth();
 const navigate = useNavigate();
 

 
 
 const handleSubmit = async (e) => {
e.preventDefault();
setError("")
const newUser ={
  email,
  password,
};
console.log(newUser)
try{

  await signUp(email, password);
  navigate("/user");

   await AllData.addUsers(newUser)
  
 
} catch (err){
 setError(err.message);
}

 };
   

  return (
    <>
    <Topbar/>
    <div className='navu'>
      <Sidebar/>
    <div className='rContainer'>
        <h1>Register</h1>
        <div className='r-form-Container'>
       
       
  <div className="f-container">
    <form onSubmit={handleSubmit}>
    <p>Please fill in this form to create an account.</p>
    <hr/>
       
    <label className='r-email-label' for="email"><b>Email:</b></label>
    <br/>
    {error && <Alert severity='error'>{error}</Alert>}
  <br/>
  
    <input className='email-placeholder' type='email' placeholder='Enter Email' required onChange={(e) => setEmail(e.target.value)}></input>
  <br/>
  <br/>
    <label className='r-password-label' for="psw"><b>Password:</b></label>
    <br/>
  <br/>
    <input className='password-placeholder' type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required/>

    
    <hr/>
   

    <button type="Submit" className="registerbtn" >Register</button>
  
    </form>
 
</div>
        </div>
    </div>
    </div>
    </>
  )
}
export default Register;