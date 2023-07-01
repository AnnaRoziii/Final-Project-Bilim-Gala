import React from 'react';
import { Typography, Paper, Box} from '@mui/material';
import CustomCard from "../common/CustomCard"
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
    {
      id: 5,
      name: 'Green',
      date: '2023-06-28',
      image: require('../../public/environment-club.jfif'),
    },
    {
      id: 6,
      name: 'Health Club',
      date: '2023-06-29',
      image: require('../../public/health-club.jfif'),
    },
  ];

  return (
    <Box>
      <Box sx={{ bgcolor: 'primary.main', width: '100%', color: 'secondary.main', textAlign: 'center', padding: '100px 0 100px 0' }}>
        <Box sx={{ bgcolor: 'primary.main', width: '80%', m: '0 auto' }}>
          <Typography variant="h4" color="custom1.main">
            Clubs
          </Typography>
          <Typography variant="body1" margin="15px 0 40px 0">
            On our website, you have the opportunity to join various clubs that open up exciting and promising horizons.
          </Typography>
        </Box>
        <CustomCard items={clubs} />
      </Box>
      <Paper variant="outlined" />
    </Box>
  );
};

export default Clubs
