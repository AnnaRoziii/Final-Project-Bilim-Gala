import React from 'react';
import { useLocation } from 'react-router-dom';
import { Paper , Typography, Box } from '@mui/material';

const Resume = () => {
    const location = useLocation();
    const tutor = location.state?.tutor;
    if (!tutor) {
      return <div>Tutor not found.</div>;
    }
    const updatedTutor = {
      ...tutor,
    };
  
  return (
     <Paper sx={{
        width: "75%",
        margin: "0 auto ",
        padding: "20px"
     }}>
       < Typography variant="h3" mb={2}> Expirience</Typography>
       <Box> Hello I am  {updatedTutor.name}.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Box>
     </Paper>
   
  )
};

export default Resume;