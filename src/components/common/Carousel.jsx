import React from "react";
import { Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import brand1 from "../../public/P4S.png";
import brand2 from "../../public/UCA.jpg";
import brand3 from "../../public/Digi.jpg";
import brand4 from "../../public/flex.jfif";
import brand5 from "../../public/volunteering.jpg";
import { Autoplay } from "swiper";

function Carousel() {
  const slides = [
    { slideImage: brand1, altText: "P4S" },
    { slideImage: brand2, altText: "UCA" },
    { slideImage: brand3, altText: "DigiWomen" },
    { slideImage: brand4, altText: "Flex" },
    { slideImage: brand3, altText: "GRE" },
    { slideImage: brand5, altText: "Volunteering" },
  ];
  const swiperStyles = {
    backgroundColor: "custom.main", 
  };
  const slidesPerView = {
    0: 1,
    600: 2,
    960: 3,
  };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={slidesPerView}
      loop={true}
      autoplay={{
        delay: 1500,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay]}
      style={swiperStyles}
    >
        <Link>
      {slides.map((slide) => (
        <SwiperSlide key={slide.altText} style={{ width: "25%" }}>
         
            <img
              src={slide.slideImage}
              alt={slide.altText}
              style={{ width: "100%", height: "250px" }}
            />
         
        </SwiperSlide>
      ))}
       </Link>
    </Swiper>
  );
}

export default Carousel;
