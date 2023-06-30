import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Autoplay, Parallax } from 'swiper';
import { Typography, Paper } from '@mui/material';

SwiperCore.use([Navigation, Autoplay, Parallax]);

const ClubsHero = ({ slides }) => {
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
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        >
          <Paper
            sx={{
              width: '45%',
              margin: '30px 0  0 30px',
              padding: '15px',
            }}
          >
            <Typography variant="h2" marginBottom={2}>
              {slide.title}
            </Typography>
            <Typography variant="h6">
              {slide.description}
            </Typography>
          </Paper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClubsHero;




