import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Link, Box, Paper} from '@mui/material';

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: 'Study Club',
      date: '2023-06-26',
      image: require('../../public/study-club.jfif'),
    },
    {
      id: 2,
      name: 'Art Club',
      date: '2023-06-27',
      image: require('../../public/art-club.png'),
    },
    {
      id: 3,
      name: 'Green',
      date: '2023-06-28',
      image: require('../../public/environment-club.jfif'),
    },
    {
      id: 4,
      name: 'Health Club',
      date: '2023-06-29',
      image: require('../../public/health-club.jfif'),
    },
  ];

  return (
    <Box>
    <Box sx={{bgcolor: "primary.main", width: "100%", color: "secondary.main", textAlign: "center",  padding:"100px 0 100px 0",}} >
       <Box sx={{bgcolor: "primary.main", width: "80%", m: "0 auto"}}> 
      <Typography variant="h4" color={"custom1.main"}>Clubs</Typography>
    <Typography variant="body1" margin={"15px 0 40px 0"}>На нашем сайте вы имеете возможность присоединиться к различным клубам, которые откроют перед вами увлекательные и перспективные горизонты.</Typography>
    </Box>
    <Grid container spacing={2}  width={"90%"} m={"0 auto"}>
      {clubs.map((club) => (
        <Grid key={club.id} item xs={12} sm={6} md={4} lg={3} >
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={club.image}
              alt={club.name}
            
            />
            <CardContent>
              <Typography variant="h6" component="h2">
                {club.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: {club.date}
              </Typography>
            </CardContent>
            <Button component={Link} to={`/clubs/${club.id}`} color="primary">
              Read More
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
    <Paper variant="outlined"/>
    </Box>
  );
};

export default Clubs;

