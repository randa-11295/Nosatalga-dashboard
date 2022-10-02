import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import MenuNav from "../Navbar/MenuNav";
import { useEffect, useState } from "react";

const avatarStyle = {
  display: { md: "none" },
  bgcolor: "#fff",
  color: "#000",
  width: 35,
  height: 35,
};

const TopNav = (props) => {

  const [route, setRoute] = useState("");



  const navStyle = {
    width: { md: `calc(100% - ${props.drawerWidth}px)` },
    ml: { md: `${props.drawerWidth}px` },
    background: { md: "#fff" },
    color: { md: "#000" },
  };

  return (
    <AppBar position="fixed" color="secondary" sx={navStyle}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.openHandel}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textTransform: "capitalize" }}
          component="h6"
        >
          {route}
        </Typography>
        {/* <MenuNav name={"l"} /> */}

        <IconButton>
          <Avatar sx={avatarStyle}> o </Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
