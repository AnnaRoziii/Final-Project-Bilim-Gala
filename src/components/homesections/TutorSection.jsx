import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Grid, Box, Paper} from '@mui/material';

const TutorSection = () => {
    
  const tutors = [
    {
      id: 1,
      name: 'Maral',
      subject: 'Mathematics',
      image: require('../../public/tutor1.jfif'),
    },
    {
      id: 2,
      name: 'Aylar',
      subject: 'Science',
      image: require('../../public/tutor2.jfif'),
    },
    {
        id: 3,
        name: 'Maksat',
        subject: 'Mathematics',
        image: require('../../public/tutor3.jfif'),
      },
      {
        id: 4,
        name: 'Elena',
        subject: 'Science',
        image: require('../../public/tutor4.jfif'),
      },
      {
        id: 5,
        name: 'Berdi',
        subject: 'Mathematics',
        image: require('../../public/tutor5.jfif'),
      },
      {
        id: 6,
        name: 'Kiril',
        subject: 'Science',
        image: require('../../public/tutor6.jfif'),
      },
  ];

  return (
    <Box>
    <Box sx={{bgcolor: "primary.main", width: "100%", color: "secondary.main", textAlign: "center",  padding:"100px 0 100px 0",}} >
    <Box sx={{bgcolor: "primary.main", width: "80%", m: "0 auto"}}> 
   <Typography variant="h4" color={"custom1.main"}>Tutors</Typography>
 <Typography variant="body1" margin={"15px 0 0 0"}>На нашем сайте вы имеете возможность присоединиться к различным клубам, которые откроют перед вами увлекательные и перспективные горизонты.</Typography>
 </Box>
    <Grid container spacing={2} justifyContent="center"
    sx={{
        width: "70%",
        margin: "0 auto",
    }}
    >
      <Grid item xs={12}>
      </Grid>
      {tutors.map((tutor) => (
        <Grid item xs={12} sm={6} md={4} key={tutor.id} >
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image={tutor.image}
                alt={tutor.name}
              />
              <CardContent style={{ height: '80px' }}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {tutor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tutor.subject}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
    <Paper variant="outlined"/>
    </Box>
  );
};

export default TutorSection;
