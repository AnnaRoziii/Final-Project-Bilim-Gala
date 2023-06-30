import React from 'react';
import { Box } from '@mui/material';
import HeroHome from "../components/homesections/HeroHome"
import NewsCarousel from "../components/homesections/NewsCarousel"
import AboutUs from "../components/homesections/AboutUs"
import TutorSection from "../components/homesections/TutorSection"
import Clubs from "../components/homesections/Clubs"



const HomePage = () => {
  return (
    <Box>
        <HeroHome/>
      <AboutUs/>
      <NewsCarousel />
      <Clubs />
      <TutorSection/>
    </Box>
  );
};

export default HomePage;



