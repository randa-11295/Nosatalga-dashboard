import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuList from '@mui/material/MenuList';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import {logOutHandel} from "../../Redux/sliceReducers/rejesterSlice"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';


export default function MenuNav(props) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const madeLogoutHandel=()=>{
    dispatch(logOutHandel(  ));
  }

  return (
    <Box sx={{display :{xs : "none" , md :"block"}}}>
      <IconButton onClick={handleClick}>
        <Avatar
          sx={{
            bgcolor:  "secondary.main" ,
             width: 35, height: 35 
          }}
        >
          {props.name}
        </Avatar>
      </IconButton>
      <Menu     
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList >
        <MenuItem >
          <ListItemIcon>
            <PersonOutlineIcon fontSize="small" />
          </ListItemIcon>
          <Typography sx={{pr : 1 , p1: 1}} variant="inherit">My account</Typography>
        </MenuItem >
        <MenuItem  onClick={madeLogoutHandel}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography sx={{pr : 1 , p1: 1}}  variant="inherit">Log out</Typography>
        </MenuItem>
      
      </MenuList>
      </Menu>
    </Box>
  );
}
