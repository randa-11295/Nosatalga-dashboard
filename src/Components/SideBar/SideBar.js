import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const boxStyle = {
  overflow: "auto",
  background: "linear-gradient(20deg,#c33d70 0%, #7a3f85 85%)",
  minHeight: "100vh",
  width: "250px",
  color: "#000",
};

const links = [{ route :"add-media" , label : "add media"}, {route :"add-actor" , label : "add actor"} ];

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
      }}
    >
      <Box sx={boxStyle}>
        <List>
          {links.map((text) => (
            <ListItem key={text.route} disablePadding>
              <ListItemButton  sx={{ display: "flex", justifyContent: "center" }}  >
                <Link to={text.route}>
                  <ListItemText
                    sx={{ color: "#fff", textAlign: "center" }}
                    primary={text.label}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
