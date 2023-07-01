import React from 'react';
import { Typography, Paper, Box} from '@mui/material';
import CustomCard from "../common/CustomCard"
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
      <Box sx={{ bgcolor: 'primary.main', width: '100%', color: 'secondary.main', textAlign: 'center', padding: '100px 0 100px 0' }}>
        <Box sx={{ bgcolor: 'primary.main', width: '80%', m: '0 auto' }}>
          <Typography variant="h4" color="custom1.main">
            Tutors
          </Typography>
          <Typography variant="body1" margin="15px 0 0 0">
            On our website, you can find a tutor perfectly suited to you based on ratings, location, and subject of study. Our rating and review system will help you make an informed decision and choose an experienced and qualified specialist.
          </Typography>
        </Box>
        <CustomCard items={tutors} />
      </Box>
      <Paper variant="outlined" />
    </Box>
  );
};

export default TutorSection;
