import React from 'react'
import "./sidebar.css"
import { Group, LineStyle } from '@material-ui/icons';
import { AirlineStops, ConnectingAirports, FlightClass, CurrencyPound } from '@mui/icons-material';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
              
                <h3 className='sidebarTitle'>Dashboard</h3>
            <ul className='sidebarList'>
              <li className='sidebarListItem '>
              <Link to='/admin'    style={{textDecoration :'none'}}> 
              <LineStyle className='sidebarIcons'/>
              Home
              </Link >
             
              </li>
              <li className='sidebarListItem  '>
              <Link   to="/airline"    style={{textDecoration :'none'}}>
              <ConnectingAirports className='sidebarIcons'  />
              Airlines
              </Link>
              
              
              </li>
              <li className='sidebarListItem'>
              <Link  to="/locations"    style={{textDecoration :'none'}}>
              <AirlineStops className='sidebarIcons' />
              Destination
              </Link>
              
              </li>
              <li className='sidebarListItem'>
              <Link  to="/f_classes"    style={{textDecoration :'none'}}>
              <FlightClass className='sidebarIcons'/>
              Classes
              </Link>
              
              </li>
              <li className='sidebarListItem'>
              <Link to="/seasional_fares"    style={{textDecoration :'none'}}>
              <CurrencyPound className='sidebarIcons'/>
              Seasonal Fares
              </Link>
              
              </li>
              <li className='sidebarListItem'>
              <Link to="/user"    style={{textDecoration :'none'}}>
              <Group className='sidebarIcons'/>
              Users
              </Link>
              
              </li>

            </ul>
            </div>
        </div>
    </div>
  )
}
