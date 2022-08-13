import "./report.css"
import React from 'react'
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Topbar from "../../topbar/Topbar";
import { Sidebar } from "../../sidebar/Sidebar";







export const Report = () => {
  return (
    <>
    
    <div className='rpcontainer'>
   
    <div className="rootbtn1">
      <Button> Add Data</Button>
     
      
    </div>
    <div className="rootbtn2">
      
      <Button> Remove Data</Button>
      
    </div>
    
    </div>
    
  </>
  )
}
export default Report;
