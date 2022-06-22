import * as React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import AddMovie from "../Movie/AddMovie";

export default function App() {
  return (
    <Box sx={{ display: 'flex'  ,  p: 6 , }}> 
      <SideBar />
    
      <Box component="main" sx={{ flexGrow: 1, p: 6 ,  background : "#fff"  ,  borderRadius : "15px" , boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.12)"}}>
         <AddMovie />
      </Box>
    </Box>
  );
}
