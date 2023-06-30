import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Paper, Typography, Divider, Avatar } from '@mui/material';

const TutorDetailPage = () => {
  const location = useLocation();
  const tutor = location.state?.tutor;
  if (!tutor) {
    return <div>Tutor not found.</div>;
  }
  const updatedTutor = {
    ...tutor,
    contact: 'tutor@example.com',
    rating: 4.5,
    photo: '../../public/tutor1.jfif',
  };

  return (
    <Grid container spacing={4} alignItems={"center"} 
    sx={{
width: "60%",
margin: "30px auto",
    }}
    >
      <Grid item xs={12} sm={6} >
        <Paper sx={{ p: 3, bgcolor: "primary.main",
color: "custom1.main" }}>
          <Typography variant="h5" gutterBottom>
            {updatedTutor.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {updatedTutor.jobTitle}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" gutterBottom>
            Contact: {updatedTutor.contact}
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
          sx={{ width: 300, height: 300,  }}
        />
      </Grid>
    </Grid>
  );
};

export default TutorDetailPage;
