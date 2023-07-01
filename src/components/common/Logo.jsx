import React, { memo } from "react";
import { Box, Link } from "@mui/material";
import logo from "../../public/logo.png";
function Logo() {
  return (
    <Box   marginLeft={"16px"} >
      <Link underline="none" href="/" >
        <img src={logo} alt="logo"/>
      </Link>
    </Box>
  );
}

export default memo(Logo);