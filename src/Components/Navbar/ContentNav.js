import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { useEffect } from "react";
import KeyIcon from "@mui/icons-material/Key";

const logoStyle = {
  // backgroundImage: `url(${logo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "  center ",
  mt: 1,
};

const boxStyle = {
  bgcolor: "secondary.main",
  color: "#fff",
  height: "100vh",
  overflow: "auto",
};

const data = [
  {
    text: "Dashboard",
    url: "/",
    icon: <DashboardIcon sx={{ marginLeft: " auto" }} />,
  },
  {
    text: "Billing",
    url: "/billing",
    icon: <CreditCardIcon sx={{ marginLeft: " auto" }} />,
  },
  {
    text: "Plan",
    url: "/plan",
    icon: <LoyaltyIcon sx={{ marginLeft: " auto" }} />,
  },
  {
    text: "Keys",
    url: "/keys",
    icon: <KeyIcon sx={{ marginLeft: " auto", transform: "rotate(130deg)" }} />,
  },
  {
    text: "Log out",
    url: false,
    icon: <LoyaltyIcon sx={{ marginLeft: " auto" }} />,
  },
];

const ContentNav = (props) => {
  let location = useLocation();
  let navigate = useNavigate();

  const changeRouteHandel = (url) => {
      navigate(url);
  
  };

  useEffect(() => {
  }, [location.pathname]);

  const listStyle = (url) => ({
    display: !url ? { md: "none" } : "block",
    background: url === location.pathname ? "white" : "inherit",
    color: url === location.pathname ? "secondary.main" : "inherit",
  });

  const iconStyle =(url)=>(
    {color: url === location.pathname ? "secondary.main" : "white",  }
  )
  return (
    <Box sx={boxStyle}>
      <Toolbar sx={logoStyle}></Toolbar>

      <List>
        {data.map((el) => (
          <ListItem
            sx={listStyle(el.url)}
            key={el.url}
            disablePadding
            onClick={() => {
              changeRouteHandel(el.url);
            }}
          >
            <ListItemButton
              sx={{ justifyContent: "space-between", display: "flex" }}
            >
              <ListItemText primary={el.text} />
              <ListItemIcon
                sx={iconStyle(el.url)}
              >
                {el.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContentNav;
