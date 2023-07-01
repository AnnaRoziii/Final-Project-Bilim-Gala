import { Box, SwipeableDrawer, Stack } from "@mui/material";
import React from "react";
import Logo from "../common/Logo";
import NavBar from "./NavBar";

function MenuDrawer({ open, onOpen, onClose }) {
  const linkStyle = {
    marginBottom: "20px",
  };
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      sx={{  "& .MuiDrawer-paper": {backgroundColor: "primary.main",},}}>
      <Stack  sx={{ display: "flex", justifyContent: "space-between", mx: 5,}} >
        <Box sx={{ my: 5 }}>
          <Logo />
        </Box>
        <NavBar navStyle={linkStyle} />
      </Stack>
    </SwipeableDrawer>
  );
}

export default MenuDrawer;