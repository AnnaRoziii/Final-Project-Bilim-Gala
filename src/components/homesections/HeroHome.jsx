import React from 'react';
import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';
import backgroundImage from '../../public/hero.JPG';

const HeroSection = styled('section')(({ theme }) => ({
  backgroundColor: '#0A0A0A',
  color: '#ffffff',
  padding: theme.spacing(4),
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paddingBottom: "50px"
}));

const HeroContent = styled('div')(({ theme }) => ({
  flex: '1',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const HeroImage = styled('div')(({ theme }) => ({
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    marginRight: theme.spacing(9),
  },
}));

const HeroImageContainer = styled('div')(({ theme }) => ({
  maxWidth: '600px',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
}));

const HeroHome = () => {
  return (
    <HeroSection>
      <HeroImage>
        <HeroImageContainer>
          <img src={backgroundImage} alt="Bilim Gala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </HeroImageContainer>
      </HeroImage>
      <HeroContent>
        <Typography variant="h2" component="h1">
          Добро пожаловать в Bilim Gala
        </Typography>
        <Typography variant="h5" component="p" sx={{margin: "10px 0 40px 0"}}>
          Ваш центр информации и социальных инициатив
        </Typography>
        <Button variant="outlined" color="custom">
          Join Us
        </Button>
      </HeroContent>
    </HeroSection>
  );
};

export default HeroHome;








