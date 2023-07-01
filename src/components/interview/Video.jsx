import { Box } from "@mui/material";
import React from "react";

function Video({ imgWidth, video }) {
  return (
    <Box
      height="60vh"
      width={imgWidth}
      sx={{
        backgroundImage: `url(${video})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "cover",
        borderRadius: 5, 
        marginBottom : {xs: "20px", sm: "20px"}
      }}
    />
  );
}

export default Video;