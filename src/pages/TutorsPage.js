import React, { useState } from 'react';
import { Typography, Grid, Box, Pagination, TextField } from '@mui/material';

import TutorCard from '../components/tutorsections/TutorCard';


const tutors = [
  {
    id: 1,
    name: 'Maral',
    jobTitle: 'Math Tutor',
    image: require('../public/tutor1.jfif'),
  
  },
  {
    id: 2,
    name: 'Dunya',
    jobTitle: 'Science Tutor',
    image: require('../public/tutor2.jfif'),

  },
  {
    id: 1,
    name: 'Maral',
    jobTitle: 'Math Tutor',
    image: require('../public/tutor1.jfif'),
 
  },
  {
    id: 2,
    name: 'Dunya',
    jobTitle: 'Science Tutor',
    image: require('../public/tutor2.jfif'),
    
  },
  {
    id: 1,
    name: 'Maral',
    jobTitle: 'Math Tutor',
    image: require('../public/tutor1.jfif'),
 
  },
  {
    id: 2,
    name: 'Dunya',
    jobTitle: 'Science Tutor',
    image: require('../public/tutor2.jfif'),
  
  },
  {
    id: 1,
    name: 'Maral',
    jobTitle: 'Math Tutor',
    image: require('../public/tutor1.jfif'),
   
  },
  {
    id: 2,
    name: 'Dunya',
    jobTitle: 'Science Tutor',
    image: require('../public/tutor2.jfif'),
    
  },
];

const TutorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTutors, setFilteredTutors] = useState(tutors);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filtered = tutors.filter((tutor) =>
      tutor.name.toLowerCase().includes(value.toLowerCase()) ||
      tutor.jobTitle.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTutors(filtered);
  };

  return (
    <Box sx={{width: "90%", margin:"20px auto"}}>
      <Typography variant="h4" gutterBottom>
        Tutors
      </Typography>
      <TextField
        label="Search by name or job title"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
        style={{ marginBottom: '16px' }}
      />
      <Grid container spacing={4}>
        {filteredTutors.map((tutor) => (
          <Grid item key={tutor.id} xs={12} sm={6} md={3}>
            <TutorCard tutor={tutor} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={10}>
        <Pagination count={100} page={1} />
      </Box>
    </Box>
  );
};

export default TutorsPage;

