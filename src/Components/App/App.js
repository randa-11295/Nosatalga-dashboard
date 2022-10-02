import Box from "@mui/material/Box";
import AddMovie from "../Movie/AddMovie";
import AddActors from "../Actors/AddActors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import TopNav from "../../Components/Navbar/TopNav";
import SideNav from "../../Components/Navbar/SideNav";
import { useState } from "react";

export default function App() {

  
  const [mobileOpen, setMobileOpen] = useState(false);

  const openHandel = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawerWidth = 240;
  const BoxStyle = {
    flexGrow: 1,
    // p: 3,
    width: { md: `calc(100% - ${drawerWidth}px)` },
  };


  return (
    <BrowserRouter>
     <Box sx={{ display: "flex" }}>
        <TopNav openHandel={openHandel} drawerWidth={drawerWidth} />

            <SideNav
            openHandel={openHandel}
            mobileOpen={mobileOpen}
            drawerWidth={drawerWidth}
          />

          <Box component="main" sx={BoxStyle}>
            <Toolbar />

          <Routes>
            <Route path="/" element={<AddMovie />} />
            <Route path="/add-media" element={<AddMovie />} />
            <Route path="/add-actor" element={<AddActors />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
