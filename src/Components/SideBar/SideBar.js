import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const SideBar =()=>{
return (
    <Drawer
    variant="permanent"
    sx={{
      width: 250,
      flexShrink: 0,
    }}
  >
    <Box sx={{ overflow: 'auto'  ,
    background: "linear-gradient(20deg,#c33d70 0%, #7a3f85 85%)",
     minHeight : "100vh" , width : "250px"  , color : "#000" }}>
      <List>

        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} sx={{color : "#fff" , textAlign : "center"}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} sx={{color : "#fff" , textAlign : "center"}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
)
}

export default SideBar