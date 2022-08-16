import React, { useContext } from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Services from './components/pages/AboutUs';
import Products from './components/pages/Flights';
import SignUp from './components/pages/Holidays';
import ContactUs from './components/pages/ContactUs';
import Africa from './components/pages/Africa';
import BookFlight from './components/pages/BookFlight';
import Asia from './components/pages/Asia';
import Europe from './components/pages/Europe';
import FarEast from './components/pages/FarEast';
import MiddleEast from './components/pages/MiddleEast';
import Admin from './dashboard/Admin';
import Userlist from './dashboard/pages/userlist/Userlist';
import Airline from './dashboard/pages/airlines/Airlines';
import Locations from './dashboard/pages/destination/Locations';
import Fclasses from './dashboard/pages/classes/Fclasses';
import SeasionalFares from './dashboard/pages/seasonalfares/SeasonalFares';
import { Terms } from './components/pages/Terms';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import Register from './dashboard/pages/userlist/Register';
import Login from './dashboard/pages/userlist/Login';
import AddFlight from './dashboard/pages/addflight/AddFlight';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from './dashboard/pages/userlist/ProtectedRoute';







function App() {



  

  
  return (
    <>
    
      <Router>
      
      
        <Routes>

       <Route exact  path='/'  element={<Home/>} />
          <Route path='/about-us' element={<Services/>} />
          <Route path='/flights' element={<Products/>} />
          <Route path='/Holidays' element={<SignUp/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/africa' element={<Africa/>} />
          <Route path='/book-flight' element={<BookFlight/>} />
          <Route path='/europe' element={<Europe/>} />
          <Route path='/asia' element={<Asia/>} />
          <Route path='/far_east' element={<FarEast/>} />
          <Route path='/middle_east' element={<MiddleEast/>} />
          <Route path='/terms_conditions' element={<Terms/>} />
         <Route path='/privacy_policy' element={<PrivacyPolicy/>} />
         {/* this section for admin panel */}
          
         <Route path='/login' element={<Login/>} />

          <Route path='/admin' element={ <ProtectedRoute> <Admin/></ProtectedRoute>}/>
         <Route path='/user' element={<ProtectedRoute><Userlist/></ProtectedRoute>} />
         <Route path='/airline' element={<Airline/>} />
         <Route path='/locations' element={<ProtectedRoute><Locations/></ProtectedRoute>} />
         <Route path='/addflight' element={<ProtectedRoute><AddFlight/></ProtectedRoute>} />
         
         <Route path='/seasional_fares' element={<ProtectedRoute><SeasionalFares/></ProtectedRoute>} />
         <Route path='/f_classes' element={<ProtectedRoute><Fclasses/></ProtectedRoute>} />
        
         <Route path='/register' element={<ProtectedRoute><Register/></ProtectedRoute>} />
        
         
         </Routes>
       
      </Router>
     
      
    </>
  );
}

export default App;
