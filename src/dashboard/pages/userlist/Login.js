import React, { useContext, useState } from 'react';

import './login.css'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../components/context/UserAuthContext';



function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {logIn} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try{
      await logIn(email, password);
     
      navigate("/admin");
    } catch (err){
     setError(err.message);
    }
    
     };


return(
    <div>
     <div className='logContainer'>
        <h1>Login</h1>
        <div className='login-form-Container'>
       
       
  <div className="login-container">
  <form onSubmit={handleSubmit}>
    {error && <span>Wrong email or password!</span>}
    <hr/>
   
    <label className='r-email-label' for="email"><b>Email:</b></label>
    <br/>
     <br/>
    <input className='email-placeholder' type="email" placeholder="Enter Email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
     <br/>
     <br/>
    <label className='r-password-label' for="psw"><b>Password:</b></label>
    <br/>
     <br/>
    <input type="password" placeholder="Enter Password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>

    
    <hr/>
   

     <button type="Submit" className="loginbtn">Login</button>
  
 </form>
 
</div>
        </div>
    </div>
    </div>
);

}
export default Login;