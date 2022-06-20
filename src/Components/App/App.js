import * as React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import AddMovie from "../Movie/AddMovie";

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}> 
      <SideBar />
    
      <Box component="main" sx={{ flexGrow: 1, p: 6 }}>
         <AddMovie />
      </Box>
    </Box>
  );
}
