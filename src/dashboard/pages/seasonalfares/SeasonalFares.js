import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import "./seasonalFares.css"
export const SeasionalFares = () => {
  return (
    <>
    <Topbar/>
    <div className='navS'>
      <Sidebar/>
    <div className='sContainer'>Seasonal fares page</div>
    </div>
    </>
  )
}
export default SeasionalFares;
