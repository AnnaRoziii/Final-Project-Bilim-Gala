import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Paper, Typography, Divider, Avatar, Box } from '@mui/material';
import Resume from "./Resume"

const TutorDetailPage = () => {
  const location = useLocation();
  const tutor = location.state?.tutor;
  if (!tutor) {
    return <div>Tutor not found.</div>;
  }
  const updatedTutor = {
    ...tutor,
    phone: +99365847216,
    email: 'tutor@example.com',
    rating: 4.5,
    photo: require('../../public/tutor1.jfif'),
    location : "TM / Dashoguz",
    prize : "50m/h",
  };

  return (
    <Box sx={{
      bgcolor: "#DFD7BF",
      width: "90%",
      margin: "0 auto 50px",
      pb: "50px"
    }}>
    <Grid container spacing={4} alignItems={"center"}  justifyContent={"center"}
    sx={{
      width: {xs: "60%", sm:"95%", md: "65%" },
margin: "30px auto", 
    }}
    >
      <Grid item xs={12} sm={6} >
        <Paper sx={{ p: 3, bgcolor: "primary.main",
color: "custom1.main",
width: { sm:"300px"},  height:{ sm:"400px"}}}>
          <Typography variant="h5" gutterBottom>
            {updatedTutor.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {updatedTutor.jobTitle}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" gutterBottom>
            Email: {updatedTutor.email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Contact: {updatedTutor.phone}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Location : {updatedTutor.location}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Prize : {updatedTutor.prize}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Rating: {updatedTutor.rating}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2">{updatedTutor.resume}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Avatar
          src={updatedTutor.photo}
          alt={updatedTutor.name}
          sx={{  
            width: {xs: "150px", sm:"200px", md: "300px" }, 
            height:{xs: "150px", sm:"200px", md: "300px" }
            }} 
        />
      </Grid>
    </Grid>
   <Resume/>
   </Box>
  );
};

export default TutorDetailPage;
