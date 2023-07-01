import { AppBar, Box, Toolbar, Grid } from "@mui/material";
import React, { useState } from "react";
import NavBar from "./header/NavBar";
import Logo from "./common/Logo";
import { Menu } from "@mui/icons-material";
import MenuDrawer from "./header/MenuDrawer";

function Header() {
  const [open, setOpen] = useState(false);
  function toggleDrawer() {
    setOpen(!open);
  } 

  return (
    <AppBar
    position="static"
      sx={{ boxShadow: "0 0 0", backgroundColor: "#primary.main" }}
    >
      <Toolbar
        sx={{
          pt: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",   
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sm={2} md={6}>
            <Logo/>
          </Grid>
          <Grid item sm={7} md={6}>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <NavBar />
            </Box>
          </Grid>
          <Grid item sx={{ display: { sm: "flex", md: "none" } }}>
            <Menu onClick={toggleDrawer} fontSize="large" />
            <MenuDrawer
              open={open}
              onOpen={toggleDrawer}
              onClose={toggleDrawer}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
