import * as React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import AddMovie from "../Movie/AddMovie";

const boxStyle = { flexGrow: 1, p: 5,  
                   background : "#fff"  ,
                   borderRadius : "15px" ,
                   height : "100%" ,
                   boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.12)"}

 const continStyle ={ display: 'flex'  ,  p: 4 , 
                      background : "rgb(238, 238, 238)" ,
                      minHeight : "100vh" ,
                      display : "flex" ,
                      justifyContent : "center"  ,
                     alignItems : "center" ,
                    }                  
                

export default function App() {
  return (
    <Box sx={continStyle}> 
      <SideBar />
    
      <Box component="main" sx={boxStyle}>
         <AddMovie />
      </Box>
    </Box>
  );
}
