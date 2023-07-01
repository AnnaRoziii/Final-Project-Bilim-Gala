import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function InterviewDsc({ boxWidth }) {
     return (
          <Box width={boxWidth} sx={{ textAlign:"center"}}>
               <Typography variant="h4" color="primary.main" pb={2}>
                    Interview 1
               </Typography>
               <Typography variant="body1" color="primary.main">
                    It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of
                    the and typesetting indufstry. It is a long established fact will be distracted. Lorem
                    Ipsum is simply dummy from text of the and typesetting indufstry. It is a long established
                    fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting
                    indufstry.
               </Typography>
               <Link >
              <Button  sx={{color: "custom1.main", textAlign:"center"}}>Watch Interview</Button>
              </Link>
          </Box>
     );
}

export default InterviewDsc;
