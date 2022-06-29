import * as React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import AddMovie from "../Movie/AddMovie";
import AddActors from '../Actors/AddActors';

const boxStyle = { flexGrow: 1, p: 5,  
                   background : "#fff"  ,
                   borderRadius : "15px" ,
                   height : "100%" ,
                 
                   margin : "auto" , 
                   boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.12)"}

 const continStyle ={ display: 'flex'  ,  px: 10  ,  py: 5 , 
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

            <AddActors />

         {/* <AddMovie /> */}
      </Box>
    </Box>
  );
}
