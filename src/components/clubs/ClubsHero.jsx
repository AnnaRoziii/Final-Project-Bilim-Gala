import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Autoplay, Parallax } from 'swiper';

import DigiImage from '../../public/swipe1.jpg';
import StudyClubImage from '../../public/swipe2.jpg';
import HeroImage from '../../public/swipe3.jpg';
import { Typography, Box } from '@mui/material';

SwiperCore.use([Navigation, Autoplay, Parallax]);

const ClubsHero = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const interval = setInterval(() => {
      if (swiper && !swiper.animating) {
        if (swiper.activeIndex < swiper.slides.length - 1) {
          swiper.slideNext();
        } else {
          swiper.slideTo(0);
        }
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      style={{ width: '100%', height: '500px' }}
      navigation
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide style={{ backgroundImage: `url(${DigiImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
        <Box sx={{
            width:" 45%",
            margin: "30px 0  0 30px"
        }}>
        <Typography variant="h2" marginBottom={2}> Welcome to our Clubs Community!</Typography>
        <Typography variant="h6"> Joining clubs is an incredible opportunity for both educational and personal growth. By becoming a part of our vibrant club community, you'll embark on a journey of discovery, collaboration, and skill-building.</Typography>
      </Box>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${StudyClubImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
      <Box  sx={{
              width:" 45%",
              margin: "30px 0  0 30px"
        }}>
      <Typography variant="h2" marginBottom={2}> Unleash Your Potential through Club Membership</Typography>
      <Typography variant="h6"> Joining or creating a club opens up a world of possibilities. It allows you to dive deeper into subjects that fascinate you, expand your knowledge beyond the classroom, and develop valuable skills that will benefit you in your academic and professional life. Whether you're interested in science, arts, technology, or any other field, our clubs offer a supportive environment where you can pursue your interests, engage in meaningful discussions, and collaborate on exciting projects.</Typography>
        </Box>
        </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
      <Box sx={{
             width:" 45%",
             margin: "30px 0  0 30px"
        }}>
         <Typography variant="h2" marginBottom={2}> Community, Connection, and Growth</Typography>
      <Typography variant="h6">By joining our clubs, you'll not only enhance your educational experience but also foster meaningful connections and friendships. Our club community is a diverse and inclusive space where individuals from different backgrounds come together to share their unique perspectives and experiences. </Typography>
    </Box>
    </SwiperSlide>
    </Swiper>
  );
};

export default ClubsHero;


